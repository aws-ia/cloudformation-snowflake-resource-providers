import {AbstractSnowflakeResource} from "../../Snowflake-Common/src/abstract-snowflake-resource"
import {SnowflakeClient} from "../../Snowflake-Common/src/snowflake-client"
import {Transformer, CaseTransformer} from "../../Snowflake-Common/src/util"
import { ResourceModel, TypeConfigurationModel } from './models';
import {
    NotFound,
    NotUpdatable
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions";
import {version} from '../package.json';
import {plainToClass, classToPlain, plainToClassFromExist} from "class-transformer";

type ShownGrant = {
    granted_on: string,
    granted_to: string,
    grantee_name: string,
    privilege: string
}

class Resource extends AbstractSnowflakeResource<ResourceModel, ResourceModel, ResourceModel, ResourceModel, TypeConfigurationModel> {

    // UserAgent (connection 'application') is limited to 50 characters, and can only contain alpha-numeric characters, and ., -, and _
    private userAgent = `${this.typeName}/${version}`
        .replace(/[^A-Za-z0-9.\-_]/g, "-")
        .substring(0, 50);

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let allGrants = await this.list(model, typeConfiguration);
        let result = allGrants.find(rm => {
            return rm.privilege.toLowerCase() === model.privilege.toLowerCase() &&
                rm.warehouseName.toLowerCase() === model.warehouseName.toLowerCase() &&
                rm.role.toLowerCase() === model.role.toLowerCase();
        });
        if (result === undefined) {
            throw new NotFound("Grant", `${model.warehouseName}, ${model.role}`);
        }
        return result;
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        let client = new SnowflakeClient(typeConfiguration.snowflakeAccess.account, typeConfiguration.snowflakeAccess.username, typeConfiguration.snowflakeAccess.password, this.userAgent);
        let command = `SHOW GRANTS ON WAREHOUSE ${model.warehouseName}`;

        let grants = await client.doRequest(command, []);
        let results: ResourceModel[]= [];

        grants
            .filter(row => {
                let grant = <ShownGrant>row;
                return grant.granted_to.toLowerCase() === "role";
            })
            .forEach(function(row) {
                let grant = <ShownGrant>row;
                results.push(new ResourceModel(<ResourceModel> {
                        warehouseName: model.warehouseName,
                        privilege: grant.privilege,
                        role: grant.grantee_name
                    }
                ))})

        return results;
    }

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let client = new SnowflakeClient(typeConfiguration.snowflakeAccess.account, typeConfiguration.snowflakeAccess.username, typeConfiguration.snowflakeAccess.password, this.userAgent);
        let command =
            `GRANT ${model.privilege}
             ON WAREHOUSE ${model.warehouseName}
             TO ROLE ${model.role}`;
        await client.doRequest(command, []);

        return model;
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        throw new NotUpdatable()
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        let client = new SnowflakeClient(typeConfiguration.snowflakeAccess.account, typeConfiguration.snowflakeAccess.username, typeConfiguration.snowflakeAccess.password, this.userAgent);
        let command =
            `REVOKE ${model.privilege}
             ON WAREHOUSE ${model.warehouseName}
             FROM role ${model.role}`;

        await client.doRequest(command, []);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: ResourceModel | undefined): ResourceModel {
        if (!from) {
            return model;
        }

        const result = new ResourceModel({
            ...model,
            ...Transformer.for(from)
                .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                .forModelIngestion()
                .transform(),
        });

        return plainToClass(ResourceModel,
            classToPlain(result),
            { excludeExtraneousValues: true });
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;

import {AbstractSnowflakeResource} from "../../Snowflake-Common/src/abstract-snowflake-resource"
import {SnowflakeClient} from "../../Snowflake-Common/src/snowflake-client"
import {Transformer, CaseTransformer} from "../../Snowflake-Common/src/util"
import { ResourceModel, TypeConfigurationModel } from './models';
import {
    NotFound,
    NotUpdatable
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions";
import {version} from '../package.json';

type ShownGrant = {
    role: string,
    grantee_name: string
}

class Resource extends AbstractSnowflakeResource<ResourceModel, ResourceModel, ResourceModel, ResourceModel, TypeConfigurationModel> {

    // UserAgent (connection 'application') is limited to 50 characters, and can only contain alpha-numeric characters, and ., -, and _
    private userAgent = `${this.typeName}/${version}`
        .replace(/[^A-Za-z0-9.\-_]/g, "-")
        .substring(0, 50);

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let allGrants = await this.list(model, typeConfiguration);
        let result = allGrants.find(rm => {
            return rm.user.toLowerCase() === model.user.toLowerCase() &&
                rm.roleName.toLowerCase() === model.roleName.toLowerCase();
        });
        if (result === undefined) {
            throw new NotFound("RoleGrant", `${model.roleName}, ${model.user}`);
        }
        return result;
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        let client = new SnowflakeClient(typeConfiguration.snowflakeAccess.account, typeConfiguration.snowflakeAccess.username, typeConfiguration.snowflakeAccess.password, this.userAgent);
        let command = `SHOW GRANTS TO USER ${model.user}`;

        let grants = await client.doRequest(command, []);
        let results: ResourceModel[]= [];

        grants
            .forEach(function(row) {
                let grant = <ShownGrant>row;
                results.push(new ResourceModel(<ResourceModel> {
                        user: model.user,
                        roleName: grant.role
                    }
                ))});

        return results;
    }

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let client = new SnowflakeClient(typeConfiguration.snowflakeAccess.account, typeConfiguration.snowflakeAccess.username, typeConfiguration.snowflakeAccess.password, this.userAgent);
        let command = `GRANT ROLE ${model.roleName}
                       TO USER ${model.user}`;
        await client.doRequest(command, []);

        return model;
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        throw new NotUpdatable()
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        let client = new SnowflakeClient(typeConfiguration.snowflakeAccess.account, typeConfiguration.snowflakeAccess.username, typeConfiguration.snowflakeAccess.password, this.userAgent);
        let command = `REVOKE ROLE ${model.roleName}
                       FROM USER ${model.user}`;
        await client.doRequest(command, []);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: ResourceModel | undefined): ResourceModel {
        if (!from) {
            return model;
        }

        return new ResourceModel({
            ...model,
            ...Transformer.for(from)
                .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                .forModelIngestion()
                .transform(),
        });
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;

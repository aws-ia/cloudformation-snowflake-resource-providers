import {AbstractSnowflakeResource} from "../../Snowflake-Common/src/abstract-snowflake-resource"
import {SnowflakeClient} from "../../Snowflake-Common/src/snowflake-client"
import {Transformer, CaseTransformer} from "../../Snowflake-Common/src/util"
import { ResourceModel, TypeConfigurationModel } from './models';
import {NotFound} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions";
import {version} from '../package.json';

type ShownRole = {
    name: string,
    comment: string
}

class Resource extends AbstractSnowflakeResource<ResourceModel, ResourceModel, ResourceModel, ResourceModel, TypeConfigurationModel> {

    // UserAgent (connection 'application') is limited to 50 characters, and can only contain alpha-numeric characters, and ., -, and _
    private userAgent = `${this.typeName}/${version}`
        .replace(/[^A-Za-z0-9.\-_]/g, "-")
        .substring(0, 50);

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let client = new SnowflakeClient(typeConfiguration.snowflakeAccess.account, typeConfiguration.snowflakeAccess.username, typeConfiguration.snowflakeAccess.password, this.userAgent);

        let command = `SHOW ROLES LIKE '${model.name}'`;
        let roles = await client.doRequest(command, []);
        if (roles.length == 0) {
            throw new NotFound("Role", model.name);
        }
        let role = <ShownRole>roles[0];

        return new ResourceModel(<ResourceModel> {
            name: role.name,
            comment: role.comment
        });
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        let client = new SnowflakeClient(typeConfiguration.snowflakeAccess.account, typeConfiguration.snowflakeAccess.username, typeConfiguration.snowflakeAccess.password, this.userAgent);
        let command = 'SHOW ROLES'

        let databases = await client.doRequest(command, []);
        let results: ResourceModel[]= [];

        databases.forEach(function(row) {
            let role = <ShownRole>row;
            results.push(new ResourceModel(<ResourceModel> {
                name: role.name,
                comment: role.comment
            }));
        })

        return results;
    }

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let client = new SnowflakeClient(typeConfiguration.snowflakeAccess.account, typeConfiguration.snowflakeAccess.username, typeConfiguration.snowflakeAccess.password, this.userAgent);
        let commands: string[] = ['CREATE ROLE ' + model.name];
        if (model.comment) {
            commands.push(`COMMENT = '${model.comment}'`);
        }
        let command = commands.join(" ");
        await client.doRequest(command, []);

        return new ResourceModel(<ResourceModel> {
            name: model.name,
            comment: model.comment
        });
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let client = new SnowflakeClient(typeConfiguration.snowflakeAccess.account, typeConfiguration.snowflakeAccess.username, typeConfiguration.snowflakeAccess.password, this.userAgent);
        let command = model.comment ?
            `COMMENT ON ROLE ${model.name}  IS '${model.comment}'` :
            `ALTER ROLE ${model.name} UNSET COMMENT`;

        await client.doRequest(command, []);

        return new ResourceModel(<ResourceModel> {
            name: model.name,
            comment: model.comment
        })
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        let client = new SnowflakeClient(typeConfiguration.snowflakeAccess.account, typeConfiguration.snowflakeAccess.username, typeConfiguration.snowflakeAccess.password, this.userAgent);
        let command = `DROP ROLE ${model.name}`;

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

import {AbstractSnowflakeResource} from "../../Snowflake-Common/src/abstract-snowflake-resource"
import {SnowflakeClient} from "../../Snowflake-Common/src/snowflake-client"
import {NotFound}  from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions"
import { ResourceModel, Database, TypeConfigurationModel } from './models';

type ShowDatabase = {
    name: string,
    comment: string,
    retention_time: bigint
}

class Resource extends AbstractSnowflakeResource<ResourceModel, Database, Database, Database, TypeConfigurationModel> {

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let command = `SHOW DATABASES LIKE '${model.name}'`;
        let databases = await client.doRequest(command, []);
        if (databases.length == 0) {
            throw new NotFound("Database", model.name);
        }
        let db = databases[0];
        return new ResourceModel(<ResourceModel> {
            name: db.name,
            comment: db.comment,
            dataRetentionTimeInDays: db.retention_time
        });
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let command = 'SHOW DATABASES'

        let databases = await client.doRequest(command, []);
        let results: ResourceModel[]= [];

        await databases.forEach(function(row) {
            let db = <ShowDatabase>row;
            results.push(new ResourceModel(<ResourceModel> {
                name: db.name,
                comment: db.comment,
                dataRetentionTimeInDays: db.retention_time
            }));
        })

        return results;
    }

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let commands: string[] = ['CREATE DATABASE ' + model.name];
        if (model.dataRetentionTimeInDays) {
            commands.push('')
        }
        let command = commands.join(" ");

        await client.doRequest(command, []);

        return new ResourceModel(<ResourceModel> {
            name: model.name,
            comment: model.comment,
            dataRetentionTimeInDays: model.dataRetentionTimeInDays
        })
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let commands: string[] = [`ALTER DATABASE ${model.name} SET`];
        commands.push(`COMMENT = '${model.comment}'`);
        commands.push(`DATA_RETENTION_TIME_IN_DAYS = ${model.dataRetentionTimeInDays}`);

        let command = commands.join(" ");

        await client.doRequest(command, []);

        return new ResourceModel(<ResourceModel> {
            name: model.name,
            comment: model.comment,
            dataRetentionTimeInDays: model.dataRetentionTimeInDays
        })
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let command = 'DROP DATABASE ' + model.name;
        await client.doRequest(command, []);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: Database | undefined): ResourceModel {
        return model;
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;

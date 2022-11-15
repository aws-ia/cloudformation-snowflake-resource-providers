import {AbstractSnowflakeResource} from "../../Snowflake-Common/src/abstract-snowflake-resource"
import {Transformer, CaseTransformer} from "../../Snowflake-Common/src/util"
import {SnowflakeClient} from "../../Snowflake-Common/src/snowflake-client"
import {NotFound}  from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions"
import { ResourceModel, TypeConfigurationModel } from './models';
import {version} from '../package.json';
import { plainToClass, classToPlain } from 'class-transformer'

type SnowflakeDatabase = {
    name: string,
    comment: string,
    retention_time: bigint
}

class Resource extends AbstractSnowflakeResource<ResourceModel, SnowflakeDatabase, ResourceModel, ResourceModel, TypeConfigurationModel> {

    // UserAgent (connection 'application') is limited to 50 characters, and can only contain alpha-numeric characters, and ., -, and _
    private userAgent = `${this.typeName}/${version}`
        .replace(/[^A-Za-z0-9.\-_]/g, "-")
        .substring(0, 50);

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<SnowflakeDatabase> {
        let client = new SnowflakeClient(typeConfiguration.snowflakeAccess.account, typeConfiguration.snowflakeAccess.username, typeConfiguration.snowflakeAccess.password, this.userAgent);
        let command = `SHOW DATABASES LIKE '${model.name}'`;
        let databases = await client.doRequest(command, []);
        if (databases.length == 0) {
            throw new NotFound("Database", model.name);
        }
        let db = databases[0];
        return db;
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        let client = new SnowflakeClient(typeConfiguration.snowflakeAccess.account, typeConfiguration.snowflakeAccess.username, typeConfiguration.snowflakeAccess.password, this.userAgent);
        let command = 'SHOW DATABASES'

        let databases = await client.doRequest(command, []);
        let results: ResourceModel[]= [];

        await databases.forEach(function(row) {
            let db = <SnowflakeDatabase>row;
            results.push(new ResourceModel(<ResourceModel> {
                name: db.name,
                comment: db.comment,
                dataRetentionTimeInDays: db.retention_time
            }));
        })

        return results;
    }

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let client = new SnowflakeClient(typeConfiguration.snowflakeAccess.account, typeConfiguration.snowflakeAccess.username, typeConfiguration.snowflakeAccess.password, this.userAgent);
        let command: string = [`CREATE DATABASE ${model.name}`]
            .concat(this.getParameterCommands(model))
            .join(" ")

        await client.doRequest(command, []);

        return model
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let client = new SnowflakeClient(typeConfiguration.snowflakeAccess.account, typeConfiguration.snowflakeAccess.username, typeConfiguration.snowflakeAccess.password, this.userAgent);
        let command: string = [`ALTER DATABASE ${model.name} SET`]
            .concat(this.getParameterCommands(model))
            .join(" ");

        await client.doRequest(command, []);

        return model;
    }

    getParameterCommands(model: ResourceModel): string[] {
        let commands: string [] = []
        if (model.dataRetentionTimeInDays) {
            commands.push(`DATA_RETENTION_TIME_IN_DAYS = ${model.dataRetentionTimeInDays}`)
        }
        if (model.comment) {
            commands.push(`COMMENT = '${String(model.comment)}'`)
        }
        if (model.defaultDdlCollation) {
            commands.push(`DEFAULT_DDL_COLLATION = '${model.defaultDdlCollation}'`)
        }
        if (model.maxDataExtensionTimeInDays) {
            commands.push(`MAX_DATA_EXTENSION_TIME_IN_DAYS = ${model.maxDataExtensionTimeInDays}`)
        }
        return commands
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        let client = new SnowflakeClient(typeConfiguration.snowflakeAccess.account, typeConfiguration.snowflakeAccess.username, typeConfiguration.snowflakeAccess.password, this.userAgent);
        let command = 'DROP DATABASE ' + model.name;
        await client.doRequest(command, []);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: SnowflakeDatabase | undefined): ResourceModel {
        if (!from) {
            return model;
        }

        let result = new ResourceModel({
            ...model,
            ...Transformer.for(from)
                .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                .forModelIngestion()
                .transform(),
            comment: from.comment,
            dataRetentionTimeInDays: from.retention_time
        });

        // The following are write-only and should not be returned
        delete result.maxDataExtensionTimeInDays
        delete result.defaultDdlCollation

        let plainObj = classToPlain(result);

        return plainToClass(ResourceModel, plainObj, { excludeExtraneousValues: true });
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;

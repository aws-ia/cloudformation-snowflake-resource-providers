import {AbstractSnowflakeResource} from "../../Snowflake-Common/src/abstract-snowflake-resource"
import {SnowflakeClient} from "../../Snowflake-Common/src/snowflake-client"

import { ResourceModel, Role, TypeConfigurationModel } from './models';

type ShownRole = {
    NAME: string,
    COMMENT: string
}

class Resource extends AbstractSnowflakeResource<ResourceModel, Role, Role, Role, TypeConfigurationModel> {

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);

        let command = 'SHOW ROLES LIKE ' + model.name;
        let roles = await client.doRequest(command, []);

        let role = <ShownRole>roles[0];

        return new ResourceModel(<ResourceModel> {
            name: role.NAME,
            comment: role.COMMENT
        });
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let command = 'SHOW ROLES'

        let databases = await client.doRequest(command, []);
        let results: ResourceModel[]= [];

        databases.forEach(function(row) {
            let role = <ShownRole>row;
            results.push(new ResourceModel(<ResourceModel> {
                name: role.NAME,
                comment: role.COMMENT
            }));
        })

        return results;
    }

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let commands: string[] = ['CREATE ROLE ' + model.name];
        if (model.comment) {
            commands.push("COMMENT '" + model.comment + "'");
        }
        let command = commands.join(" ");
        await client.doRequest(command, []);

        return new ResourceModel(<ResourceModel> {
            name: model.name,
            comment: model.comment
        });
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let command = model.comment ?
            "COMMENT ON ROLE " + model.name + " IS '" + model.comment + "'" :
            "ALTER ROLE " + model.name + " UNSET COMMENT";

        await client.doRequest(command, []);

        return new ResourceModel(<ResourceModel> {
            name: model.name,
            comment: model.comment
        })
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let command = "ALTER ROLE " + model.name + " UNSET COMMENT";

        await client.doRequest(command, []);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: Role | undefined): ResourceModel {
        return model;
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;

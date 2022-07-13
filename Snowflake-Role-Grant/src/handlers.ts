import {AbstractSnowflakeResource} from "../../Snowflake-Common/src/abstract-snowflake-resource"
import {SnowflakeClient} from "../../Snowflake-Common/src/snowflake-client"

import { ResourceModel, RoleGrant, TypeConfigurationModel } from './models';

type ShownGrant = {
    ROLE: string,
    GRANTEE_NAME: string
}

class Resource extends AbstractSnowflakeResource<ResourceModel, RoleGrant, RoleGrant, RoleGrant, TypeConfigurationModel> {

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let allGrants = await this.list(model, typeConfiguration);
        return allGrants.find(rm => {
            return rm.user === model.user &&
                rm.roleName === model.roleName;
        });
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let command = 'SHOW GRANTS TO USER ' + model.user;

        let grants = await client.doRequest(command, []);
        let results: ResourceModel[]= [];

        grants
            .forEach(function(row) {
                let grant = <ShownGrant>row;
                results.push(new ResourceModel(<ResourceModel> {
                        user: model.user,
                        roleName: grant.GRANTEE_NAME
                    }
                ))})

        return results;
    }

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let command = 'GRANT ROLE ' + model.roleName +
            ' TO ' + model.user;
        await client.doRequest(command, []);

        return model;
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        // Resource is not updatable
        return model;
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let command = 'GRANT ROLE ' + model.roleName +
            ' TO ' + model.user;
        await client.doRequest(command, []);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: RoleGrant | undefined): ResourceModel {
        return model;
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;

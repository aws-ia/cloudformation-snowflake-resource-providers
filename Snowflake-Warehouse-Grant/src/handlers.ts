import {AbstractSnowflakeResource} from "../../Snowflake-Common/src/abstract-snowflake-resource"
import {SnowflakeClient} from "../../Snowflake-Common/src/snowflake-client"

import { ResourceModel, WarehouseGrant, TypeConfigurationModel } from './models';
import {NotFound} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions";

type ShownGrant = {
    granted_on: string,
    granted_to: string,
    grantee_name: string,
    privilege: string
}

class Resource extends AbstractSnowflakeResource<ResourceModel, WarehouseGrant, WarehouseGrant, WarehouseGrant, TypeConfigurationModel> {

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
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let command = 'SHOW GRANTS ON ' + model.warehouseName;

        let grants = await client.doRequest(command, []);
        let results: ResourceModel[]= [];

        grants
            .filter(row => {
                let grant = <ShownGrant>row;
                return grant.granted_on.toUpperCase() === "role";
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
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let command =
            `GRANT ${model.privilege}
             ON WAREHOUSE ${model.warehouseName}
             TO ROLE ${model.role}`;

        await client.doRequest(command, []);

        return model;
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        // Resource is not updatable
        return model;
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let command =
            `REVOKE ${model.privilege}
             ON WAREHOUSE ${model.warehouseName}
             FROM role ${model.role}`;

        await client.doRequest(command, []);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: WarehouseGrant | undefined): ResourceModel {
        return model;
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
import {AbstractSnowflakeResource} from "../../Snowflake-Common/src/abstract-snowflake-resource"
import {SnowflakeClient} from "../../Snowflake-Common/src/snowflake-client"

import { ResourceModel, User, TypeConfigurationModel } from './models';
import {NotFound} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions";

type ShownUser = {
    name: string,
    password: string,
    login_name: string,
    display_name: string,
    first_name: string,
    middle_name: string,
    last_name: string,
    email: string,
    must_change_password: boolean,
    disabled: boolean,
    days_to_expiry: bigint,
    mins_to_unlock: bigint,
    default_warehouse: string,
    default_role: string,
    mins_to_bypass_mfa: bigint,
    rsa_public_key: string,
    rss_public_key_2: string,
    comment: string
}

class Resource extends AbstractSnowflakeResource<ResourceModel, User, User, User, TypeConfigurationModel> {

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let command = `SHOW USERS LIKE '${model.name}'`;
        let users = await client.doRequest(command, []);
        if (users.length == 0) {
            throw new NotFound("Database", model.name);
        }
        let user = <ShownUser>users[0];

        return this.modelFromShownUser(user);
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let command = 'SHOW USERS';

        let users = await client.doRequest(command, []);
        let results: ResourceModel[]= [];
        let self = this;
        users.forEach(function(row) {
            results.push(self.modelFromShownUser(<ShownUser>row));
        })

        return results;
    }

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let commands: string[] = [`CREATE USER ${model.name}`];

        if (model.password) {
            commands.push(`PASSWORD = '${model.password}'`);
        }

        if (model.loginName) {
            commands.push(`LOGIN_NAME = '${model.loginName}'`)
        }

        if (model.displayName) {
            commands.push(`DISPLAY_NAME = '${model.displayName}'`)
        }

        if (model.firstName) {
            commands.push(`FIRST_NAME = '${model.firstName}'`)
        }

        if (model.middleName) {
            commands.push(`MIDDLE_NAME = '${model.middleName}'`)
        }

        if (model.lastName) {
            commands.push(`LAST_NAME = '${model.lastName}'`)
        }

        if (model.email) {
            commands.push(`EMAIL = '${model.email}'`)
        }

        if (model.mustChangePassword) {
            commands.push(`MUST_CHANGE_PASSWORD = ${model.mustChangePassword}`)
        }

        if (model.disabled) {
            commands.push(`DISABLED = ${model.disabled}`)
        }

        if (model.daysToExpiry) {
            commands.push(`DAYS_TO_EXPIRY = ${model.daysToExpiry}`)
        }

        if (model.minsToUnlock) {
            commands.push(`MINS_TO_UNLOCK = ${model.minsToUnlock}`)
        }

        if (model.defaultWarehouse) {
            commands.push(`DEFAULT_WAREHOUSE = '${model.defaultWarehouse}'`)
        }

        if (model.defaultRole) {
            commands.push(`DEFAULT_ROLE = '${model.defaultRole}'`)
        }

        if (model.minsToUnlock) {
            commands.push(`MINS_TO_BYPASS_MFA = ${model.minsToBypassMfa}`)
        }

        if (model.rsaPublicKey) {
            commands.push(`RSA_PUBLIC_KEY = '${model.rsaPublicKey}'`)
        }

        if (model.rsaPublicKey2) {
            commands.push(`RSA_PUBLIC_KEY_2 = '${model.rsaPublicKey2}'`)
        }

        if (model.comment) {
            commands.push(`COMMENT = '${model.comment}'`)
        }

        let command = commands.join(" ");

        await client.doRequest(command, []);

        return model;
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let commands: string[] = [`ALTER USER ${model.name} SET`];

        if (model.password) {
            commands.push(`PASSWORD = '${model.password}'`);
        }

        if (model.loginName) {
            commands.push(`LOGIN_NAME = '${model.loginName}'`)
        }

        if (model.displayName) {
            commands.push(`DISPLAY_NAME = '${model.displayName}'`)
        }

        if (model.firstName) {
            commands.push(`FIRST_NAME = '${model.firstName}'`)
        }

        if (model.middleName) {
            commands.push(`MIDDLE_NAME = '${model.middleName}'`)
        }

        if (model.lastName) {
            commands.push(`LAST_NAME = '${model.lastName}'`)
        }

        if (model.email) {
            commands.push(`EMAIL = '${model.email}'`)
        }

        if (model.mustChangePassword) {
            commands.push(`MUST_CHANGE_PASSWORD = ${model.mustChangePassword}`)
        }

        if (model.disabled) {
            commands.push(`DISABLED = ${model.disabled}`)
        }

        if (model.daysToExpiry) {
            commands.push(`DAYS_TO_EXPIRY = ${model.daysToExpiry}`)
        }

        if (model.minsToUnlock) {
            commands.push(`MINS_TO_UNLOCK = ${model.minsToUnlock}`)
        }

        if (model.defaultWarehouse) {
            commands.push(`DEFAULT_WAREHOUSE = '${model.defaultWarehouse}'`)
        }

        if (model.defaultRole) {
            commands.push(`DEFAULT_ROLE = '${model.defaultRole}'`)
        }

        if (model.minsToUnlock) {
            commands.push(`MINS_TO_BYPASS_MFA = ${model.minsToBypassMfa}`)
        }

        if (model.rsaPublicKey) {
            commands.push(`RSA_PUBLIC_KEY = '${model.rsaPublicKey}'`)
        }

        if (model.rsaPublicKey2) {
            commands.push(`RSA_PUBLIC_KEY_2 = '${model.rsaPublicKey2}'`)
        }

        if (model.comment) {
            commands.push(`COMMENT = '${model.comment}'`)
        }

        let command = commands.join(" ");
        console.log("Running UPDATE Command: " + command);
        await client.doRequest(command, []);

        return model;
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let command = `DROP USER ${model.name}`;
        await client.doRequest(command, []);
    }

    modelFromShownUser(shownUser: ShownUser): ResourceModel {
        return new ResourceModel(<ResourceModel> {
            name: shownUser.name,
            password: shownUser.password,
            loginName: shownUser.login_name,
            displayName: shownUser.display_name,
            firstName: shownUser.first_name,
            middleName: shownUser.middle_name,
            lastName: shownUser.last_name,
            email: shownUser.email,
            mustChangePassword: shownUser.must_change_password,
            disabled: shownUser.disabled,
            daysToExpiry: shownUser.days_to_expiry,
            minsToUnlock: shownUser.mins_to_unlock,
            rsaPublicKey: shownUser.rsa_public_key,
            rsaPublicKey2: shownUser.rss_public_key_2
        });
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: User | undefined): ResourceModel {
        return model;
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;

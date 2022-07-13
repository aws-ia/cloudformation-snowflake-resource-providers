import {AbstractSnowflakeResource} from "../../Snowflake-Common/src/abstract-snowflake-resource"
import {SnowflakeClient} from "../../Snowflake-Common/src/snowflake-client"

import { ResourceModel, User, TypeConfigurationModel } from './models';

type ShownUser = {
    NAME: string,
    PASSWORD: string,
    LOGIN_NAME: string,
    DISPLAY_NAME: string,
    FIRST_NAME: string,
    MIDDLE_NAME: string,
    LAST_NAME: string,
    EMAIL: string,
    MUST_CHANGE_PASSWORD: boolean,
    DISABLED: boolean,
    DAYS_TO_EXPIRY: bigint,
    MINS_TO_UNLOCK: bigint,
    DEFAULT_WAREHOUSE: string,
    DEFAULT_ROLE: string,
    MINS_TO_BYPASS_MFA: bigint,
    RSA_PUBLIC_KEY: string,
    RSA_PUBLIC_KEY_2: string,
    COMMENT: string
}

class Resource extends AbstractSnowflakeResource<ResourceModel, User, User, User, TypeConfigurationModel> {

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let command = `SHOW USERS LIKE '${model.name}'`;
        let users = await client.doRequest(command, []);
        let user = <ShownUser>users[0];

        return this.modelFromShownUser(user);
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let command = 'SHOW USERS';

        let users = await client.doRequest(command, []);
        let results: ResourceModel[]= [];

        users.forEach(function(row) {
            results.push(this.modelFromShownUser(<ShownUser>row));
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
        let commands: string[] = [`UPDATE USER ${model.name} SET`];

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

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        let client = new SnowflakeClient(typeConfiguration.account, typeConfiguration.username, typeConfiguration.password);
        let command = `DROP USER ${model.name}`;
        await client.doRequest(command, []);
    }

    modelFromShownUser(shownUser: ShownUser): ResourceModel {
        return new ResourceModel(<ResourceModel> {
            name: shownUser.NAME,
            password: shownUser.PASSWORD,
            loginName: shownUser.LOGIN_NAME,
            displayName: shownUser.DISPLAY_NAME,
            firstName: shownUser.FIRST_NAME,
            middleName: shownUser.MIDDLE_NAME,
            lastName: shownUser.LAST_NAME,
            email: shownUser.EMAIL,
            mustChangePassword: shownUser.MUST_CHANGE_PASSWORD,
            disabled: shownUser.DISABLED,
            daysToExpiry: shownUser.DAYS_TO_EXPIRY,
            minsToUnlock: shownUser.MINS_TO_UNLOCK,
            rsaPublicKey: shownUser.RSA_PUBLIC_KEY,
            rsaPublicKey2: shownUser.RSA_PUBLIC_KEY_2
        });
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: User | undefined): ResourceModel {
        return model;
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;

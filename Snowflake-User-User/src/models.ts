// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Snowflake::User::User';

    @Exclude()
    protected readonly IDENTIFIER_KEY_NAME: string = '/properties/Name';

    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Password' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'password', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    password?: Optional<string>;
    @Expose({ name: 'LoginName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'loginName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    loginName?: Optional<string>;
    @Expose({ name: 'DisplayName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'displayName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    displayName?: Optional<string>;
    @Expose({ name: 'FirstName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'firstName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    firstName?: Optional<string>;
    @Expose({ name: 'MiddleName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'middleName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    middleName?: Optional<string>;
    @Expose({ name: 'LastName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'lastName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    lastName?: Optional<string>;
    @Expose({ name: 'Email' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'email', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    email?: Optional<string>;
    @Expose({ name: 'MustChangePassword' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'mustChangePassword', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    mustChangePassword?: Optional<boolean>;
    @Expose({ name: 'Disabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'disabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    disabled?: Optional<boolean>;
    @Expose({ name: 'DaysToExpiry' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'daysToExpiry', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    daysToExpiry?: Optional<integer>;
    @Expose({ name: 'MinsToUnlock' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'minsToUnlock', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    minsToUnlock?: Optional<integer>;
    @Expose({ name: 'DefaultWarehouse' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'defaultWarehouse', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    defaultWarehouse?: Optional<string>;
    @Expose({ name: 'DefaultRole' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'defaultRole', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    defaultRole?: Optional<string>;
    @Expose({ name: 'MinsToBypassMfa' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'minsToBypassMfa', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    minsToBypassMfa?: Optional<integer>;
    @Expose({ name: 'RsaPublicKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'rsaPublicKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    rsaPublicKey?: Optional<string>;
    @Expose({ name: 'RsaPublicKey2' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'rsaPublicKey2', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    rsaPublicKey2?: Optional<string>;
    @Expose({ name: 'Comment' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'comment', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    comment?: Optional<string>;
    @Expose({ name: 'User' })
    @Type(() => User)
    user?: Optional<User>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.name != null) {
            identifier[this.IDENTIFIER_KEY_NAME] = this.name;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 1 ? identifier : null;
    }

    @Exclude()
    public getAdditionalIdentifiers(): Array<Dict> {
        const identifiers: Array<Dict> = new Array<Dict>();
        // only return the identifiers if any can be used
        return identifiers.length === 0 ? null : identifiers;
    }
}

export class User extends BaseModel {
    ['constructor']: typeof User;


    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Password' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'password', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    password?: Optional<string>;
    @Expose({ name: 'LoginName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'loginName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    loginName?: Optional<string>;
    @Expose({ name: 'DisplayName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'displayName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    displayName?: Optional<string>;
    @Expose({ name: 'FirstName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'firstName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    firstName?: Optional<string>;
    @Expose({ name: 'MiddleName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'middleName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    middleName?: Optional<string>;
    @Expose({ name: 'LastName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'lastName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    lastName?: Optional<string>;
    @Expose({ name: 'Email' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'email', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    email?: Optional<string>;
    @Expose({ name: 'MustChangePassword' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'mustChangePassword', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    mustChangePassword?: Optional<boolean>;
    @Expose({ name: 'Disabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'disabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    disabled?: Optional<boolean>;
    @Expose({ name: 'DaysToExpiry' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'daysToExpiry', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    daysToExpiry?: Optional<integer>;
    @Expose({ name: 'MinsToUnlock' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'minsToUnlock', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    minsToUnlock?: Optional<integer>;
    @Expose({ name: 'DefaultWarehouse' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'defaultWarehouse', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    defaultWarehouse?: Optional<string>;
    @Expose({ name: 'DefaultRole' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'defaultRole', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    defaultRole?: Optional<string>;
    @Expose({ name: 'MinsToBypassMfa' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'minsToBypassMfa', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    minsToBypassMfa?: Optional<integer>;
    @Expose({ name: 'RsaPublicKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'rsaPublicKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    rsaPublicKey?: Optional<string>;
    @Expose({ name: 'RsaPublicKey2' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'rsaPublicKey2', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    rsaPublicKey2?: Optional<string>;
    @Expose({ name: 'Comment' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'comment', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    comment?: Optional<string>;

}

export class TypeConfigurationModel extends BaseModel {
    ['constructor']: typeof TypeConfigurationModel;


    @Expose({ name: 'Account' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'account', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    account?: Optional<string>;
    @Expose({ name: 'Username' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'username', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    username?: Optional<string>;
    @Expose({ name: 'Password' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'password', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    password?: Optional<string>;

}


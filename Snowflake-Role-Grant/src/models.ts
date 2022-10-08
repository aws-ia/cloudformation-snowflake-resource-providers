// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Snowflake::Role::Grant';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ROLENAME: string = '/properties/RoleName';
    @Exclude()
    protected readonly IDENTIFIER_KEY_USER: string = '/properties/User';

    @Expose({ name: 'RoleName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'roleName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    roleName?: Optional<string>;
    @Expose({ name: 'User' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'user', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    user?: Optional<string>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.roleName != null) {
            identifier[this.IDENTIFIER_KEY_ROLENAME] = this.roleName;
        }

        if (this.user != null) {
            identifier[this.IDENTIFIER_KEY_USER] = this.user;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 2 ? identifier : null;
    }

    @Exclude()
    public getAdditionalIdentifiers(): Array<Dict> {
        const identifiers: Array<Dict> = new Array<Dict>();
        // only return the identifiers if any can be used
        return identifiers.length === 0 ? null : identifiers;
    }
}

export class TypeConfigurationModel extends BaseModel {
    ['constructor']: typeof TypeConfigurationModel;


    @Expose({ name: 'SnowflakeAccess' })
    @Type(() => SnowflakeAccess)
    snowflakeAccess?: Optional<SnowflakeAccess>;

}

export class SnowflakeAccess extends BaseModel {
    ['constructor']: typeof SnowflakeAccess;


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


// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Snowflake::Database::Grant';

    @Exclude()
    protected readonly IDENTIFIER_KEY_DATABASENAME: string = '/properties/DatabaseName';
    @Exclude()
    protected readonly IDENTIFIER_KEY_PRIVILEGE: string = '/properties/Privilege';
    @Exclude()
    protected readonly IDENTIFIER_KEY_ROLE: string = '/properties/Role';

    @Expose({ name: 'DatabaseName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'databaseName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    databaseName?: Optional<string>;
    @Expose({ name: 'Privilege' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'privilege', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    privilege?: Optional<string>;
    @Expose({ name: 'Role' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'role', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    role?: Optional<string>;
    @Expose({ name: 'DatabaseGrant' })
    @Type(() => DatabaseGrant)
    databaseGrant?: Optional<DatabaseGrant>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.databaseName != null) {
            identifier[this.IDENTIFIER_KEY_DATABASENAME] = this.databaseName;
        }

        if (this.privilege != null) {
            identifier[this.IDENTIFIER_KEY_PRIVILEGE] = this.privilege;
        }

        if (this.role != null) {
            identifier[this.IDENTIFIER_KEY_ROLE] = this.role;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 3 ? identifier : null;
    }

    @Exclude()
    public getAdditionalIdentifiers(): Array<Dict> {
        const identifiers: Array<Dict> = new Array<Dict>();
        // only return the identifiers if any can be used
        return identifiers.length === 0 ? null : identifiers;
    }
}

export class DatabaseGrant extends BaseModel {
    ['constructor']: typeof DatabaseGrant;


    @Expose({ name: 'DatabaseName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'databaseName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    databaseName?: Optional<string>;
    @Expose({ name: 'Privilege' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'privilege', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    privilege?: Optional<string>;
    @Expose({ name: 'Role' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'role', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    role?: Optional<string>;

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


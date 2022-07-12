// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Snowflake::Database::Database';

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
    @Expose({ name: 'DataRetentionTimeInDays' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'dataRetentionTimeInDays', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    dataRetentionTimeInDays?: Optional<integer>;
    @Expose({ name: 'MaxDataExtensionTimeInDays' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'maxDataExtensionTimeInDays', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    maxDataExtensionTimeInDays?: Optional<integer>;
    @Expose({ name: 'DefaultDdlCollation' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'defaultDdlCollation', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    defaultDdlCollation?: Optional<string>;
    @Expose({ name: 'Comment' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'comment', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    comment?: Optional<string>;
    @Expose({ name: 'Database' })
    @Type(() => Database)
    database?: Optional<Database>;

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

export class Database extends BaseModel {
    ['constructor']: typeof Database;


    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'DataRetentionTimeInDays' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'dataRetentionTimeInDays', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    dataRetentionTimeInDays?: Optional<integer>;
    @Expose({ name: 'MaxDataExtensionTimeInDays' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'maxDataExtensionTimeInDays', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    maxDataExtensionTimeInDays?: Optional<integer>;
    @Expose({ name: 'DefaultDdlCollation' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'defaultDdlCollation', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    defaultDdlCollation?: Optional<string>;
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


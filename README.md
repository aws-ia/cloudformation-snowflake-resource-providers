# Snowflake CloudFormation Resource Types

This collection of [AWS CloudFormation resource types][1] allow Snowflake to be controlled using [AWS CloudFormation][2].

| Resource                      | Description                                                  | Documentation                      |
|-------------------------------|--------------------------------------------------------------|------------------------------------|
| Snowflake::Database::Database | This resource type manages a [Snowflake Database][10]        | [/Snowflake-Database-Database][11] |
| Snowflake::Database::Grant    | This resource type manages a [Snowflake Database Grant][12]  | [/Snowflake-Database-Grant][13]    |
| Snowflake::Role::Grant        | This resource type manages a [Snowflake Role Grant][14]      | [/Snowflake-Role-Grant][15]        |
| Snowflake::Role::Role         | This resource type manages a [Snowflake Role][16]            | [/Snowflake-Role-Role][17]         |
| Snowflake::User::User         | This resource type manages a [Snowflake User][18]            | [/Snowflake-User-User][19]         |
| Snowflake::Warehouse::Grant   | This resource type manages a [Snowflake Warehouse Grant][20] | [/Snowflake-Warehouse-Grant][21]   |

## Prerequisites
* [AWS Account][3]
* [AWS CLI][4]
* [Snowflake account][22] 

## AWS Management Console

To get started:

1. Sign in to the [AWS Management Console][5] with your account and navigate to CloudFormation.

2. Select "Public extensions" from the left hand pane and filter Publisher by "Third Party".

3. Use the search bar to filter by the "Snowflake" prefix.

Note: All official Snowflake resources begin with `Snowflake::` and specify that they are `Published by Snowflake`.

4. Select the desired resource name to view more information about its schema, and click **Activate**.

5. On the **Extension details** page, specify:
- Extension name
- Execution role ARN
- Automatic updates for minor version releases
- Configuration

6. In your terminal, specify the configuration data for the registered Snowflake CloudFormation resource type, in the given account and region by using the **SetTypeConfiguration** operation:

For example:

  ```Bash
  $ aws cloudformation set-type-configuration \
  --region us-west-2 --type RESOURCE \
  --type-name Snowflake::Database::Database \
  --configuration-alias default \
  --configuration "{ \"SnowflakeAccess\":{\"Account\":\"YOURACCOUNT\", \"Username\":\"YOURUSERNAME\", \"Password\":\"YOURPASSWORD\"}}"
  ```

Note: All Snowflake resources requires a type configuration to be set, except `Snowflake::Database::Database`.

7. After you have your resource configured, [create your AWS stack][6] that includes any of the activated Snowflake resources.

For more information about available commands and workflows, see the official [AWS documentation][7].

## Supported regions

The Snowflake CloudFormation resources are available on the CloudFormation Public Registry in the following regions:

| Code            | Name                      |
|-----------------|---------------------------|
| us-east-1       | US East (N. Virginia)     |
| us-east-2       | US East (Ohio)            |
| us-west-1       | US West (N. California)   |
| us-west-2       | US West (Oregon)          |
| ap-south-1      | Asia Pacific (Mumbai)     |
| ap-northeast-1  | Asia Pacific (Tokyo)      |
| ap-northeast-2  | Asia Pacific (Seoul)      |
| ap-southeast-1  | Asia Pacific (Singapore)  |
| ap-southeast-2  | Asia Pacific (Sydney)     |
| ca-central-1    | Canada (Central)          |
| eu-central-1    | Europe (Frankfurt)        |
| eu-west-1       | Europe (Ireland)          |
| eu-west-2       | Europe (London)           |
| eu-west-3       | Europe (Paris)            |
| eu-north-1      | Europe (Stockholm)        |
| sa-east-1       | South America (São Paulo) |

**Note**: To privately register a resource in any other region, use the provided packages.

## Examples

### Shows how to create a Database in Snowflake
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Database in Snowflake
Resources:
  NewDatabase:
    Type: Snowflake::Database::Database
    Properties:
      Name: ExampleDatabase
      DataRetentionTimeInDays: 1
      MaxDataExtensionTimeInDays: 1
      DefaultDdlCollation: "en-ci"
      Comment: "This is a comment"
```

### Shows how to create a Database Grant in Snowflake
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Database Grant in Snowflake
Resources:
  NewDatabaseGrant:
    Type: Snowflake::Database::Grant
    Properties:
      DatabaseName: MyDatabaseName
      Privilege: USAGE
      Role: MyRoleName
```

### Shows how to create a Role Grant in Snowflake
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Role Grant in Snowflake
Resources:
  NewRoleGrant:
    Type: Snowflake::Role::Grant
    Properties:
      RoleName: MyRoleName
      User: MyUserName
```

### Shows how to create a Role in Snowflake
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Database in Snowflake
Resources:
  NewRole:
    Type: Snowflake::Role::Role
    Properties:
      Name: ExampleRole
      Comment: This is an example Role
```

### Shows how to create a User in Snowflake
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a User in Snowflake
Resources:
  NewUser:
    Type: Snowflake::User::User
    Properties:
      Name: ExampleUser
      Password: 07l2S5vWjd0N
      FirstName: Example
      LastName: User
```

### Shows how to create a Warehouse Grant in Snowflake
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Warehouse Grant in Snowflake
Resources:
  NewWarehouseGrant:
    Type: Snowflake::Warehouse::Grant
    Properties:
      WarehouseName: MyWarehouseName
      Privilege: USAGE
      Role: MyRoleName
```

[1]: https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html
[2]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html
[3]: https://aws.amazon.com/account/
[4]: https://aws.amazon.com/cli/
[5]: https://aws.amazon.com/console/
[6]: https://console.aws.amazon.com/cloudformation/home
[7]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

[10]: https://docs.snowflake.com/en/user-guide/intro-key-concepts.html#database-storage
[11]: ./Snowflake-Database-Database/
[12]: https://docs.snowflake.com/en/sql-reference/sql/grant-privilege.html
[13]: ./Snowflake-Database-Grant/
[14]: https://docs.snowflake.com/en/sql-reference/sql/grant-privilege.html
[15]: ./Snowflake-Role-Grant/
[16]: https://docs.snowflake.com/en/sql-reference/sql/show-roles.html
[17]: ./Snowflake-Role-Role/
[18]: https://docs.snowflake.com/en/user-guide/intro-key-concepts.html#database-storage
[19]: ./Snowflake-User-User/
[20]: https://docs.snowflake.com/en/sql-reference/sql/grant-privilege.html
[21]: ./Snowflake-Warehouse-Grant/

[22]: https://snowflake.com/

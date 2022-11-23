# Snowflake::Role::Grant

This resource type manages a [Snowflake Role Grant][1]

 [Documentation][2]

## Prerequisites
* [AWS Account][14]
* [AWS CLI][15]
* [Snowflake account][16]

To get started:

1. Sign in to the [AWS Management Console][11] with your account and navigate to CloudFormation.

2. Select "Public extensions" from the left hand pane and filter Publisher by "Third Party".

3. Use the search bar to filter by the "Snowflake" prefix.

  Note: All official  Snowflake resources begin with `Snowflake::` and specify that they are `Published by Snowflake`.

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
  --type-name Snowflake::Role::Grant \
  --configuration-alias default \
  --configuration "{ \"SnowflakeAccess\":{\"Account\":\"YOURACCOUNT\", \"Username\":\"YOURUSERNAME\", \"Password\":\"YOURPASSWORD\"}}"
  ```

7. After you have your resource configured, [create your AWS stack][12] that includes any of the activated Snowflake resources.

For more information about available commands and workflows, see the official [AWS documentation][13].

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

[1]: https://docs.snowflake.com/en/sql-reference/sql/grant-privilege.html
[2]: ./docs/README.md

[11]: https://aws.amazon.com/console/
[12]: https://console.aws.amazon.com/cloudformation/home
[13]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html
[14]: https://aws.amazon.com/account/
[15]: https://aws.amazon.com/cli/
[16]: https://snowflake.com/


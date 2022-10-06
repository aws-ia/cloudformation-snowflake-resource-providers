# Snowflake::Role::Grant

Allows privileges to be granted on a role to a user. https://docs.snowflake.com/en/sql-reference/sql/grant-privilege.html

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Snowflake::Role::Grant",
    "Properties" : {
        "<a href="#rolename" title="RoleName">RoleName</a>" : <i>String</i>,
        "<a href="#user" title="User">User</a>" : <i>String</i>
    }
}
</pre>

### YAML

<pre>
Type: Snowflake::Role::Grant
Properties:
    <a href="#rolename" title="RoleName">RoleName</a>: <i>String</i>
    <a href="#user" title="User">User</a>: <i>String</i>
</pre>

## Properties

#### RoleName

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### User

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)


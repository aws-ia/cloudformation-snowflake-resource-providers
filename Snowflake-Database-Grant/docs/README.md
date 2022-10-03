# Snowflake::Database::Grant

Allows privileges to be granted on a database to a role. https://docs.snowflake.com/en/sql-reference/sql/grant-privilege.html

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Snowflake::Database::Grant",
    "Properties" : {
        "<a href="#databasename" title="DatabaseName">DatabaseName</a>" : <i>String</i>,
        "<a href="#privilege" title="Privilege">Privilege</a>" : <i>String</i>,
        "<a href="#role" title="Role">Role</a>" : <i>String</i>
    }
}
</pre>

### YAML

<pre>
Type: Snowflake::Database::Grant
Properties:
    <a href="#databasename" title="DatabaseName">DatabaseName</a>: <i>String</i>
    <a href="#privilege" title="Privilege">Privilege</a>: <i>String</i>
    <a href="#role" title="Role">Role</a>: <i>String</i>
</pre>

## Properties

#### DatabaseName

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### Privilege

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### Role

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)


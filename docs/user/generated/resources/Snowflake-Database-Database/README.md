# Snowflake::Database::Database

Allows for the creation and modification of a Snowflake Database. https://docs.snowflake.com/en/user-guide/databases.html

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Snowflake::Database::Database",
    "Properties" : {
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#dataretentiontimeindays" title="DataRetentionTimeInDays">DataRetentionTimeInDays</a>" : <i>Integer</i>,
        "<a href="#maxdataextensiontimeindays" title="MaxDataExtensionTimeInDays">MaxDataExtensionTimeInDays</a>" : <i>Integer</i>,
        "<a href="#defaultddlcollation" title="DefaultDdlCollation">DefaultDdlCollation</a>" : <i>String</i>,
        "<a href="#comment" title="Comment">Comment</a>" : <i>String</i>
    }
}
</pre>

### YAML

<pre>
Type: Snowflake::Database::Database
Properties:
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#dataretentiontimeindays" title="DataRetentionTimeInDays">DataRetentionTimeInDays</a>: <i>Integer</i>
    <a href="#maxdataextensiontimeindays" title="MaxDataExtensionTimeInDays">MaxDataExtensionTimeInDays</a>: <i>Integer</i>
    <a href="#defaultddlcollation" title="DefaultDdlCollation">DefaultDdlCollation</a>: <i>String</i>
    <a href="#comment" title="Comment">Comment</a>: <i>String</i>
</pre>

## Properties

#### Name

Specifies the identifier for the database; must be unique for your account.

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### DataRetentionTimeInDays

Specifies the number of days for which Time Travel actions can be performed on the database.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MaxDataExtensionTimeInDays

The maximum number of days for which Snowflake can extend the data retention period for tables in the database.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DefaultDdlCollation

Specifies a default collation specification for all schemas and tables added to the database

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Comment

Specifies a comment for the database.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Name.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Database

Returns the <code>Database</code> value.


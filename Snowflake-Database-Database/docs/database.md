# Snowflake::Database::Database Database

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#name" title="Name">Name</a>" : <i>String</i>,
    "<a href="#dataretentiontimeindays" title="DataRetentionTimeInDays">DataRetentionTimeInDays</a>" : <i>Integer</i>,
    "<a href="#maxdataextensiontimeindays" title="MaxDataExtensionTimeInDays">MaxDataExtensionTimeInDays</a>" : <i>Integer</i>,
    "<a href="#defaultddlcollation" title="DefaultDdlCollation">DefaultDdlCollation</a>" : <i>String</i>,
    "<a href="#comment" title="Comment">Comment</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#name" title="Name">Name</a>: <i>String</i>
<a href="#dataretentiontimeindays" title="DataRetentionTimeInDays">DataRetentionTimeInDays</a>: <i>Integer</i>
<a href="#maxdataextensiontimeindays" title="MaxDataExtensionTimeInDays">MaxDataExtensionTimeInDays</a>: <i>Integer</i>
<a href="#defaultddlcollation" title="DefaultDdlCollation">DefaultDdlCollation</a>: <i>String</i>
<a href="#comment" title="Comment">Comment</a>: <i>String</i>
</pre>

## Properties

#### Name

Specifies the identifier for the database; must be unique for your account.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

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


# Snowflake::Role::Role

Allows for the creation and modification of a Snowflake Role. https://docs.snowflake.com/en/user-guide/security-access-control-overview.html#roles

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Snowflake::Role::Role",
    "Properties" : {
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#comment" title="Comment">Comment</a>" : <i>String</i>
    }
}
</pre>

### YAML

<pre>
Type: Snowflake::Role::Role
Properties:
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#comment" title="Comment">Comment</a>: <i>String</i>
</pre>

## Properties

#### Name

Specifies the identifier for the role; must be unique for your account.

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### Comment

Specifies a comment for the role.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Name.

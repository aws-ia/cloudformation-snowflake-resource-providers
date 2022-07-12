# Snowflake::Warehouse::Grant

An example resource schema demonstrating some basic constructs and validation rules.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Snowflake::Warehouse::Grant",
    "Properties" : {
        "<a href="#warehousename" title="WarehouseName">WarehouseName</a>" : <i>String</i>,
        "<a href="#privilege" title="Privilege">Privilege</a>" : <i>String</i>,
        "<a href="#role" title="Role">Role</a>" : <i>String</i>,
    }
}
</pre>

### YAML

<pre>
Type: Snowflake::Warehouse::Grant
Properties:
    <a href="#warehousename" title="WarehouseName">WarehouseName</a>: <i>String</i>
    <a href="#privilege" title="Privilege">Privilege</a>: <i>String</i>
    <a href="#role" title="Role">Role</a>: <i>String</i>
</pre>

## Properties

#### WarehouseName

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

## Return Values

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### WarehouseGrant

Returns the <code>WarehouseGrant</code> value.


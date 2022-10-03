# Snowflake::User::User

An example resource schema demonstrating some basic constructs and validation rules.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Snowflake::User::User",
    "Properties" : {
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#password" title="Password">Password</a>" : <i>String</i>,
        "<a href="#loginname" title="LoginName">LoginName</a>" : <i>String</i>,
        "<a href="#displayname" title="DisplayName">DisplayName</a>" : <i>String</i>,
        "<a href="#firstname" title="FirstName">FirstName</a>" : <i>String</i>,
        "<a href="#middlename" title="MiddleName">MiddleName</a>" : <i>String</i>,
        "<a href="#lastname" title="LastName">LastName</a>" : <i>String</i>,
        "<a href="#email" title="Email">Email</a>" : <i>String</i>,
        "<a href="#mustchangepassword" title="MustChangePassword">MustChangePassword</a>" : <i>Boolean</i>,
        "<a href="#disabled" title="Disabled">Disabled</a>" : <i>Boolean</i>,
        "<a href="#daystoexpiry" title="DaysToExpiry">DaysToExpiry</a>" : <i>Integer</i>,
        "<a href="#minstounlock" title="MinsToUnlock">MinsToUnlock</a>" : <i>Integer</i>,
        "<a href="#defaultwarehouse" title="DefaultWarehouse">DefaultWarehouse</a>" : <i>String</i>,
        "<a href="#defaultrole" title="DefaultRole">DefaultRole</a>" : <i>String</i>,
        "<a href="#minstobypassmfa" title="MinsToBypassMfa">MinsToBypassMfa</a>" : <i>Integer</i>,
        "<a href="#rsapublickey" title="RsaPublicKey">RsaPublicKey</a>" : <i>String</i>,
        "<a href="#rsapublickey2" title="RsaPublicKey2">RsaPublicKey2</a>" : <i>String</i>,
        "<a href="#comment" title="Comment">Comment</a>" : <i>String</i>
    }
}
</pre>

### YAML

<pre>
Type: Snowflake::User::User
Properties:
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#password" title="Password">Password</a>: <i>String</i>
    <a href="#loginname" title="LoginName">LoginName</a>: <i>String</i>
    <a href="#displayname" title="DisplayName">DisplayName</a>: <i>String</i>
    <a href="#firstname" title="FirstName">FirstName</a>: <i>String</i>
    <a href="#middlename" title="MiddleName">MiddleName</a>: <i>String</i>
    <a href="#lastname" title="LastName">LastName</a>: <i>String</i>
    <a href="#email" title="Email">Email</a>: <i>String</i>
    <a href="#mustchangepassword" title="MustChangePassword">MustChangePassword</a>: <i>Boolean</i>
    <a href="#disabled" title="Disabled">Disabled</a>: <i>Boolean</i>
    <a href="#daystoexpiry" title="DaysToExpiry">DaysToExpiry</a>: <i>Integer</i>
    <a href="#minstounlock" title="MinsToUnlock">MinsToUnlock</a>: <i>Integer</i>
    <a href="#defaultwarehouse" title="DefaultWarehouse">DefaultWarehouse</a>: <i>String</i>
    <a href="#defaultrole" title="DefaultRole">DefaultRole</a>: <i>String</i>
    <a href="#minstobypassmfa" title="MinsToBypassMfa">MinsToBypassMfa</a>: <i>Integer</i>
    <a href="#rsapublickey" title="RsaPublicKey">RsaPublicKey</a>: <i>String</i>
    <a href="#rsapublickey2" title="RsaPublicKey2">RsaPublicKey2</a>: <i>String</i>
    <a href="#comment" title="Comment">Comment</a>: <i>String</i>
</pre>

## Properties

#### Name

Identifier for the user; must be unique for your account.

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### Password

The password for the user

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### LoginName

Name that the user enters to log into the system. Login names for users must be unique across your entire account.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DisplayName

Name displayed for the user in the Snowflake web interface.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### FirstName

First name of the user.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MiddleName

Middle name of the user.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### LastName

Last name of the user.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Email

Email address for the user.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MustChangePassword

Specifies whether the user is forced to change their password on next login (including their first/initial login) into the system.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Disabled

Specifies whether the user is disabled.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DaysToExpiry

Specifies the number of days after which the user status is set to Expired and the user is no longer allowed to log in.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MinsToUnlock

Specifies the number of minutes until the temporary lock on the user login is cleared.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DefaultWarehouse

Specifies the namespace (database only or database and schema) that is active by default for the user's session upon login.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DefaultRole

Specifies the primary role that is active by default for the user's session upon login.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MinsToBypassMfa

Specifies the number of minutes to temporarily bypass MFA for the user.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RsaPublicKey

Specifies the user's RSA public key; used for key pair authentication.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RsaPublicKey2

Specifies the user's second RSA public key; used to rotate the public and private keys for key pair authentication based on an expiration schedule set by your organization.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Comment

Specifies a comment for the user.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Name.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### User

Returns the <code>User</code> value.


import {
    BaseModel,
    exceptions,
    ResourceHandlerRequest
}  from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {AbstractBasedResource} from "./abstract-base-resource";
import {
    BaseHandlerException,
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions"

export abstract class AbstractSnowflakeResource<ResourceModelType extends BaseModel, GetResponseData, CreateResponseData, UpdateResponseData, TypeConfigurationModel> extends AbstractBasedResource<ResourceModelType, GetResponseData, CreateResponseData, UpdateResponseData, Error, TypeConfigurationModel> {
    processRequestException(e: Error, request: ResourceHandlerRequest<ResourceModelType>) {
        if (e instanceof BaseHandlerException) {
            throw e;
        }
        throw new exceptions.InternalFailure(`Unexpected error occurred while talking to the Snowflake API => ${JSON.stringify(e)}`);
    }
}


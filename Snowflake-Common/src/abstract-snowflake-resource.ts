import {
    BaseModel,
    exceptions,
    ResourceHandlerRequest
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {AbstractBasedResource} from "./abstract-base-resource";

export abstract class AbstractSnowflakeResource<ResourceModelType extends BaseModel, GetResponseData, CreateResponseData, UpdateResponseData, TypeConfigurationModel> extends AbstractBasedResource<ResourceModelType, GetResponseData, CreateResponseData, UpdateResponseData, Error, TypeConfigurationModel> {

    processRequestException(e: Error, request: ResourceHandlerRequest<ResourceModelType>) {
        // const apiErrorResponse = e.response?.data;
        // let errorMessage = apiErrorResponse?.message;
        //
        // const status = e.status
        //     ? parseInt(e.status)
        //     : e.response
        //         ? e.response.status
        //         : null;
        // switch (status) {
        //     case 400:
        //         throw new exceptions.InvalidRequest(errorMessage);
        //     case 401:
        //         throw new exceptions.AccessDenied(`Access denied, please check your API token: ${errorMessage}`);
        //     case 404:
        //         throw new exceptions.NotFound(this.typeName, "id");
        //     case 429:
        //         throw new exceptions.ServiceLimitExceeded(errorMessage);
        //     default:
        //         throw new exceptions.InternalFailure(`  Unexpected error occurred while talking to the Okta API (HTTP status ${status}) => ${errorMessage}`);
        // }
    }
}
import {resource} from "./handlers";
import {ResourceModel, TypeConfigurationModel} from "./models";

jest.setTimeout(10000000);

describe("ApplicationHandler tests", () => {
    it("should create app", async () => {
            let typeConfig: TypeConfigurationModel = new TypeConfigurationModel({
                account: "<ACCOUNT>",
                username: "<USERNAME>",
                password: "<PASSWORD>"
            });

            let createdModel = new ResourceModel(<ResourceModel>{
                name: "MYDb"
            });

            let results = await resource.create(createdModel, typeConfig);

            console.log(results);
        }
    )

})

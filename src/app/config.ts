import { IConfig } from "./model/IConfig";

const config: IConfig = {
    endpoints: [
        {            
            name: "github",
            secret: "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",
            url: "https://api.github.com/repos/stephentwillis/{REPO}/contents/{URL}"
        }
    ]
}

export default config;
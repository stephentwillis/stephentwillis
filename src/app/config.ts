import { IConfig } from "./model/IConfig";

const config: IConfig = {
    endpoints: [
        {            
            name: "github",
            secret: "TlcqkwVycdKiwwiEm0IUZ5cRfiqNkK1IjWrA",
            url: "https://api.github.com/repos/stephentwillis/{REPO}/contents/{URL}"
        }
    ]
}

export default config;
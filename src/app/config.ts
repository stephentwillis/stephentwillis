import { IConfig } from "./model/IConfig";

const config: IConfig = {
    Endpoints: [
        {
            Name: "github",
            Secret: "TlcqkwVycdKiwwiEm0IUZ5cRfiqNkK1IjWrA",
            Url: "https://api.github.com/repos/stephentwillis/{REPO}/contents/{URL}"
        }
    ]
}

export default config;

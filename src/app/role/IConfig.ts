export interface IConfig {
    roles: Array<INameValuePair>;
}

export interface INameValuePair {
    name: string;
    value: string;
}
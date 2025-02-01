export interface ICompany {
    CombineRoles: boolean;
    Description: string;
    Logo: string;
    Name: string;
    Overview: string;
    Roles: Array<IRole>;
    Url: string;
}

export interface IRole {
    Description: string;
    From: string;
    JobTitle: string;
    To: string;
}

export interface ICareer {
    companies: Array<ICompany>;
}

export interface ICompany {
    logo: string;
    name: string;
    roles: Array<IRole>;
    url: string;
}

export interface IRole {
    description: string;
    from: string;
    jobTitle: string;    
    to: string;
}
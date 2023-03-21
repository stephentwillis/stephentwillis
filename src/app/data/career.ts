import { ICompany, IRole } from '../model/ICareer';

const Career: Array<ICompany> = [
    {
        logo: "https://cdn.rsc.org.uk/sitefinity/images/rsc/rsc_logo.tmb-logo-98x75.png",
        name: "Royal Shakespeare Company",
        roles: [
            {
                description: "<article class=\"col\"><i>Technical Responsibilites</i><ul><li>Ongoing technical delivery of an e-commerce website producing over £30m of revenue per annum.</li><li>Engineered a React web app using Tessitura REST API, and MSSQL SSIS integration to facilitate regular financial reconciliation.</li><li>Engineered a Health & Safety incident reporting system that utilised Microsoft Forms, PowerAutomate Flows (serverless), a bespoke API (Azure AppServices), an Azure SQL database and a React/TypeScript SharePoint webpart.</li><li>Engineered SSRS reports using Tessitura, MSSQL and Visual Studio to meet stakeholder requirements.</li><li>Began development of a business logic layer for RSC SOAP to REST API conversion utilising Tessitura REST SDK, SOLID principles, Builder and Adaptor design patterns. (This work is currently in progress).</li><li>Improved Application Delivery department methodologies by implementing a DevOps model, utilising Continuous Integration/Deployment (CI/CD) and Test-Driven Development (TDD).</li><li>Reduced operational expenditure through effective management of cloud services, saving approx. £9000pa</li></ul></article><article class=\"col\"><i>Leadership and Management Responsibilities</i><ul><li>Managed a £200,000 capital project, including procurement phases, to replace core infrastructure, including virtualisation hosts, storage (HPE StorMagic SAN), HPE Aruba switches, APC Power Supplies.</li><li>Managing, mentoring, and recruiting a talented team of developers, to deliver sustainable applications built on software best practices that meet the RSC's diverse and complex requirements.</li><li>Significant experience leading a team in a distributed office environment due to the Covid pandemic. A hybrid model has adopted following this.</li><li>Key point of contact for all applications and internal stakeholder management.</li><li>Guided key architectural decisions to ensure appropriate technical direction maximizing cost-efficiency.</li><li>Planned and managed IT budgets with the Head of IT Services.</li><li>Developed IT policies and processes which have improved organisational effectiveness and efficiency.</li><li>Influenced stakeholders at all levels on technical direction to align with organisational strategies.</li><li>Planned and managed team capacity to ensure sustainable project delivery schedules.</li><li>Supported the Director of Estates and IT in undertaking an application assessment across the RSC.</li><li>Built a nurturing, supportive environment and team culture allowing all developers to thrive.</li><li>Member of RSC Organisational Steering Group and <a href=\"https://cioarts.org/\" target=\"_blank\">CIOArts</a><i class=\"fa-solid fa-arrow-up-right-from-square\"></i>.</li></ul></article>",
                from: "Aug 2017",
                jobTitle: "Head of Application Delivery",
                to: "Present"
            },
            {
                description: "<article class=\"col\"><ul><li>Engineered a 'What's On / Buy Tickets' solution, utilising Tessitura CRM API, that increased single-day revenue record from £250,000 to £865,000.</li><li>Designed a cloud application architecture that secured £560,000 of capital funding.</li><li>Engineered an innovative 'Select Your Own Seat' (SYOS) application using Tessitura CRM API and Scalable Vector Graphics. Engineered administration application to allow easier generation of SYOS facilities.</li><li>Led development of all software projects using C# and Object-Oriented Programming (OOP) and Service-Oriented Programming (SOP) across the software development lifecycle.</li><li>Led development of solutions integrating with business-critical applications, such as Tessitura CRM, HR/Payroll, and Finance systems, using C# and MSSQL (SSIS)</li><li>Developed and managed the RSC's main website, microsites, and the RSC's staff intranet.</li><li>Analysed and resolved application defects.</li><li>Planned projects in consultation with designers and stakeholders.</li><li>Ensured the PCI compliance of all web environments and applications.</li><li>Mentored junior developers</li></ul></article>",
                from: "Oct 2012",
                jobTitle: "Lead Software Developer",
                to: "Aug 2017"
            },
            {
                description: "<article class=\"col\"><ul><li>Developed and managed the RSC's main website, microsites, and the RSC's staff intranet.</li><li>Managed websites including server/system and user administration.</li><li>Analysed and resolved application defects.</li><li>Planned projects in consultation with designers and stakeholders.</li><li>AWARD: British Computer Society (BCS) IT Department of the Year (2011)</li></ul></article>",
                from: "Sep 2011",
                jobTitle: "CMS / Web Developer",
                to: "Oct 2012"
            }
        ],
        url: "https://www.rsc.org.uk"
    },
    {
        logo: "",
        name: "Freelance",
        roles: [
            {
                description: "<article class=\"col\">Provided consultancy and support across a broad spectrum of media. Including website design and development (www.ferndaledental.co.uk), management and administration. Live sound engineering, live production lighting, live video recording, studio recording and production.</article>",
                from: "Jun 2005",
                jobTitle: "Multimedia Consultant",
                to: "Apr 2019"
            }
        ],
        url: ""
    },
    {
        logo: "https://media.licdn.com/dms/image/D4E0BAQF7beDo0dwKqg/company-logo_100_100/0/1663664301272?e=1686787200&v=beta&t=iGUKekhNXaxXAi-xdyJZ6Ntt3c6Nx3rRcJRKmfgIVXY",
        name: "Derbyshire County Council",
        roles: [
            {
                description: "<article class=\"col\">Facilitation, co-ordination and development of multimedia and e-learning resources throughout the school. Design and development, updating and maintaining the school's website and web-presence as the school's Webmaster. Providing technical support, guidance and training, throughout the school.</article>",
                from: "Sep 2006",
                jobTitle: "Multimedia Coordinator",
                to: "Sep 2011"
            }
        ],
        url: "https://www.derbyshire.gov.uk"
    }   
]

export default Career;
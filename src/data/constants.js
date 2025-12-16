export const metaTags = [
    { name: 'description', content: 'Senior Full-Stack Developer with 4+ years experience in Django, React, AWS. Expert in cloud architecture, microservices, and scalable web applications.' },
    { name: 'keywords', content: 'Full-Stack Developer, Django, React, AWS, Cloud Architect, Python, JavaScript, PostgreSQL, Docker, CI/CD' },
    { name: 'author', content: 'Sumit Panda' },
    { property: 'og:title', content: 'Sumit Panda - Senior Full-Stack Developer & Cloud Architect' },
    { property: 'og:description', content: 'Experienced developer specializing in Django, React, and AWS cloud solutions. Building scalable applications for global clients.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Sumit Panda - Full-Stack Developer' },
    { name: 'twitter:description', content: 'Senior developer with expertise in Django, React, AWS, and cloud architecture.' }
];

export const skillCategories = [
    {
        icon: "",
        title: "Frontend & UI/UX",
        skills: ["React.js", "HTML5", "CSS3", "JavaScript ES6+", "Bootstrap", "Responsive Design"]
    },
    {
        icon: "",
        title: "Backend & APIs",
        skills: ["Django", "Django REST Framework", "FastAPI", "Flask", "GoLang", "Celery"]
    },
    {
        icon: "",
        title: "Cloud & DevOps",
        skills: ["AWS (20+ Services)", "Docker", "Terraform", "Ansible", "Jenkins", "CI/CD"]
    },
    {
        icon: "",
        title: "Databases & Caching",
        skills: ["PostgreSQL", "Redis", "ElastiCache", "RDS", "Database Optimization"]
    },
    {
        icon: "",
        title: "Testing & Quality",
        skills: ["Postman", "BrowserStack", "Selenium", "Unit Testing", "Automation Testing"]
    },
    {
        icon: "",
        title: "Development Tools",
        skills: ["GitHub", "GitLab", "BitBucket", "AWS CodeCommit", "VS Code", "Docker"]
    }
];


export const experiences = [

    {
        company: "Homegenius Exteriors",
        role: "International softwere Contractor",
        type: "Remote Contract",
        duration: "May 1 – Present",
        description: "Architected and maintained high-performance Django applications with global team collaboration.",
        technologies: ["Django", "DRF", "Redis", "PostgreSQL", "FastAPI", "Docker", "Zope"],
        achievements: [
            "Architected high-performance Django applications",
            "Implemented comprehensive testing strategies",
            "Optimized application performance",
            "Collaborated across multiple time zones"
        ]
    },
    {
        company: "Assiduous Inc – Arbor Green",
        role: "Lead Full-Stack Developer",
        type: "Remote",
        duration: "Nov 2022 – Apr 30, 2025",
        description: "Led end-to-end development of multiple web and mobile applications with microservices architecture.",
        technologies: ["Python", "Django", "Fast API", "ML", "Lang-chain", "Chroma-DB", "APACHE SOLR", "Elastic Search", "React", ".NET", "AWS", "Docker", "Microservices", "Serverless", "CI/CD", "AWS", "3js"],
        achievements: [
            "Dynamic 3D high-voltage substation design tool, with built-in crm.",
            "Created Intermediate application between Shopify and 3rd party logistics.",
            "Product configurator application.",
            "Product catalog RAG application.",
            "CI/CD implementation for python and .net applications.",
            "Provide AWS training to the team.",
            "CODE review.",
            "Converting Monolithic applications into hybrid applications."
        ]
    },
    {
        company: "MicroPyramid Informatics",
        role: "Full-Stack Developer",
        type: "Remote",
        duration: "Sept 2021 - Oct 2022",
        description: "Led end-to-end development of multiple web and mobile applications with microservices architecture.",
        technologies: ["Python", "React", "AWS", "Docker", "Microservices", "Redis", 'Celery', "DRF"],
        achievements: [
            "Implemented Background processing",
            "worked in a team and completed several projects.",
            "Learned about project management.",
            "Implemented Microservices."
        ]
    },
    {
        company: "IGMI",
        role: "Junior developer",
        type: "Remote",
        duration: "Jan 2021 - Sept 2021",
        description: "Continuously expanded my knowledge of Django and related technologies, actively participating in code reviews, and seeking mentorship to improve coding practices and project management skills. Played a key role in facilitating communication between developers and other stakeholders, ensuring that project goals were clearly understood and met.",
        technologies: ["Python", "Django", "Jinja", "S3", "ses"],
        achievements: [
            "Completed my first project using wordpress.",
            "Completed my first Django project, a prisoner dating site.",
            "Integrated payment gateway like -> stripe.",
            "Integrated AWS service s3 and ses.",
            "Deployed in Aws."
        ]
    },

];

export const projects = [
    {
        id: 1,
        title: "Zope to Django Migration",
        description: "Migrated legacy Zope-based application to Django without disrupting production, focusing on the Jobs module.",
        technologies: ["AWS S3", "Django", "DRF", "Docker", "PostgreSQL"],
        highlights: ["Zero downtime migration", "Redis URL shortening", "100% test coverage"],
        is_details_present: true,
        overview: [
            {
                image: ["/assets/Project_images/zope_to_django/img2.png"],
                text: "Migration Dashboard",
                keywords: "Zope, Django, Migration"
            }
        ],
        yt_url: ["https://www.youtube.com/embed/your-video-id"],
    },
    {
        id: 2,
        title: "Product Configurator",
        description: "Upgraded 11-year-old project supporting 9 countries with multilingual product customization.",
        technologies: ["AWS Cognito", "S3", "Bedrock", "React.js", ".NET"],
        highlights: ["9 countries support", "AI image tagging", "Multilingual interface"],
        is_details_present: true,
        overview: [
            {
                image: ["/assets/Project_images/ProductConfigurator/DashBoard.png"],
                text: `This project involved modernizing a legacy product configuration system originally built on .NET over a decade ago. We rebuilt the platform using Django and React to improve scalability, 
                maintainability, and performance. It serves as a centralized product catalog for managing product data across multiple client applications. Key features include support for multi-country and 
                multi-language configurations, dynamic form rendering via Product Templates and Product Updates, and advanced smart search functionality. The system enables full product lifecycle management and 
                localization. This project enhanced my skills in system migration, API development, and building scalable, region-specific product platforms.`,
                keywords: [
                    "Total Categories",
                    "Total Products",
                    "Published Products",
                    "Supported Languages",
                    "Hotel Listings",
                    "Product Portals",
                    "Product Updates",
                    "API Requests",
                    "Search Trends",
                    "Market Overview",
                    "Top Performing Products"
                ],
            },
            {
                image: ["/assets/Project_images/ProductConfigurator/ProductSearch.png"],
                text: ` The platform offers a product search feature with a dynamic filter panel on the right-hand side. Users can select multiple categories and subcategories, and the results update automatically 
                based on the selections. The system uses a dynamic category API that responds in real time, ensuring that all selected filters immediately reflect in the displayed product results.`,
                keywords: [
                    "Product Search",
                    "Category Wise Search",
                    "Sub Wise Category",
                    "Multiple Filters",
                    "Tag Wise Search"
                ]
                ,
            },
            {
                image: ["/assets/Project_images/ProductConfigurator/product-create.png"],
                text: `The "Create New Product" page offers a comprehensive set of features designed to streamline product configuration. Key functionalities include support for a Global Product Number, multiple alternative product images, 
                and dynamic image loading based on the selected product template — which is displayed prominently at the top of the page. Additionally, the system supports media management through a dedicated media management interface, 
                allowing you to upload PDF files and other assets. Products can be associated with specific categories, lifestyle groups, related products, and personalized recommendations — similar to the recommendation engine seen on 
                platforms like Flipkart.`,
                keywords: [
                    "Product Add",
                    "Connect With Category",
                    "Connect Related Product",
                    "Recommended Product",
                    "Multimedia Management"
                ]
                ,
            },
            {
                image: ["/assets/Project_images/ProductConfigurator/diagram.png"],
                text: `The system is API-based on the backend and supports integration with multiple cost platform applications. It also supports Single Sign-On (SSO), allowing the same authentication backend to be used seamlessly 
                across product configuration, admin portals, and consumer-facing applications.`,
                keywords: [
                    "Cross Platform Integration",
                    "API Based Backend",
                    "SSO - authentication using aws-cognito"
                ]
                ,
            }
        ],
    },
    {
        id: 3,
        title: "One-Request",
        description: "Upgraded 11-year-old project supporting 9 countries with multilingual product customization.",
        technologies: ["AWS Cognito", "S3", "Bedrock", "React.js", ".NET"],
        highlights: ["9 countries support", "AI image tagging", "Multilingual interface"],
        is_details_present: true,
        overview: [
            {
                image: ["/assets/Project_images/OneRequest/Dashboard.png", "/assets/Project_images/OneRequest/Diaram.jpeg"],
                text: `This project involved building a centralized, API-driven administrative platform to manage and monitor multiple organizations from a unified interface. The application is designed with multi-tenant architecture, enabling granular control across organization-specific workflows, user hierarchies, and tax-related processes. 
                        Key capabilities include request lifecycle tracking, approval chains, spending analytics, and calendar integration to monitor compliance deadlines such as tax submissions or critical dates. It supports both custom and pre-built templates with flexible workflow configuration tailored to each organization’s structure and policies. 
                        The platform integrates with a product catalog where products can go through multiple approval stages before publishing. Features like Single Sign-On (SSO) ensure seamless authentication across modules including product configuration, admin panels, and consumer interfaces.

                        Additional modules include internal mailing, AI-powered chatbot assistance for document queries and content generation, real-time notifications via Firebase, leave and employee management, meeting scheduling, and bulk messaging support.

                        Technologies used include Django (backend), React (frontend), REST APIs, Firebase, and AI integration, providing a scalable and secure infrastructure for large-scale enterprise use.`,

                keywords: [
                    "Multi-Organization Management",
                    "Approval Workflow",
                    "Product Catalog Integration",
                    "SSO Authentication",
                    "Tax Calendar",
                    "Custom Templates",
                    "Internal Mailing System",
                    "AI Chatbot Support",
                    "Firebase Notifications",
                    "Leave Management",
                    "Employee Directory",
                    "Meeting Scheduling"
                ]
            }


        ],
        yt_url: ["https://www.youtube.com/embed/B6IVlB7rudk"]
    },
    {
        id: 4,
        title: "TOP-ERP",
        description: "A high-performance ERP system built for Top Security Industries Pvt. Ltd., managing guard deployment, attendance, and operations across India. It integrates with mobile apps for real-time tracking, shift management, and admin control.",
        technologies: ["DRF", "Django Channels", "AWS Lambda", "ChatGPT"],
        highlights: ["Real-time transcription", "WebSocket integration", "Auto summarization"],
        is_details_present: true,
        overview: [
            {
                image: ["/assets/Project_images/TopErp/DashBoard.png"],
                text: `This ERP system was developed for "Top Security Industries Private Limited," a pan-India security service provider specializing in manpower deployment across industrial facilities. The ERP serves as the core operational backbone, managing the entire lifecycle of guard assignment, attendance tracking, location monitoring, and duty scheduling across more than 400 factory sites nationwide.

                    Designed for scalability and high performance, the platform handles over 400+ requests per minute and integrates with multiple mobile applications available on the Play Store. These include GPS-based location tracking, real-time attendance capture, night shift monitoring, and field helper coordination tools.

                    The ERP also features robust office administration tools and supports seamless communication between headquarters and regional offices. Built with a focus on operational efficiency and data accuracy, the system enables real-time visibility and centralized control over a distributed workforce.`,

                keywords: [
                    "ERP for Security Services",
                    "Pan-India Operations",
                    "Real-Time Attendance",
                    "GPS Location Tracking",
                    "Night Duty Monitoring",
                    "High Request Handling",
                    "400+ Requests/Minute",
                    "Field Helper Management",
                    "Mobile App Integration",
                    "Play Store Applications",
                    "Shift Scheduling",
                    "Office & Admin Control"
                ]
            },
            {
                image: ["/assets/Project_images/TopErp/company_list.png"],
                text: `The Company Management module allows administrators to manage client organizations efficiently by adding, editing, and configuring client-specific data such as vacancies, salary by designation, and attendance QR codes. It also includes a robust document management system and the ability to assign organization-specific admin credentials, enabling clients to securely access transactions, communications, and operational details related to their account.`,

                keywords: [
                    "Client Management",
                    "Vacancy Configuration",
                    "Designation-based Salary",
                    "Attendance QR Code",
                    "Document Management",
                    "Organization Admin Access",
                    "Client Portal",
                    "Real-Time Communication",
                    "Transaction Tracking",
                    "Credential Management"
                ]
            },
            {
                image: ["/assets/Project_images/TopErp/Employeemanagement.png"],
                text: `The Employee Management module enables comprehensive control over employee data, including adding, updating, viewing, editing, deleting, and blocking employees. A key feature is employee movement tracking, allowing assignment of duties across multiple job sites within a month. It also includes customizable ID card generation with PVC print support, document management, and a Dress Management system for tracking uniforms and equipment issued over time. Additionally, administrators can generate official documents such as joining letters directly from the application.`,

                keywords: [
                    "Employee Management",
                    "Employee Movement",
                    "Job Site Assignment",
                    "ID Card Printing",
                    "Custom ID Templates",
                    "Document Management",
                    "Dress & Equipment Tracking",
                    "Joining Letter Generation",
                    "Employee Blocking",
                    "Employee Deletion",
                    "Multi-site Duty Assignment"
                ]
            },
            {
                image: ["/assets/Project_images/TopErp/payroll.png"],
                text: `This is a dynamic and location-based Payroll Management System designed to handle complex salary structures for employees and security guards working across multiple job sites. Salaries are calculated on an hourly basis, varying per job site, and are derived from attendance data collected via a dedicated attendance application. The system factors in advance salary payments, uniform (dress) charges, mess deductions, and statutory deductions such as PF. It also allows salary disbursement from multiple employer bank accounts, with configurable account selection. Additionally, a 'Hold' feature enables salary to be calculated but withheld from final export, allowing employers to pause disbursement when required.`,

                keywords: [
                    "Payroll Management",
                    "Hourly Salary Calculation",
                    "Multi-Location Attendance",
                    "Advance Salary Adjustment",
                    "Dress & Mess Deduction",
                    "PF Deduction",
                    "Multiple Bank Account Support",
                    "Attendance Integration",
                    "Salary Hold Feature",
                    "Bank Export Management",
                    "Job Site-Based Salary"
                ]
            },
            {
                image: ["/assets/Project_images/TopErp/Reports.png"],
                text: `The Report Management module enables the generation and export of multiple critical reports for payroll, audit, compliance, and inventory tracking. Key reports include the Bank Salary Report, which exports employee salary data in CSV or Excel format compatible with bank portals for bulk transfers. The Detailed Salary Report provides internal, audit-level visibility into all salary components for administrative use. Additional reports include the PF Report and ESIC Report, both aligned with Indian government regulations, for submission to the respective statutory portals.

                    The system also includes a Dress Report for monthly inventory tracking of uniforms and equipment issued to employees, helping monitor multiple set allocations. Lastly, the Joining Report provides insights into workforce onboarding trends, including joinings, dropouts, and candidate history over time.`,

                keywords: [
                    "Bank Salary Report",
                    "Detailed Salary Report",
                    "PF Report",
                    "ESIC Report",
                    "Dress Report",
                    "Joining Report",
                    "Audit Reporting",
                    "Statutory Compliance",
                    "Inventory Tracking",
                    "CSV/Excel Export",
                    "Payroll Reporting",
                    "HR Analytics"
                ]
            },
            {
                image: ["/assets/Project_images/TopErp/proposal.png"],
                text: `The Proposal Management module enables users to create and manage customized business proposals for potential clients. It offers pre-designed templates that can be reused, edited, or duplicated for faster proposal generation. Users can customize proposal content and layout, and send proposals directly via email from the platform using predefined email templates. This streamlines the client outreach process and ensures professional, consistent communication with prospects.`,

                keywords: [
                    "Proposal Generation",
                    "Template-Based Design",
                    "Editable Proposal Templates",
                    "Duplicate & Reuse Proposals",
                    "Email Integration",
                    "Client Outreach",
                    "Custom Email Templates",
                    "Sales Automation",
                    "Lead Management",
                    "Business Communication"
                ]

            },
            {
                image: ["/assets/Project_images/TopErp/CMS.png"],
                text: `The Content Management System (CMS) allows administrators to dynamically manage website content across key sections such as the homepage, About Us, gallery, client logos, and blogs—optimized for SEO performance. It includes dedicated modules for job postings with location-based filtering and application tracking via the admin panel. 

                    Additional capabilities include managing service listings, privacy policy (linked to Google Play Store compliance for mobile apps), company vision, values, and internal blog articles that showcase organizational updates. All content is editable and designed to sync seamlessly with the frontend for real-time updates.`,

                keywords: [
                    "Dynamic Website Content",
                    "Homepage Management",
                    "About Us Section",
                    "SEO Blog Integration",
                    "Job Posting Management",
                    "Job Applications Panel",
                    "Client Logo Management",
                    "Gallery Content",
                    "Privacy Policy Integration",
                    "Play Store Compliance",
                    "Company Vision & Values",
                    "Service Listing Control"
                ]
            },
            {
                image: ["/assets/Project_images/TopErp/sysdiagram.png"],
                text: `The platform is powered by a robust backend architecture built primarily using Django and FastAPI. The core application is hosted on AWS EC2, with seamless integrations to various AWS services to ensure scalability and performance. AWS SQS is used for event-based job queuing, S3 handles file storage and media uploads, and SES is utilized for email communications.

                        -intensive operations like attendance processing are offloaded to AWS Lambda for asynchronous execution. Attendance and workflow applications push events to SQS, which are then processed by Lambda functions and persisted into Amazon RDS. This distributed architecture ensures optimal load balancing and high availability across the system.`,

                keywords: [
                    "Django",
                    "FastAPI",
                    "AWS EC2",
                    "AWS SQS",
                    "AWS Lambda",
                    "Amazon RDS",
                    "AWS S3",
                    "AWS SES",
                    "Event-Driven Architecture",
                    "Microservices",
                    "Scalable Backend",
                    "Distributed System"
                ]
            },


        ]
    },

    {
        id: 5,
        title: "ML Product Recommendation",
        description: "AI-powered recommendation system for hospitals with 82% accuracy.",
        technologies: ["Pandas", "NumPy", "scikit-learn", "FastAPI", "AWS Lambda"],
        highlights: ["82% accuracy", "Serverless deployment", "Protected API"]
    },
    {
        id: 6,
        title: "Lucky Money - A Fantasy Game Platform",
        description: "A web application that enables users to play/bet several game slots with virtual currency.",
        technologies: ["Django", "JavaScript", "HTML5", "CSS3", "POSTGRES"],
        highlights: [
            "Instant Wallet Transaction",
            "Transaction Logs for audit.",
            "Instant winning amount credit.",
            "Granular admin reporting.",
            "End TO End Customization."
        ],
        yt_url: ["https://www.youtube.com/embed/2ajcaUK1H-U"],
        is_details_present: true,
    },
    {
        id: 7,
        title: "Summary-AI",
        description: "Real-time meeting transcription and summarization system with WebSocket integration.",
        technologies: ["DRF", "Django Channels", "AWS Lambda", "ChatGPT"],
        highlights: ["Real-time transcription", "WebSocket integration", "Auto summarization"]
    },
];
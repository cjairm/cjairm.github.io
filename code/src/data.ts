export const Experience = [
    {
        src: "./images/startup.gif",
        alt: "startup Experience",
        head: ["Startup​, San Francisco​", "Co-Founder", "Testing"],
        content: [
            "Developed mobile app with React Native​ (and Redux) and Expo​.",
            "API developed with Laravel​.",
            "https://bit.ly/cjairm-startup-2019",
        ],
    },
    {
        src: "./images/revsteer.gif",
        alt: "RevSteer Experience",
        head: [
            "RevSteer.com​ (Founded by ​BeMusical.us​), San Francisco",
            "Senior Full-Stack Engineer and Team Leader",
            "April 2019 - June 2020",
        ],
        content: [
            "I led the software development team to create a new web app using the same architecture, frameworks and languages used at BeMusical.",
        ],
        onClick: () => {
            window.location.href = "https://revsteer.com/";
        },
        btnText: "Go to site",
    },
    {
        src: "./images/bemusical.gif",
        alt: "BeMusical Experience",
        head: [
            "BeMusical.us​,​ San Francisco",
            "Senior Full-Stack Engineer",
            "August 2017 - June 2020",
        ],
        content: [
            "Developed backend with current traffic of 1,600 users/month, PHP (Laravel), Redis​.",
            "Developed frontend with Adobe XD, JS (React, Redux), CSS (Bootstrap / Material UI)​.",
            "Git​ manager working collaboratively with 10 team members.",
            "Designed and builded automated systems to manage our scalable infrastructure on AWS​, Digital Ocean​, MySQL​.",
            "Developed the payments platform integrating Stripe​ API.",
            "Started to migrate platforms from Laravel to Django​ and MySQL to PostgreSQL​.",
        ],
        onClick: () => {
            window.location.href = "https://bemusical.us/";
        },
        btnText: "Go to site",
    },
    {
        src: "./images/domovolcanico.png",
        alt: "DomoVolcanico Experience",
        head: [
            "DomoVolcanico.com",
            "UI/UX Engineer",
            "January 2017 - September 2017",
        ],
        content: [
            "I set up and updated a testing server (​AWS, Digital Ocean, MariaDB​).",
            "I configured git in order to have repos and work collaboratively.",
            "Deploy the latest software development tools to aid development within the rest of the organization",
            "We provided maintenance to around 15 websites using Laravel, Bootstrap, JQuery​, with over 10,000 users/month.",
        ],
        onClick: () => {
            window.location.href = "http://domovolcanico.com/";
        },
        btnText: "Go to site",
    },
    {
        src: "./images/hadaelectronics.gif",
        alt: "HadaElectronics Experience",
        head: [
            "HadaElectronics.com",
            "Hardware Designer(Co-Founder)",
            "January 2016 - December 2019",
        ],
        content: [
            "Developed firmware for over 10 projects in automation Arduino​, PIC​.",
            "Created a website that is currently under maintenance (​Laravel and React TS​).",
            "We read 50+ engineering books to create 12 didactic videos for over 30k views, including topics: Basics electronics components, Digital electronics and logic design, VHDL​ IDE installation in Linux",
        ],
        onClick: () => {
            window.location.href = "https://hadaelectronics.com/";
        },
        btnText: "Go to site",
    },
];

export const Projects = [
    {
        src: "./images/portfolio.png",
        alt: "Portfolio Project",
        title: "Personal Portfolio​",
        content: "Project developed with React, Material UI and TypeScript​.",
        onClick: () => {
            window.location.href =
                "https://github.com/cjairm/cjairm.github.io/blob/master/code";
        },
        btnText: "Source Code",
    },
    {
        src: "./images/golangAlgoritms.png",
        alt: "Golang Algorithms Project",
        title: "Golang Algorithms​",
        content: "Just as a practice, I have been coding different algorithms.",
        onClick: () => {
            window.location.href =
                "https://github.com/cjairm/go/tree/master/Algorithms-Go";
        },
        btnText: "Source Code",
    },
    {
        src: "./images/iotProject.png",
        alt: "IoT Project",
        title: "IoT-Prototype",
        content:
            "HTTP communication protocol (API REST), LoRa technology and ATmega328 microchip. It won a price.",
        onClick: () => {
            window.location.href =
                "https://drive.google.com/file/d/1GzFDHXi6O5YXam0atFlYf-rgQgTXk4yg/view?usp=sharing";
        },
        btnText: "Go to thesis",
    },
    {
        src: "./images/fpgaProject.png",
        alt: "FPGA Project",
        title: "FPGA Project",
        content:
            "FPGA Spartan 6 chip (Xilinx), ISE IDE (Xilinx), and training board.",
        onClick: () => {
            window.location.href =
                "https://drive.google.com/file/d/1J6Lt8POaS26J_GRc2AlSdFf57-HILpG_/view";
        },
        btnText: "Go to thesis",
    },
    {
        src: "./images/clockProject.png",
        alt: "Clock Project",
        title: "Clock Project",
        content: "Just a real time clock. Developed with vanilla JavaScript.",
        onClick: () => {
            window.location.href =
                "https://github.com/cjairm/javascript/tree/master/Projects/Clock";
        },
        btnText: "Source Code",
    },
    {
        src: "./images/robotProject.png",
        alt: "Robot Simulator Project",
        title: "Robot Simulator Project",
        content: "Project developed with React, Material UI, and JavaScript.",
        onClick: () => {
            window.location.href =
                "https://github.com/cjairm/javascript/tree/master/Projects/testing-robot";
        },
        btnText: "Source Code",
    },
    {
        src: "./images/flickrBootstrapProject.png",
        alt: "Flickr Project",
        title: "Flickr Project",
        content: "Project developed with Vanilla JavaScript and Bootstrap.",
        onClick: () => {
            window.location.href =
                "https://github.com/cjairm/javascript/tree/master/Projects/vanilla-app-flickr";
        },
        btnText: "Source Code",
    },
    {
        src: "./images/flickrMaterialProject.png",
        alt: "Flickr Project",
        title: "Flickr Project 2",
        content: "Project developed with React, Material UI, and JavaScript.",
        onClick: () => {
            window.location.href =
                "https://github.com/cjairm/javascript/tree/master/Projects/react-app-flickr";
        },
        btnText: "Source Code",
    },
    {
        src: "./images/continentalProject.jpeg",
        alt: "Continental Hackathon",
        title: "Continental Hackathon",
        content: "I participated and won the first place in an IoT Hackathon.",
    },
];

export const Education = [
    {
        src: "./images/uagEducation.jpg",
        alt: "UAG Education",
        head: [
            "Universidad Autónoma de Guadalajara​​",
            "Master’s degree",
            null,
        ],
        content: [
            "Guadalajara, Jalisco, Mex.",
            "January 2018 - 2019.",
            "Information Technology and Communications Engineering. Specialty in Big Data. GPA (3.8 / 4.0)",
        ],
        onClick: () => {
            window.location.href = "http://www.uag.mx/";
        },
        btnText: "Go to site",
    },
    {
        src: "./images/itsaEducation.jpg",
        alt: "ITSA Education",
        head: [
            "Instituto Tecnológico Superior de Atlixco​​",
            "Bachelor’s degree",
            null,
        ],
        content: [
            "Atlixco, Puebla, Mex.",
            "August 2009 - August 2014.",
            "Mechatronics Engineer. Specialty in Control. GPA (3.4 / 4.0)",
        ],
        onClick: () => {
            window.location.href = "https://www.itsatlixco.edu.mx/";
        },
        btnText: "Go to site",
    },
];

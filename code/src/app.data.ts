import portfolioGolangAlgoritms from "./assets/portfolio/golang-algoritms.png";
import portfolioPokemonProject from "./assets/portfolio/pokemon-project.png";
import portfolioPetLoversProject from "./assets/portfolio/pet-lovers-project.png";
import portfolioPlantsProject from "./assets/portfolio/plants-project.png";
import portfolioIotProject from "./assets/portfolio/iot-project.png";
import portfolioClockProject from "./assets/portfolio/clock-project.png";
import portfolioRobotProject from "./assets/portfolio/robot-project.png";
import portfolioFlickrBootstrapProject from "./assets/portfolio/flickr-bootstrap-project.png";
import portfolioFlickrMaterialProject from "./assets/portfolio/flickr-materia-project.png";
import portfolioFpgaProject from "./assets/portfolio/fpga-thesis.png";

const FIRST_NAME = "Carlos";
const MIDDLE_NAME = "Jair";
const LAST_NAME = "Méndez";
const USING_JS_SINCE = 2014;
const USING_REDUX_SINCE = 2019;
const WORK_EMAIL = "jair.mendez@lever.co";
const MAIN_EMAIL = "carlos@hadaelectronics.com";
const SECONDARY_EMAIL = "carlos@hadamenu.com";

const personal = {
  firstName: FIRST_NAME,
  middleName: MIDDLE_NAME,
  lastName: LAST_NAME,
  fullName: `${FIRST_NAME} ${LAST_NAME}`,
  currentLocation: "Chicago, IL",
  background: "Mechatronics Engineering",
  emails: [MAIN_EMAIL, SECONDARY_EMAIL, WORK_EMAIL],
  phone: "+1 (224) XXX-XX66",
  aboutMe: [
    "I'm a person with a lot of dreams. I learn on my own. I love to learn new things, and I'm always updated on my work field. I'm an entrepreneur, and I've created two companies where I'm helping other people, such as, developers and mexican women by giving them a platform where they can sell products.",
    "I speak two languages (English and Spanish). I'd love to learn more languages. I enjoy traveling. I love to eat every single regional food everywhere I go, and I smile to everyone.",
    "To those that told me because I'm Mexican I cannot shine, that the success was not available in my region (they may be partially right), well... I had the opportunity to be born in a land full of potholes, challenges and reasons to give up. A country that every day teaches us how to handle disappointment and frustration. A country that makes us live in a constant necessity to reinvent ourselves (not for pleasure but for survival).",
    "We don't need contacts, or money. WE DON'T NEED THE EASY WAY. It's true that we don't have trustworthy institutions or accessible eduation, not even tranquility in the streets (in Mexico). But what I DO have balls, and desire, and ambition, and creativity, and pride, and an enviable resilience to defeat any challenges in my way.",
    "Now, you need a meteorite to stop me. I'm hoping to do the things right to become an inspiration for the 120 million (population in Mexico) of folks that still don't believe that it can be done. I want to became another reason to never give up, another role model that inspires everyone to continue bringing down walls.",
    "Let's make it happen!",
  ],
  quotes: {
    "Bruce Lee":
      "Research your own experience. Absorb what is useful. Reject what is useless. Add what is essentially your own",
    Unknown: "There is no victory without sacrifice",
    "Walt Disney": "The way to get started is to quit talking and begin doing",
  } as Record<string, string>,
  links: {
    linkedin: "https://www.linkedin.com/in/cjairm/",
    github: "https://github.com/cjairm",
  },
};

const header = {
  greeting: `Hey there &#128075; I'm ${FIRST_NAME} ${MIDDLE_NAME}`,
  quotes: [
    "I want to be a person that <i>inspires</i> others",
    "I want to be a <i>role model</i> for those who think that anything is impossible",
    "I want to be an important person that is <i>respectful</i>, <i>fair</i>, and <i>truthful</i>",
  ],
};

const experience = {
  currentPosition: "Software Engineer",
  introduction: [
    `I'm passionate about building great products that make people’s lives easier. I have been using JavaScript for ${
      new Date().getFullYear() - USING_JS_SINCE
    } years, React and Redux for ${
      new Date().getFullYear() - USING_REDUX_SINCE
    } years. My expertise comes from startups where I developed a lot of different programs.`,
    "I have the ability to learn quickly and adapt — I'm a person that only by watching the environment around me, I'm able to learn about it. For example, I learned to code new languages by myself by reading official documentation and watching videos.",
  ],
  current: {
    company: {
      name: "Lever",
      address: "1125 Mission st, San Francisco, CA 94103",
      additionalInfo: "Now part of Employ Inc",
    },
    position: {
      name: "Software engineer L3",
      startedAt: 2021,
      endedAt: "Present",
    },
    location: {
      name: "Chicago, IL",
      type: "Remote",
    },
    workEmail: WORK_EMAIL,
    description: [
      "Spec writer and project lead of Remote Work project",
      "I implemented a lot of optimizations in the server response for the one page, reducing the size of the response by over 75%, as well as reducing the response time by over 70%. These optimizations included removing duplicated information, and moving some data to be loaded only when necessary. By reducing the size of the response, our servers should be able to construct the response faster, and users should be able to render the page faster.",
      "Participate in Lever's product development process and ship features to customers using DerbyJS and ShareDB.",
      "Participate in on-call rotation in Support Engineering to help diagnose and resolve production problems and customer issues.",
      "Assist other developers in best practices for Lever product development.",
      "Participate in interviewing and hiring, as a way to influence team growth and how our values inform our culture.",
      "Write internal documentation for features and systems so other engineers and stakeholders are brought along with decisions.",
    ],
  },
  other: [
    {
      company: {
        name: "HadaMenu.com",
      },
      position: {
        name: "Software Engineer and Cofounder",
        startedAt: 2019,
      },
      location: {
        name: "Mexico",
        type: "Remote",
      },
      description: ["In progress..."],
    },
    {
      company: {
        name: "RevSteer.com",
        additionalInfo: "Founded by BeMusical.us",
      },
      position: {
        name: "Full-Stack Engineer and Team Lead",
        startedAt: 2019,
        endedAt: 2020,
      },
      location: {
        name: "San Francisco",
        type: "Remote",
      },
      description: [
        "I led the team to create a new web app using the same architecture, frameworks and languages used at BeMusical.",
      ],
    },
    {
      company: {
        name: "BeMusical.us",
      },
      position: {
        name: "Full-Stack Engineer",
        startedAt: 2017,
        endedAt: 2020,
      },
      location: {
        name: "San Francisco",
        type: "Remote",
      },
      description: [
        "Developed backend with current traffic of 1,600 users/month, PHP (Laravel), Redis.",
        "Developed frontend with Adobe XD, JS (React, Redux), CSS (Bootstrap).",
        "Git manager working collaboratively with 10 team members.",
        "Designed and builded automated systems to manage our scalable infrastructure on AWS, Digital Ocean, MySQL.",
        "Developed the payments platform integrating Stripe API.",
        "Migrated platforms from Laravel to Django and MySQL to PostgreSQL.",
        "I was in charge of a web development team where it grew from 1 (me) developer to 10 developers in a year and a half. Also, we built 2 websites with more than 5 main features in each one, and all code supervised by me directly.",
      ],
    },
    {
      company: {
        name: "Domovolcanico.com",
      },
      position: {
        name: "Jr. Full-Stack Engineer",
        startedAt: 2017,
        endedAt: 2017,
      },
      location: {
        name: "Puebla, Mexico",
        type: "Hybrid",
      },
      description: [
        "I set up and updated a testing server.(AWS, Digital Ocean, MariaDB).",
        "I configured git in order to have repos and work collaboratively.",
        "Deploy the latest software development tools to aid development within the rest of the organization.",
        `
          We provided maintenance to around 15 websites using Laravel,
          Bootstrap, JQuery, with over 10,000 users/month.
          <a
            href="http://www.domovolcanico.com/pdf/portafolioDomovolcanico.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio link here
          </a>
        `,
      ],
    },
    {
      company: {
        name: "HadaElectronics.com",
      },
      position: {
        name: "Hardware Designer(Cofounder)",
        startedAt: 2016,
        endedAt: 2018,
      },
      location: {
        name: "Puebla, Mexico",
        type: "Hybrid",
      },
      description: [
        "Developed firmware for over 10 projects in automation Arduino, PIC.",
        "Created a website that is currently under maintenance (Laravel and React TS).",
        "We read 50+ engineering books to create 12 online videos didactic content for over 30k views, including topics: Basics electronics components, Digital electronics and logic design.",
      ],
    },
  ],
  school: [
    {
      degreeName:
        "Master's degree of Information Technology and Communications Engineering",
      schoolName: "Universidad Autónoma de Guadalajara. Guadalajara, Jalisco",
      startedAt: 2018,
      endedAt: 2019,
      description: [
        `
          IoT system for GPS tracking in real time. Link to my
          master's thesis(Spanish):
          <a
            href="https://drive.google.com/file/d/1GzFDHXi6O5YXam0atFlYf-rgQgTXk4yg/view"
            target="_blank"
            rel="noreferrer"
          >
            Real-time tracking system of public transport in
            Guadalajara city.
          </a>
          : Using: HTTP communication protocol, for testing ESP8266
          WiFi microchip, for production LoRa technology and ATmega328
          microchip, GPS, Node js (API REST), MongoDB, GMAPS API. Submitted for 2 events: XChallenge, and COECYTJAL (I won $20,000 USD in prizes from Guadalajara’s government)`,
      ],
    },
    {
      degreeName: "Bachelor of Mechatronics Engineer",
      schoolName: "Instituto Tecnológico Superior de Atlixco. Atlixco, Puebla",
      startedAt: 2009,
      endedAt: 2014,
      description: [
        `
          <a
            href="https://drive.google.com/file/d/1J6Lt8POaS26J_GRc2AlSdFf57-HILpG_/view"
            target="_blank"
            rel="noreferrer"
          >
            Bachelor thesis
          </a>
          — VHDL Using: FPGA Spartan 6 chip (Xilinx), ISE IDE
          (Xilinx), training board
          <a
            href="https://intesc.mx/"
            target="_blank"
            rel="noreferrer"
          >
            Shymbia
          </a>
          .
        `,
      ],
    },
  ],
};

const preferredProgrammingLanguages = {
  typescript: 75,
  go: 10,
  rust: 10,
};

const portfolio = [
  [
    {
      imageSource: portfolioGolangAlgoritms,
      title: "Golang Algorithms",
      description: "",
      hashtags: ["#go", "#golang", "#gopher"],
      date: "10/30/2020",
      link: "https://github.com/cjairm/go/tree/master/Algorithms-Go",
    },
    {
      imageSource: portfolioPokemonProject,
      title: "Pokemon app",
      description: "",
      hashtags: ["#react_native", "#styled_components", "#laravel"],
      date: "10/12/2020",
      link: "https://github.com/cjairm/Pokedex-ReactNative",
    },
    {
      imageSource: portfolioPetLoversProject,
      title: "Pet Lovers Site",
      description: "",
      hashtags: ["#reactJS", "#laravel", "#docker", "#scss", "#bootstrap"],
      date: "09/19/2020",
      link: "https://github.com/cjairm/Laravel/tree/main/Projects/pet-lovers",
    },
  ],
  [
    {
      imageSource: portfolioPlantsProject,
      title: "Plant control Site",
      description: "",
      hashtags: ["#reactTS", "#scss", "#bootstrap"],
      date: "09/25/2020",
      link: "https://github.com/cjairm/typescript/tree/master/Projects/PlantsProject",
    },
    {
      imageSource: portfolioIotProject,
      title: "IoT Project",
      description: "",
      hashtags: ["#HTTP", "#REST", "#lora", "#atmega328"],
      date: "06/10/2020",
      link: "https://drive.google.com/file/d/1GzFDHXi6O5YXam0atFlYf-rgQgTXk4yg/view?usp=sharing",
    },
    {
      imageSource: portfolioClockProject,
      title: "Clock Project",
      description: "",
      hashtags: ["#vanilla", "#javascript"],
      date: "06/21/2020",
      link: "https://github.com/cjairm/javascript/tree/master/Projects/Clock",
    },
  ],
  [
    {
      imageSource: portfolioRobotProject,
      title: "Robot Simulator Project",
      description: "",
      hashtags: ["#react", "#materialUI"],
      date: "01/20/2020",
      link: "https://github.com/cjairm/javascript/tree/master/Projects/testing-robot",
    },
    {
      imageSource: portfolioFlickrBootstrapProject,
      title: "Flickr Project 1",
      description: "",
      hashtags: ["#vanilla", "#javascript", "#bootstrap"],
      date: "06/21/2020",
      link: "https://github.com/cjairm/javascript/tree/master/Projects/vanilla-app-flickr",
    },
    {
      imageSource: portfolioFlickrMaterialProject,
      title: "Flickr Project 2",
      description: "",
      hashtags: ["#react", "#materialUI"],
      date: "06/21/2020",
      link: "https://github.com/cjairm/javascript/tree/master/Projects/react-app-flickr",
    },
  ],
  [
    {
      imageSource: portfolioFpgaProject,
      title: "FPGA Project",
      description: "",
      hashtags: ["#FPGA", "#spartan6", "#xilinx"],
      date: "06/27/2017",
      link: "https://drive.google.com/file/d/1J6Lt8POaS26J_GRc2AlSdFf57-HILpG_/view",
    },
    {
      title: "This project",
      description: "Designed and developed by me. You can reuse the template",
      hashtags: ["#bulma", "#react", "#ts"],
      date: "03/xx/2023",
      link: "https://github.com/cjairm/cjairm.github.io/tree/master/code",
    },
  ],
];

const otherProgrammingLanguages = [
  {
    "PHP (Laravel)": 50,
    "Bootstrap / Material UI / Bulma": 90,
    docker: 30,
    go: preferredProgrammingLanguages.go,
  },
  {
    Redis: 45,
    Django: 55,
    "C/C++": 35,
    rust: preferredProgrammingLanguages.rust,
  },
  {
    "DerbyJS / ShareDB": 55,
    "Relational Data Bases": 45,
    "Non-Relational Data Bases": 45,
    "React / React Native / Redux": 75,
  },
  {
    wasm: preferredProgrammingLanguages.rust,
  },
];

const appData = {
  personal,
  header,
  experience,
  preferredProgrammingLanguages,
  portfolio,
  otherProgrammingLanguages,
};

export default appData;

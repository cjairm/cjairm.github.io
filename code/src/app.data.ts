import { blog } from "./blog.data";

const FIRST_NAME = "Carlos";
const MIDDLE_NAME = "Jair";
const LAST_NAME = "Méndez";
const USING_JS_SINCE = 2014;
const USING_REDUX_SINCE = 2019;
const USING_GOLANG_SINCE = 2020;
const USING_UBUNTU_SINCE = 2014;
const WORK_EMAIL = "jair.mendez@lever.co";
const MAIN_EMAIL = "carlos@hadaelectronics.com";
const SECONDARY_EMAIL = "carlos@hadamenu.com";

const personal = {
  firstName: FIRST_NAME,
  middleName: MIDDLE_NAME,
  lastName: LAST_NAME,
  fullName: `${FIRST_NAME} ${LAST_NAME}`,
  currentLocation: "Chicago, IL",
  bachelors: "Mechatronics Engineering",
  masters: "Information and Communications Technology Engineering",
  emails: [MAIN_EMAIL, SECONDARY_EMAIL, WORK_EMAIL],
  phone: "+1 (224) XXX-XX66",
  background: {
    fullstack: [
      "An aspiring software engineer with knowledge in software engineering practices such as designing, coding, testing, maintaining, code reviews, code comments, etc. Strong ability to communicate with clients / partners and ability to express ideas clearly and concisely.",
      `I'm passionate about building great products that make people’s lives easier. I have been using <b>JavaScript</b> for ${
        new Date().getFullYear() - USING_JS_SINCE
      } years, <b>React</b> and <b>Redux</b> for ${
        new Date().getFullYear() - USING_REDUX_SINCE
      } years. My expertise comes from startups where I developed a lot of different programs.`,
      "I have the ability to learn quickly and adapt — I'm a person that only by watching the environment around me, I'm able to learn about it. For example, I learned to code new languages by myself by reading official documentation and watching videos.",
    ],
    backend: [
      `A ~${
        new Date().getFullYear() - USING_UBUNTU_SINCE
      } years <b>Linux</b> user with knowledge in <b>Ubuntu</b> and software engineering practices such as designing, coding, testing, maintaining, code reviews, code comments, etc. Strong ability to communicate with clients / partners and ability to express ideas clearly and concisely.`,
      `I'm passionate about building great products that make people’s lives easier. I have been using <b>Golang</b> for ${
        new Date().getFullYear() - USING_GOLANG_SINCE
      } years. My expertise comes from startups where I developed a lot of different programs for different purposes.`,
      "I have the ability to learn quickly and adapt — I'm a person that only by watching the environment around me, I'm able to learn about it. For example, I learned to code new languages by myself by reading official documentation and watching videos.",
    ],
  } as Record<string, string[]>,
  aboutMe: [
    "I'm a person with a lot of dreams. I learn on my own. I love to learn new things, and I'm always updated on my work field. I'm an entrepreneur, and I've created two companies where I'm helping other people, such as, developers and mexican women by giving them a platform where they can sell products.",
    "I speak two languages (English and Spanish). I'd love to learn more languages. I enjoy traveling. I love to eat every single regional food everywhere I go, and I smile to everyone.",
    "To those that told me because I'm Mexican I cannot shine, that the success was not available in my region (they may be partially right), well... I had the opportunity to be born in a land full of potholes, challenges and reasons to give up. A country that every day teaches us how to handle disappointment and frustration. A country that makes us live in a constant necessity to reinvent ourselves (not for pleasure but for survival).",
    "I'm eager to learn new things and do my best every day.",
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/cjairm/",
    github: "https://github.com/cjairm",
  },
};

const experience = {
  currentPosition: "Software Engineer",
  introduction: [],
  current: {
    company: {
      name: "Employ (Lever)",
      address: "1125 Mission st, San Francisco, CA 94103",
    },
    position: {
      name: "Lead Software engineer",
      startedAt: 2021,
      endedAt: "Present",
    },
    location: {
      name: "Chicago, IL",
      type: "Remote",
    },
    workEmail: WORK_EMAIL,
    description: [
      "Wrote and configured integration tests of the “Bulk Imports” project that increased the confidence of developers while improving / maintaining the feature since it will catch bugs if they are introduced.",
      "Spec writer, project lead of 5 people, and individual contributor of “Remote work”, where conversations with Indeed and LinkedIn to make sure the new feature worked according to the documentation provided. Work very closely with the API team and PM because the new feature was exposed to paid and public APIs; and the XML feed, as well. Also, post-release meetings with LinkedIn happened. <b>Impacted ~250k daily applicants</b>",
      "Optimizations in the server response for the “jobs” internal page, reducing the size of the response by over 75% in huge accounts. This included removing duplicate information that the server was emitting and reconstructing references on the client (worked with framework team), loading the users asynchronously,  and only loading active postings on page load, instead of all postings. <b>Impacted +27k users</b>",
      "Spec writer, project lead managing a team of 4, and individual contributor of “Referrals”. The project impacted paid features only. Delivered on time. It handles automated actions over referred candidates and their profiles. Also, a lot of UI/UX improvements. <b>Impacted ~1.5M users</b>",
      "Upgraded Elasticsearch cluster 6.8. Investigations led to a move to OpenSearch 2.11. Recommend the new size of the cluster based on annual growth and current size/fatigue/usage. Monitors were configured to analyze the health of the new cluster. Led the reindex process and the release was done in batches. Restructured the entire (internal) repo where some deprecations and fully removed unused functions were accomplished. Conversions from callbacks to async patterns increased readability in the repo. On top of that, some integration tests were enabled for the service. To conclude those structure changes allow to upgrade versions much easier. <b>Impacted ~1.5M users, and cutting 35% of costs</b>",
      "Converted more than 100 coffeescript files into typescript resulting in a speed increase in developer productivity and a reduction in typing errors. <b>Impacted +40 developers and translated into a development speed increase since developers are more familiar with ts</b>",
      "<i>Technologies: Kafka, CI tools, Cypress, Typescript, Coffeescript, Elasticsearch, Opensearch, AWS, DerbyJS, ShareDB, MongoDB, Figma, Kibana, Opensearch Dashboards, Jira, Confluence.</i>",
    ],
  },
  other: [
    {
      company: {
        name: "Hada Menú",
      },
      position: {
        name: "Software Engineer and Cofounder",
        startedAt: 2019,
      },
      location: {
        name: "Mexico",
        type: "Remote",
      },
      description: [
        "API working that handles authentication actions.",
        "Traductions are handled in English and Spanish and automatically set depending on the configurations of the client.",
        "Carts are done by table that allows customers to order at the same time on different phones.",
        "Orders are displayed on the kitchen's screens as soon as the customer sends orders.",
        'Users can navigate on restaurants’ menus. <a href="https://hadamenu.com/k/19904033-de45-40a4-a782-72314d4c214d?table=1" target="_blank">Demo here</a>',
        "<i>Technologies: Typescript, React, Laravel, PHP, Shared hosting, Golang, Expo / React Native, Bash</i>",
      ],
    },
    {
      company: {
        name: "BeMusical",
        additionalInfo: "RevSteer, too",
      },
      position: {
        name: "Full-Stack Engineer and Team Lead (both projects)",
        startedAt: 2017,
        endedAt: 2020,
      },
      location: {
        name: "San Francisco",
        type: "Remote",
      },
      description: [
        "Developed API + Front End page with traffic of 1,600 users/month.",
        "Designed and built automated systems to manage our scalable infrastructure on AWS",
        "Developed the payments feature that allows musicians to request payouts manually on demand",
        "Users can navigate the musicians' page which shows off capabilities, timing, and work.",
        "Grew from 1 to 10 developers in a year and a half. Also, built 2 (revsteer and bemusical) websites with more than 5 main features in each one, and all code was supervised by me directly.",
        `<a href="https://docs.google.com/presentation/d/1frO9ymWlxyrndom5AsuRt-IzgPAxGKKpheNNdDGF3LU/edit?usp=sharing" target="_blank">BeMusical Work</a>`,
        `<a href="https://docs.google.com/presentation/d/1nttcysNaYhCNTjEojd19JNvJSZ70QoHBRp9ux_kEuzc/edit?usp=sharing" target="_blank">RevSteer Work</a>`,
        "<i>Technologies: Technologies: Django, PostgreSQL, Adobe XD, React, Redux, Bootstrap, AWS, Dedicated servers, Stripe API, Bash, Twilio</i>",
      ],
    },
    {
      company: {
        name: "Domovolcanico",
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
        "I set up and updated a testing server.",
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
        "<i>Technologies: AWS, Digital Ocean, MariaDB, Git, Laravel, Bootstrap, JQuery</i>",
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
        "Developed firmware for over 10 hardware projects in automation.",
        "Created a website that is currently under maintenance.",
        "Read +50 engineering books to create +10 online videos with didactic content for over 30k views, including topics: Basics electronics components, Digital electronics, and logic design.",
        "<i>Technologies: Arduino, PICs, FPGAs, Bluetooth, MQTT protocol, Golang, HTMX, Bash</i>",
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

const portfolio = [
  {
    title: "@cjairm’s website",
    description: [
      'Designed and developed by me. You can reuse the template that can be downloaded from <a class="has-text-grey-light is-underlined" href="https://github.com/cjairm/cjairm.github.io/tree/master/code" target="_blank">here</a>',
      "<i>Technologies: React and Typescript</i>",
    ],
  },
  {
    title: "Golang + HTMX",
    size: "is-5",
    description: [
      "Using different approaches for fun to create multipurpose programs, such as, user authentication, web sockets, session and cookie manage; and todo app.",
      "<i>Technologies: Golang (Gin, Gorilla, Fiber, Native library), HTMX</i>",
    ],
  },
  {
    title: "New grep",
    description: [
      "Command that searches for words in files within a folder",
      '<a class="has-text-grey-light is-underlined" href="https://github.com/cjairm/cgrep" target="_blank">Usage</a>',
      "<i>Technologies: Golang</i>",
    ],
  },
  {
    title: "Tool that setups Mac dev environment",
    size: "is-7",
    description: [
      "This command is designed to help to configure specific applications with ease.",
      "It automates the process of setting up custom configurations.",
      "It saves you time and effort, especially if the application has a complex configuration process.",
      '<a class="has-text-grey-light is-underlined" href="https://github.com/cjairm/devenv" target="_blank">More information here</a>',
      "<i>Technologies: Golang</i>",
    ],
  },
  {
    title: "Expo / React Native / Native Android",
    size: "is-5",
    description: [
      'Created a pokemon app for fun. You can find code <a class="has-text-grey-light is-underlined" href="https://github.com/cjairm/Pokedex-ReactNative" target="_blank">here</a>',
      'Created apps for Hada Menu (restaurants & customers). Code lives in a private channel. <a class="has-text-grey-light is-underlined" href="https://docs.google.com/presentation/d/1lHxqJpty9kPD50pw1rRD33a-SAxM2k6-UIHHslrUhBI/edit?usp=sharing" target="_blank">More details</a>',
      'Created a GPS tracker + built the hardware. An example <a class="has-text-grey-light is-underlined" href="https://docs.google.com/presentation/d/1UA3PMfzophC1ULhoQTpZkL2c3kaGRchicPZojMuVpZY/edit?usp=sharing" target="_blank">here</a>',
      "<i>Technologies: Laravel, Expo / React Native, Android Studio</i>",
    ],
  },
  {
    title: "FPGA",
    size: "is-6",
    description: [
      'Gave support to the community that starts with FPGA programming with basic knowledge. You can find more info about the project <a class="has-text-grey-light is-underlined" href="https://drive.google.com/file/d/1J6Lt8POaS26J_GRc2AlSdFf57-HILpG_/view" target="_blank">here</a>.',
      "<i>Technologies: FPGA, VHDL, Hardware</i>",
    ],
  },
  {
    title: "Laravel CLI",
    size: "is-6",
    description: [
      "Command that sets up a new Laravel template using Docker",
      '<a class="has-text-grey-light is-underlined" href="https://github.com/cjairm/laravel-cli" target="_blank">Usage</a>',
      "<i>Technologies: Golang</i>",
    ],
  },
];

const backendSkills = [
  {
    "PHP (Laravel)": 60,
    "Bootstrap / Material UI / Bulma": 50,
    docker: 35,
    go: 60,
  },
  {
    Redis: 45,
    Django: 45,
    "C/C++": 35,
    rust: 15,
  },
  {
    "DerbyJS / ShareDB": 55,
    "Relational Data Bases": 45,
    "Non-Relational Data Bases": 45,
    "React / React Native / Redux": 65,
  },
  {
    wasm: 15,
    typescript: 75,
  },
];

const fullstackSkills = [
  {
    "PHP (Laravel)": 50,
    "Bootstrap / Material UI / Bulma": 80,
    docker: 20,
    go: 50,
  },
  {
    Redis: 45,
    Django: 35,
    "C/C++": 35,
    rust: 10,
  },
  {
    "DerbyJS / ShareDB": 55,
    "Relational Data Bases": 45,
    "Non-Relational Data Bases": 45,
    "React / React Native / Redux": 80,
  },
  {
    wasm: 25,
    typescript: 75,
  },
];

const appData = {
  personal,
  experience,
  portfolio,
  fullstackSkills,
  backendSkills,
  blog,
};

export default appData;

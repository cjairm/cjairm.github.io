import moment from "moment";

const data = {
  description: [
    `
    I'm passionate about building great products that make
    people’s lives easier. I have been using JavaScript for
    ${parseInt(moment().format("YYYY")) - 2015} years, React and
    Redux for ${2020 - 2017} years. My expertise comes from
    startups where I developed a lot of different programs.
    `,
    `
    Ability to learn quickly and adapt — I'm a person that only by
    watching the environment around me, I'm able to learn about
    it. For example, I learned to code new languages by myself by
    reading official documentation and watching videos.
    `,
  ],
  experience: [
    {
      type: "current",
      companyName: "Lever",
      position: "Software engineer III - Chicago, IL",
      bullets: [
        "Participate in Lever's product development process and ship features to customers using DerbyJS and ShareDB.",
        "Participate in on-call rotation in Support Engineering to help diagnose and resolve production problems and customer issues.",
        "Assist other developers in best practices for Lever product development.",
        "Participate in interviewing and hiring, as a way to influence team growth and how our values inform our culture.",
        "Write internal documentation for features and systems so other engineers and stakeholders are brought along with decisions.",
      ],
      extra: [
        "1125 Mission st, San Francisco, CA 94103",
        "jair.mendez@lever.co",
      ],
    },
    {
      companyName: "RevSteer.com (Founded by BeMusical.us)",
      position: "Full-Stack Engineer and Team Lead - San Francisco",
      startedAt: 2019,
      finishedAt: 2020,
      bullets: [
        "I led the team to create a new web app using the same architecture, frameworks and languages used at BeMusical.",
      ],
    },
    {
      companyName: "BeMusical.us",
      position: "Full-Stack Engineer - San Francisco",
      startedAt: 2017,
      finishedAt: 2020,
      bullets: [
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
      companyName: "Domovolcanico.com",
      position: "Jr. Full-Stack Engineer - Puebla, Mexico",
      startedAt: 2017,
      finishedAt: 2017,
      bullets: [
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
      companyName: "HadaElectronics.com",
      position: "Hardware Designer(Cofounder) - Puebla, Mexico",
      startedAt: 2016,
      finishedAt: 2018,
      bullets: [
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
      finishedAt: 2019,
      bullets: [
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
          microchip, GPS, Node js (API REST), MongoDB, GMAPS API.
        `,
      ],
      extra: [
        "Submitted for 2 events: XChallenge, and COECYTJAL (I won $20,000 USD in prizes from Guadalajara’s government)",
      ],
    },
    {
      degreeName: "Bachelor of Mechatronics Engineer",
      schoolName: "Instituto Tecnológico Superior de Atlixco. Atlixco, Puebla",
      startedAt: 2009,
      finishedAt: 2014,
      bullets: [
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
} as const;

export default data;

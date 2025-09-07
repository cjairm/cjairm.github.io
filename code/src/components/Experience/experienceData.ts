export interface ExperienceItem {
  id: string;
  company: string;
  companyLogo?: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-employ",
    company: "Employ (Lever)",
    companyLogo: "https://www.employinc.com/wp-content/uploads/2024/08/favicon-employinc-256x256.png",
    position: "Lead Software Engineer",
    location: "Chicago, IL (Remote)",
    startDate: "2021",
    endDate: "Present",
    description:
      "Lead engineer across high-impact initiatives spanning integrations, performance optimization, referrals automation, and search infrastructure upgrades.",
    achievements: [
      "Validated and hardened LLM-driven features by designing and running prompt tests with LangSmith, ensuring outputs met quality and compliance standards while avoiding bias across sensitive attributes (e.g., race, age, gender). This raised confidence in AI-assisted workflows across the company.",
      "Accelerated integration of Pillar HR (acquired product) by ramping up quickly to stabilize and reduce bugs. Contributed to building Lever–Pillar integrated features and introduced best practices (code reuse, consistent patterns in Python and TypeScript), improving maintainability and delivery speed across teams.",
      "Project lead & spec author for “Remote Work” (collab with Indeed/LinkedIn); ensured contract/API compliance across public/paid APIs and XML feeds; post-release reviews with LinkedIn; impacted ~250k daily applicants.",
      "Drove major performance optimizations on internal Jobs page: cut payloads >75% for large accounts by removing duplication, async user loading, and loading only active postings; impacted 27k+ users.",
      "Project lead (team of 4) and IC for “Referrals” (paid feature): automated referred-candidate workflows and delivered significant UX/UI improvements; impacted ~1.5M users.",
      "Wrote and configured integration tests for “Bulk Imports,” raising developer confidence and catching regressions early.",
      "Upgraded Elasticsearch 6.8 → OpenSearch 2.11: led reindex strategy/batch release, right-sized cluster for growth, added health monitors, refactored repo (callback → async, removed dead code), re-enabled integration tests; ~1.5M users impacted; ~35% cost reduction.",
      "Converted 100+ CoffeeScript files to TypeScript, improving DX and reducing typing errors; positively affected 40+ devs.",
    ],
    technologies: [
      "TypeScript",
      "CoffeeScript",
      "Node.js",
      "Kafka",
      "Cypress",
      "Elasticsearch",
      "OpenSearch",
      "AWS",
      "MongoDB",
      "DerbyJS",
      "ShareDB",
      "Figma",
      "Kibana",
      "OpenSearch Dashboards",
      "Jira",
      "Confluence",
    ],
  },
  {
    id: "exp-hadamenu",
    company: "Hada Menú",
    companyLogo: "",
    position: "Software Engineer & Cofounder",
    location: "Mexico (Remote)",
    startDate: "2019",
    endDate: "Present",
    description:
      "Built a multilingual restaurant ordering platform with real-time kitchen screens, per-table carts, and auth APIs.",
    achievements: [
      "Implemented authentication APIs and bilingual (EN/ES) UX with automatic locale detection.",
      "Designed table-scoped carts enabling simultaneous orders from multiple devices.",
      "Delivered real-time kitchen dashboards for instant order visibility.",
      "Launched public demo to showcase end-to-end flow.",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Laravel",
      "PHP",
      "Bash",
      "Shared hosting",
    ],
  },
  {
    id: "exp-bemusical-revsteer",
    company: "BeMusical / RevSteer",
    companyLogo: "",
    position: "Full-Stack Engineer & Team Lead",
    location: "San Francisco (Remote)",
    startDate: "2017",
    endDate: "2020",
    description:
      "Led full-stack development and team growth across two products; delivered payments, profiles, and AWS infra.",
    achievements: [
      "Owned API + Frontend with ~1,600 monthly users.",
      "Built automated AWS infrastructure tooling for scalability.",
      "Implemented payouts/payments for musicians via Stripe API.",
      "Scaled team from 1 → 10 engineers; shipped 5+ major features per product with direct code reviews.",
    ],
    technologies: [
      "Django",
      "PostgreSQL",
      "React",
      "Redux",
      "Bootstrap",
      "AWS",
      "Stripe API",
      "Twilio",
      "Bash",
      "Adobe XD",
      "Dedicated servers",
    ],
  },
  {
    id: "exp-domovolcanico",
    company: "Domovolcanico",
    companyLogo: "",
    position: "Jr. Full-Stack Engineer",
    location: "Puebla, Mexico (Hybrid)",
    startDate: "2014",
    endDate: "2017",
    description:
      "Supported dev tooling, CI practices, and maintenance for a portfolio of Laravel sites with significant traffic.",
    achievements: [
      "Set up and maintained a testing server; configured Git workflows for collaborative repos.",
      "Maintained ~15 Laravel/Bootstrap/jQuery sites serving 10k+ users/month; improved release process.",
    ],
    technologies: [
      "Laravel",
      "Bootstrap",
      "jQuery",
      "AWS",
      "DigitalOcean",
      "MariaDB",
      "Git",
    ],
  },
  {
    id: "exp-hadaelectronics",
    company: "HadaElectronics.com",
    companyLogo: "",
    position: "Hardware Designer (Cofounder)",
    location: "Puebla, Mexico (Hybrid)",
    startDate: "2016",
    endDate: "2018",
    description:
      "Delivered firmware and educational content for automation projects; built and maintained the company site.",
    achievements: [
      "Developed firmware for 10+ automation hardware projects.",
      "Produced 10+ didactic videos with 30k+ total views covering electronics and digital design.",
    ],
    technologies: [
      "Arduino",
      "PIC",
      "FPGA",
      "Bluetooth",
      "MQTT",
      "Golang",
      "HTMX",
      "Bash",
    ],
  },
];

export default experienceData;


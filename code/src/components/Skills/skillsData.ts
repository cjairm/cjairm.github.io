export type SkillLevel = "expert" | "advanced" | "intermediate" | "beginner";

interface Skill {
  name: string;
  level: SkillLevel;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React / React Native / Redux", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "JavaScript (ES6+)", level: "expert" },
      { name: "Bootstrap / Material UI / Bulma", level: "advanced" },
      { name: "HTML5", level: "expert" },
      { name: "CSS3/SCSS", level: "expert" },
      { name: "Next js", level: "advanced" },
      { name: "Tailwind CSS", level: "intermediate" },
      { name: "WASM", level: "beginner" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Go (Golang)", level: "advanced" },
      { name: "PHP (Laravel)", level: "advanced" },
      { name: "Node.js", level: "advanced" },
      { name: "Django", level: "advanced" },
      { name: "Express", level: "advanced" },
      { name: "REST APIs", level: "expert" },
      { name: "GraphQL", level: "advanced" },
      { name: "Redis", level: "intermediate" },
      { name: "Relational Databases (PostgreSQL, MySQL)", level: "advanced" },
      {
        name: "Non-Relational Databases (MongoDB, DynamoDB)",
        level: "advanced",
      },
      { name: "DerbyJS / ShareDB", level: "advanced" },
      { name: "C / C++", level: "intermediate" },
      { name: "Rust", level: "beginner" },
      { name: "Python", level: "advanced" },
    ],
  },
  {
    name: "Tools & Practices",
    skills: [
      { name: "Git / GitHub / GitLab", level: "expert" },
      { name: "CI/CD", level: "advanced" },
      { name: "Docker", level: "intermediate" },
      { name: "Jest / Mocha / Testing Library", level: "expert" },
      { name: "Performance Optimization", level: "advanced" },
      { name: "Agile / Scrum", level: "expert" },
      {
        name: "Prompt Engineering (LangSmith, LLM Debugging)",
        level: "advanced",
      },
      { name: "Webpack", level: "advanced" },
      { name: "Cloud (AWS, GCP basics)", level: "intermediate" },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Team Leadership", level: "expert" },
      { name: "Technical Mentoring", level: "expert" },
      { name: "Problem Solving", level: "expert" },
      { name: "Project Management", level: "advanced" },
      { name: "Communication", level: "expert" },
      { name: "Collaboration", level: "expert" },
      { name: "Adaptability", level: "advanced" },
      { name: "Continuous Learning", level: "expert" },
    ],
  },
];

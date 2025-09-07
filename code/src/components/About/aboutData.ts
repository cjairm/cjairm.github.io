import {
  personalData,
  USING_JS_SINCE,
  USING_REDUX_SINCE,
  USING_GOLANG_SINCE,
  USING_UBUNTU_SINCE,
} from "../../personal";

export type AboutData = {
  heading: string;
  bio: string;
  credential: string;
  personalNote: string;
  skills: string[];
};

export function buildAboutData(p = personalData): AboutData {
  const year = new Date().getFullYear();
  const yearsJs = year - USING_JS_SINCE;
  const yearsReactRedux = year - USING_REDUX_SINCE;
  const yearsGo = year - USING_GOLANG_SINCE;
  const yearsUbuntu = year - USING_UBUNTU_SINCE;

  return {
    heading: "About Me",
    bio: `I’m ${p.fullName}, a software engineer based in ${p.currentLocation} with a product mindset and a focus on clean, scalable code. I’ve worked across startups and fast-moving teams, emphasizing readable architecture, thoughtful testing, and user-centered outcomes. I’ve used JavaScript for ${yearsJs} years and React/Redux for ${yearsReactRedux} years, while also building resilient backends in Go and Python.`,
    credential: `I hold a B.S. in ${p.bachelors} and an M.S. in ${p.masters}. I’m a long-time Linux user (~${yearsUbuntu} years) and have built backend services in Go for ${yearsGo} years—shipping reliable systems, reviewing code rigorously, and improving developer experience through better tooling and CI. Recently, I’ve worked extensively with Python in the AI/LLM ecosystem, using tools like LangSmith to debug prompts and ensure responsible, unbiased outputs in production systems.`,
    personalNote: `I’m bilingual (English/Spanish), self-taught in many stacks, and entrepreneurial by nature. I enjoy exploring new tech, contributing when I can, and I believe in staying curious, shipping iteratively, and helping teams communicate clearly.`,
    skills: [
      "Frontend Architecture (React, TypeScript, Redux)",
      "Backend Services (Go, Node.js, Python)",
      "Performance & Reliability",
      "Testing & Code Review Culture",
      "CI/CD & Developer Experience",
      "Team Collaboration & Mentorship",
      "AI/LLM Integration & Prompt Debugging (LangSmith)",
      "Linux/Ubuntu Proficiency",
    ],
  };
}

export const aboutData = buildAboutData();

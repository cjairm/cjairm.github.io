export interface ExperienceItem {
  id: string;
  company: string;
  companyLogo?: string;
  position: string;
  location: string;
  startDate: string; // Format: "MMM YYYY"
  endDate: string | "Present"; 
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "TechForward Inc.",
    companyLogo: "https://via.placeholder.com/80",
    position: "Senior Software Engineer",
    location: "Chicago, IL",
    startDate: "Jan 2022",
    endDate: "Present",
    description: "Leading the development of cloud-native applications and microservices architecture. Collaborating with cross-functional teams to design and implement scalable solutions that drive business value.",
    achievements: [
      "Architected and implemented a real-time data processing pipeline that improved system throughput by 40%",
      "Led the migration from monolith to microservices, reducing deployment time by 65%",
      "Mentored junior engineers and established code review practices that reduced production bugs by 30%"
    ],
    technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker", "Kubernetes", "GraphQL"]
  },
  {
    id: "exp-2",
    company: "InnovateSoft Solutions",
    companyLogo: "https://via.placeholder.com/80",
    position: "Full Stack Developer",
    location: "San Francisco, CA (Remote)",
    startDate: "Mar 2020",
    endDate: "Dec 2021",
    description: "Developed and maintained full-stack web applications for enterprise clients. Implemented responsive UIs and RESTful APIs to support business operations and customer-facing products.",
    achievements: [
      "Built a customer portal that increased self-service resolution by 45%",
      "Optimized database queries that reduced page load times by 60%",
      "Implemented CI/CD pipeline that streamlined deployment processes"
    ],
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Jest", "GitHub Actions"]
  },
  {
    id: "exp-3",
    company: "DataViz Technologies",
    companyLogo: "https://via.placeholder.com/80",
    position: "Frontend Developer",
    location: "Austin, TX",
    startDate: "Jun 2018",
    endDate: "Feb 2020",
    description: "Created interactive data visualization dashboards for financial services clients. Worked closely with UX designers and backend engineers to deliver intuitive interfaces for complex data analysis.",
    achievements: [
      "Developed interactive charts that increased user engagement by 35%",
      "Reduced bundle size by 45% through code splitting and lazy loading",
      "Implemented accessibility features that ensured WCAG 2.1 AA compliance"
    ],
    technologies: ["JavaScript", "D3.js", "Vue.js", "CSS3/SCSS", "Webpack", "Jest"]
  },
  {
    id: "exp-4",
    company: "WebStart Studio",
    companyLogo: "https://via.placeholder.com/80",
    position: "Junior Web Developer",
    location: "Chicago, IL",
    startDate: "Aug 2016",
    endDate: "May 2018",
    description: "Designed and developed responsive websites for small to medium-sized businesses. Collaborated with designers to translate mockups into functional websites.",
    achievements: [
      "Built and launched 20+ client websites with a 95% satisfaction rate",
      "Implemented SEO best practices that improved client search rankings",
      "Created reusable component library that accelerated development time"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP", "WordPress", "Bootstrap"]
  }
];

export default experienceData;
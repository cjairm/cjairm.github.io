import React from 'react';
import styles from './Experience.module.scss';

// Define experience data directly in the component file
interface ExperienceItem {
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

const experienceData: ExperienceItem[] = [
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

const Experience: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Work Experience</h2>
        <div className={styles.headingUnderline}></div>
      </div>
      
      <div className={styles.timelineContainer}>
        {experienceData.map((experience: ExperienceItem, index: number) => (
          <div 
            key={experience.id}
            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className={styles.timelineContent}>
              <div className={styles.companyHeader}>
                {experience.companyLogo && (
                  <div className={styles.logoContainer}>
                    <img 
                      src={experience.companyLogo} 
                      alt={`${experience.company} logo`} 
                      className={styles.companyLogo}
                    />
                  </div>
                )}
                <div className={styles.companyInfo}>
                  <h3 className={styles.position}>{experience.position}</h3>
                  <div className={styles.companyName}>{experience.company}</div>
                  <div className={styles.duration}>
                    {experience.startDate} - {experience.endDate}
                  </div>
                  <div className={styles.location}>{experience.location}</div>
                </div>
              </div>

              <p className={styles.description}>{experience.description}</p>
              
              {experience.achievements.length > 0 && (
                <div className={styles.achievementsContainer}>
                  <h4 className={styles.sectionTitle}>Key Achievements</h4>
                  <ul className={styles.achievementsList}>
                    {experience.achievements.map((achievement: string, i: number) => (
                      <li key={`${experience.id}-achievement-${i}`} className={styles.achievementItem}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {experience.technologies.length > 0 && (
                <div className={styles.technologiesContainer}>
                  <h4 className={styles.sectionTitle}>Technologies</h4>
                  <div className={styles.techStack}>
                    {experience.technologies.map((tech: string, i: number) => (
                      <span key={`${experience.id}-tech-${i}`} className={styles.techItem}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className={styles.timelinePoint}>
              <div className={styles.timelineDot}></div>
            </div>
          </div>
        ))}
        
        <div className={styles.timelineLine}></div>
      </div>
    </div>
  );
};

export default Experience;
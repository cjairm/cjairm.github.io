import React from 'react';
import styles from './Projects.module.scss';

// Project type definition
export interface Project {
  id: string;
  title: string;
  role: string;
  summary: string;
  stack: string[];
  outcomes: string[];
  image: {
    src: string;
    alt: string;
  };
  links: {
    demo?: string;
    repo?: string;
  };
}

// Project data
const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    role: 'Lead Frontend Developer',
    summary: 'A modern e-commerce platform with real-time inventory, personalized recommendations, and seamless checkout experience.',
    stack: ['React', 'TypeScript', 'Redux', 'Node.js', 'MongoDB'],
    outcomes: [
      'Increased conversion rate by 32% through improved UX',
      'Reduced page load time by 65% with optimized rendering',
      'Implemented responsive design for all device types'
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
      alt: 'E-Commerce dashboard showing product analytics'
    },
    links: {
      demo: 'https://example.com/demo',
      repo: 'https://github.com/example/ecommerce'
    }
  },
  {
    id: 'project-2',
    title: 'Health Monitoring App',
    role: 'Full Stack Developer',
    summary: 'A healthcare application that tracks vital signs, medication schedules, and provides insights through data visualization.',
    stack: ['React Native', 'GraphQL', 'Apollo', 'Express', 'PostgreSQL'],
    outcomes: [
      'Achieved 98% user retention rate after 3 months',
      'Integrated with 5 major health data providers',
      'Developed custom visualization components for medical data'
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Health app dashboard with vitals monitoring interface'
    },
    links: {
      demo: 'https://example.com/health-app'
    }
  },
  {
    id: 'project-3',
    title: 'Financial Analytics Dashboard',
    role: 'Frontend Engineer',
    summary: 'An interactive dashboard that visualizes complex financial data and provides actionable insights for investment decisions.',
    stack: ['Vue.js', 'D3.js', 'Tailwind CSS', 'Firebase', 'REST API'],
    outcomes: [
      'Reduced data processing time by 78%',
      'Implemented 12 interactive chart types for data analysis',
      'Built responsive layouts that work across all devices'
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Financial dashboard with multiple data visualizations'
    },
    links: {
      demo: 'https://example.com/finance-dashboard',
      repo: 'https://github.com/example/finance-analytics'
    }
  },
  {
    id: 'project-4',
    title: 'Smart Home Control System',
    role: 'IoT Developer',
    summary: 'A comprehensive smart home solution that integrates various IoT devices and provides a unified control interface.',
    stack: ['React', 'Node.js', 'WebSockets', 'MQTT', 'MongoDB'],
    outcomes: [
      'Reduced energy consumption by 40% in test homes',
      'Integrated with 15+ smart device manufacturers',
      'Implemented voice and gesture control capabilities'
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1558002038-86f490d6af6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Smart home control interface on tablet and phone'
    },
    links: {
      demo: 'https://example.com/smart-home'
    }
  }
];

const Projects: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Portfolio</h2>
        <div className={styles.headingUnderline}></div>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <article key={project.id} className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <img 
                src={project.image.src} 
                alt={project.image.alt} 
                className={styles.projectImage} 
                loading="lazy"
              />
            </div>
            
            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectRole}>{project.role}</p>
              
              <p className={styles.projectSummary}>{project.summary}</p>
              
              <div className={styles.stackContainer}>
                {project.stack.map((tech, index) => (
                  <span key={`${project.id}-tech-${index}`} className={styles.stackItem}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className={styles.outcomesContainer}>
                <h4 className={styles.outcomesTitle}>Key Outcomes</h4>
                <ul className={styles.outcomesList}>
                  {project.outcomes.map((outcome, index) => (
                    <li key={`${project.id}-outcome-${index}`} className={styles.outcomeItem}>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.linksContainer}>
                {project.links.demo && (
                  <a 
                    href={project.links.demo} 
                    className={styles.primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View demo for ${project.title}`}
                  >
                    View Demo
                  </a>
                )}
                
                {project.links.repo && (
                  <a 
                    href={project.links.repo} 
                    className={styles.secondaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View code repository for ${project.title}`}
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
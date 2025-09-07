import React from "react";
import styles from "./Portfolio.module.scss";
import { portfolioData } from "./portfolioData";

const Portfolio: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Portfolio</h2>
        <div className={styles.headingUnderline}></div>
      </div>

      <div className={styles.projectsGrid}>
        {portfolioData.map((project) => (
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
                  <span
                    key={`${project.id}-tech-${index}`}
                    className={styles.stackItem}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.outcomesContainer}>
                <h4 className={styles.outcomesTitle}>Key Outcomes</h4>
                <ul className={styles.outcomesList}>
                  {project.outcomes.map((outcome, index) => (
                    <li
                      key={`${project.id}-outcome-${index}`}
                      className={styles.outcomeItem}
                    >
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

export default Portfolio;

import React from "react";
import styles from "./Experience.module.scss";
import { experienceData } from "./experienceData";
import type { ExperienceItem } from "./experienceData";

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
                    {experience.achievements.map(
                      (achievement: string, i: number) => (
                        <li
                          key={`${experience.id}-achievement-${i}`}
                          className={styles.achievementItem}
                        >
                          {achievement}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}

              {experience.technologies.length > 0 && (
                <div className={styles.technologiesContainer}>
                  <h4 className={styles.sectionTitle}>Technologies</h4>
                  <div className={styles.techStack}>
                    {experience.technologies.map((tech: string, i: number) => (
                      <span
                        key={`${experience.id}-tech-${i}`}
                        className={styles.techItem}
                      >
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


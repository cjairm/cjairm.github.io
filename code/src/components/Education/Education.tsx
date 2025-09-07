import React from "react";
import styles from "./Education.module.scss";
import { educationData } from "./educationData";

const Education: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Education</h2>
        <div className={styles.headingUnderline}></div>
      </div>

      <div className={styles.educationList}>
        {educationData.map((education) => (
          <div key={education.id} className={styles.educationCard}>
            <div className={styles.cardHeader}>
              {education.institutionLogo && (
                <div className={styles.logoContainer}>
                  <img
                    src={education.institutionLogo}
                    alt={`${education.institution} logo`}
                    className={styles.institutionLogo}
                  />
                </div>
              )}

              <div className={styles.headerInfo}>
                <h3 className={styles.degree}>
                  {education.degree} in {education.field}
                </h3>
                <div className={styles.institution}>
                  {education.institution}
                </div>
                <div className={styles.details}>
                  <span className={styles.date}>
                    {education.startDate} - {education.endDate}
                  </span>
                  <span className={styles.location}>{education.location}</span>
                </div>
              </div>
            </div>

            {education.description && (
              <p className={styles.description}>{education.description}</p>
            )}

            {education.relevantCourses &&
              education.relevantCourses.length > 0 && (
                <div className={styles.coursesContainer}>
                  <h4 className={styles.sectionTitle}>Relevant Coursework</h4>
                  <div className={styles.courseList}>
                    {education.relevantCourses.map((course, index) => (
                      <span
                        key={`${education.id}-course-${index}`}
                        className={styles.courseItem}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            {education.achievements && education.achievements.length > 0 && (
              <div className={styles.achievementsContainer}>
                <h4 className={styles.sectionTitle}>Achievements</h4>
                <ul className={styles.achievementsList}>
                  {education.achievements.map((achievement, index) => (
                    <li
                      key={`${education.id}-achievement-${index}`}
                      className={styles.achievementItem}
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;


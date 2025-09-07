import React from "react";
import styles from "./About.module.scss";
import { aboutData } from "./aboutData";

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.headingContainer}>
          <h2 className={styles.heading}>{aboutData.heading}</h2>
          <div className={styles.headingUnderline} aria-hidden="true"></div>
        </div>

        <div className={styles.content}>
          <p className={styles.bio}>{aboutData.bio}</p>
          <p className={styles.credential}>{aboutData.credential}</p>
          <p className={styles.personal}>{aboutData.personalNote}</p>
        </div>
      </div>

      <div className={styles.skillsContainer}>
        <div className={styles.skillsHeading}>
          <span className={styles.skillsIcon} aria-hidden="true">
            &lt;/&gt;
          </span>
          <h3>Core Expertise</h3>
        </div>
        <ul className={styles.skillsList}>
          {aboutData.skills.map((skill, i) => (
            <li key={`${skill}-${i}`}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;


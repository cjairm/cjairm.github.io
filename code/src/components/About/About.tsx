import React from 'react';
import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.headingContainer}>
          <h2 className={styles.heading}>About Me</h2>
          <div className={styles.headingUnderline} aria-hidden="true"></div>
        </div>
        
        <div className={styles.content}>
          <p className={styles.bio}>
            I'm a passionate senior software engineer specializing in building exceptional digital experiences 
            with a focus on performance, scalability, and clean code. I approach every project with a 
            problem-solving mindset and a commitment to creating intuitive, user-centric solutions.
          </p>
          
          <p className={styles.credential}>
            With over 10 years of experience architecting enterprise-grade web applications, 
            I've helped Fortune 500 companies transform their digital presence through 
            modern technology stacks and optimized development workflows.
          </p>
          
          <p className={styles.personal}>
            When I'm not coding, you'll find me exploring the latest tech trends, contributing to open source, 
            or enjoying a good book on system design. I believe in continuous learning and sharing knowledge 
            with the tech community.
          </p>
        </div>
      </div>
      
      <div className={styles.skillsContainer}>
        <div className={styles.skillsHeading}>
          <span className={styles.skillsIcon} aria-hidden="true">&lt;/&gt;</span>
          <h3>Core Expertise</h3>
        </div>
        
        <ul className={styles.skillsList}>
          <li>Frontend Architecture</li>
          <li>Scalable Backend Systems</li>
          <li>Performance Optimization</li>
          <li>DevOps & CI/CD</li>
          <li>Team Leadership</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
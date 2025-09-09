import React from 'react';
import styles from './Fun.module.scss';

const Fun: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Beyond Code</h2>
        <div className={styles.headingUnderline}></div>
      </div>
      
      <div className={styles.content}>
        <p className={styles.paragraph}>
          I'm an entrepreneur at heart — I love experimenting with ideas, testing marketing strategies, and learning from how companies build their vision.
        </p>
        
        <p className={styles.paragraph}>
          Outside of work, I challenge myself in other ways too: I trained for and completed my first half marathon, and fitness has become a new habit I'm proud to keep building.
        </p>
        
        <p className={styles.paragraph}>
          I'm proudly Mexican, chasing the dream of working alongside the best of the best in the U.S., and one day moving to Europe to keep growing and exploring new opportunities.
        </p>
      </div>
    </section>
  );
};

export default Fun;
import React from "react";
import styles from "./Hero.module.scss";
import { handleScrollTo } from "../../utils/scroll";

const Hero: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.name}>James Anderson</h1>
        <p className={styles.title}>
          Senior Software Engineer leading high-performance teams
        </p>
        <p className={styles.credential}>
          10+ years building scalable applications for Fortune 500 companies
        </p>
        <a
          href="#work"
          className={styles.cta}
          onClick={(e) => handleScrollTo(e, "work")}
        >
          View Work
        </a>
      </div>
      <div className={styles.imageContainer}>
          <div className={styles.imagePlaceholder} aria-hidden="true">
            <img src="/src/assets/about-me.jpg" alt="Profile" className={styles.profileImage} />
          </div>
      </div>
    </div>
  );
};

export default Hero;


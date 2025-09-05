import React from "react";
import styles from "./Hero.module.scss";
import { handleScrollTo } from "../../utils/scroll";
import { heroData } from "./heroData";

const Hero: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.name}>{heroData.name}</h1>
        <p className={styles.title}>{heroData.title}</p>
        <p className={styles.credential}>{heroData.credential}</p>
        <a
          href={`#${heroData.ctaLink}`}
          className={styles.cta}
          onClick={(e) => handleScrollTo(e, heroData.ctaLink)}
        >
          {heroData.ctaText}
        </a>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imagePlaceholder} aria-hidden="true">
          <img
            src={heroData.profileImage}
            alt="Profile"
            className={styles.profileImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import styles from "./Footer.module.scss";
import { handleScrollTo } from "../../utils/scroll";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.displayLinks}>
          <div className={styles.navLinks}>
            <a
              href="#about"
              className={styles.link}
              onClick={(e) => handleScrollTo(e, "about")}
            >
              About
            </a>
            <a
              href="#experience"
              className={styles.link}
              onClick={(e) => handleScrollTo(e, "experience")}
            >
              Experience
            </a>
            <a
              href="#education"
              className={styles.link}
              onClick={(e) => handleScrollTo(e, "education")}
            >
              Education
            </a>
            <a
              href="#portfolio"
              className={styles.link}
              onClick={(e) => handleScrollTo(e, "portfolio")}
            >
              Portfolio
            </a>
            <a
              href="#skills"
              className={styles.link}
              onClick={(e) => handleScrollTo(e, "skills")}
            >
              Skills
            </a>
          </div>
          <div className={styles.contactLinks}>
            <a
              href="mailto:carlos@hadaelectronics.com"
              className={styles.link}
              aria-label="Email"
            >
              Email
            </a>
            <a
              href="https://github.com/cjairm"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/cjairm/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
            <a
              href="/src/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="Download resume"
            >
              Resume
            </a>
          </div>
        </div>
        <div className={styles.copyrightInfo}>
          <p className={styles.copyright}>
            &copy; {currentYear} Jair Mendez. All rights reserved.
          </p>
          <p className={styles.builtWith}>
            Built with React + TypeScript + Sass
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

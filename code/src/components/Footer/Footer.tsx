import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.navLinks}>
          <a href="#about" className={styles.link}>About</a>
          <a href="#work" className={styles.link}>Projects</a>
          <a href="#skills" className={styles.link}>Skills</a>
          <a href="#beyond" className={styles.link}>Beyond Code</a>
        </div>
        
        <div className={styles.contactLinks}>
          <a 
            href="mailto:contact@example.com" 
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
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.link}
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.link}
            aria-label="Download resume"
          >
            Resume
          </a>
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
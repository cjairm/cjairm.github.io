import React, { useState, useEffect } from "react";
import navbarImg from "../../assets/navbar-logo.png";
import styles from "./Navbar.module.scss";
import { handleScrollTo } from "../../utils/scroll";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateNavHeight = () => {
      document.documentElement.style.setProperty(
        "--nav-h",
        isScrolled ? "60px" : "70px",
      );
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);

    updateNavHeight();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <img src={navbarImg} alt="Profile" style={{ maxHeight: "30px" }} />
        </a>

        <button
          className={`${styles.menuToggle}${isMenuOpen ? " " + styles.open : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <div className={styles.menuIcon}>
            <span></span>
          </div>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a
                href="#about"
                className={styles.navLink}
                onClick={(e) => handleScrollTo(e, "about", setIsMenuOpen)}
              >
                About
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#experience"
                className={styles.navLink}
                onClick={(e) => handleScrollTo(e, "experience", setIsMenuOpen)}
              >
                Experience
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#education"
                className={styles.navLink}
                onClick={(e) => handleScrollTo(e, "education", setIsMenuOpen)}
              >
                Education
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#portfolio"
                className={styles.navLink}
                onClick={(e) => handleScrollTo(e, "portfolio", setIsMenuOpen)}
              >
                Portfolio
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#skills"
                className={styles.navLink}
                onClick={(e) => handleScrollTo(e, "skills", setIsMenuOpen)}
              >
                Skills
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

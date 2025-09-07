import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Fun from "./components/Fun";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import styles from "./styles/App.module.scss";

function App() {
  return (
    <>
      <Navbar />
      <div className={styles.scrollContainer}>
        <Section id="home" className={styles.heroSection}>
          <Hero />
        </Section>
        
        <Section id="about" className={styles.aboutSection}>
          <About />
        </Section>
        
        <Section id="experience" className={styles.experienceSection}>
          <Experience />
        </Section>
        
        <Section id="education" className={styles.educationSection}>
          <Education />
        </Section>
        
        <Section id="portfolio" className={styles.workSection}>
          <Portfolio />
        </Section>
        
        <Section id="skills" className={styles.skillsSection}>
          <Skills />
        </Section>
        
        <Section id="beyond" className={styles.funSection}>
          <Fun />
        </Section>
        
        <Footer />
      </div>
    </>
  );
}

export default App;

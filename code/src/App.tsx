import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Fun from "./components/Fun";
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
        
        <Section id="work" className={styles.workSection}>
          <Projects />
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

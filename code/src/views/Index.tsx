import React from "react";

import Navbar from "../layout/Navbar";
import AboutmeSection from "../components/AboutmeSection";
import ResumeSection from "../components/ResumeSection";
import PortfolioSection from "../components/PortfolioSection";
import SkillsSection from "../components/SkillsSection";
import BackgroundSection from "../components/BackgroundSection";
import ContactmeSection from "../components/ContactmeSection";
import Footer from "../layout/Footer";

const Index: React.FunctionComponent = (): React.ReactElement => {
  return (
    <>
      <Navbar />
      <div className="columns is-centered has-background-light is-gapless">
        <div className="column is-10">
          <AboutmeSection />
          <BackgroundSection />
          <ResumeSection />
          <PortfolioSection />
          <SkillsSection />
          <ContactmeSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;

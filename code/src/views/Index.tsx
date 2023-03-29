import React from "react";

import Navbar from "../layout/Navbar";
import HeaderSection from "../components/HeaderSection";
import AboutmeSection from "../components/AboutmeSection";
import QuoteSection from "../components/QuoteSection";
import ResumeSection from "../components/ResumeSection";
import PortfolioSection from "../components/PortfolioSection";
import SkillsSection from "../components/SkillsSection";
import ContactmeSection from "../components/ContactmeSection";
import Footer from "../layout/Footer";

import appData from "../app.data";

const Index: React.FunctionComponent = (): React.ReactElement => {
  const quotes = appData.personal.quotes;

  const firstAuthor = Object.keys(quotes)[0];
  const firstQuote = quotes[firstAuthor];

  const secondAuthor = Object.keys(quotes)[1];
  const secondQuote = quotes[secondAuthor];

  const thirdAuthor = Object.keys(quotes)[2];
  const thirdQuote = quotes[thirdAuthor];

  return (
    <>
      <Navbar />
      <HeaderSection />
      <AboutmeSection />
      <QuoteSection author={firstAuthor} quote={firstQuote} />
      <ResumeSection />
      <QuoteSection author={secondAuthor} quote={secondQuote} />
      <PortfolioSection />
      <QuoteSection author={thirdAuthor} quote={thirdQuote} />
      <SkillsSection />
      <ContactmeSection />
      <Footer />
    </>
  );
};

export default Index;

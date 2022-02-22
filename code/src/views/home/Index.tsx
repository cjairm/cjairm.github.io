import React, { FC } from "react";

import Hero from "./Hero";
import About from "./About";
import Quotes from "./Quotes";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";

const HomeIndex: FC = () => {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <Quotes />
        <Resume />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
    </>
  );
};

export default HomeIndex;

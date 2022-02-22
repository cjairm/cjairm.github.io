import React, { FC, useEffect } from "react";

import SectionBox from "../../components/SectionBox";
import Progressbar from "../../components/Progressbar";
import useVisibilityHook from "../../hooks/useVisibilityHook";

import { animateCSS } from "../../utils";
import aboutData from "./about.data";
import { capitalize } from "lodash";

const About: FC = () => {
  const { setElement, isVisible } = useVisibilityHook({
    threshold: 0.25,
    rootMargin: "-5px",
  });

  useEffect(() => {
    if (isVisible) {
      animateCSS(document.getElementById("about") as HTMLElement, "fadeInLeft");
    }
  }, [isVisible]);

  return (
    <div ref={setElement} id="about">
      {isVisible && (
        <SectionBox
          shadow={true}
          id="about-section"
          className="about-mf sect-pt4"
        >
          <div className="columns">
            <div className="column is-half">
              <div className="columns is-vcentered is-centered is-multiline is-mobile">
                <div className="column is-narrow">
                  <figure className="image">
                    <img src={aboutData.aboutImage} alt="" />
                  </figure>
                </div>
                <div className="column">
                  <div className="about-info">
                    <p>
                      <span className="title-s">Name: </span>{" "}
                      <span>{aboutData.name}</span>
                    </p>
                    <p>
                      <span className="title-s">Profile: </span>{" "}
                      <span>{aboutData.position}</span>
                    </p>
                    <p>
                      <span className="title-s">Email: </span>{" "}
                      <span>{aboutData.email}</span>
                    </p>
                    <p>
                      <span className="title-s">Phone: </span>{" "}
                      <span>{aboutData.phoneNumber}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="skill-mf">
                <p className="title-s">Main Languages</p>
                {Object.keys(aboutData.languages).map(
                  (language: string, i: number) => (
                    <Progressbar
                      key={i}
                      value={(aboutData as any).languages[language]}
                    >
                      {capitalize(language)}
                    </Progressbar>
                  )
                )}
              </div>
            </div>
            <div className="column is-half">
              <div className="about-me pt-4">
                <div className="title-box-2">
                  <h5 className="title-left">About me</h5>
                </div>
                <div className="content">
                  {aboutData.paragraphs.map((paragraph: string, i: number) => {
                    return <p key={i}>{paragraph}</p>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </SectionBox>
      )}
    </div>
  );
};

export default About;

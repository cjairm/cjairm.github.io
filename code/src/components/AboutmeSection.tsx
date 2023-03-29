import React from "react";

import Section from "../layout/Section";
import Progressbar from "./Progressbar";

import aboutMe from "../assets/about-me.jpg";
import appData from "../app.data";

const AboutmeSection: React.FunctionComponent = (): React.ReactElement => {
  return (
    <Section id="about_me">
      <div className="columns">
        {/* Personal info */}
        <div className="column is-half mt-4">
          <div className="columns">
            {/* Image */}
            <div className="column is-narrow has-text-centered-mobile">
              <figure className="image is-128x128">
                <img src={aboutMe} alt="about_me" />
              </figure>
            </div>
            {/* Info */}
            <div className="content column has-text-left">
              <p className="has-text-weight-bold">
                Preferred name:{" "}
                <span className="has-text-weight-normal">
                  {appData.personal.middleName}
                </span>
              </p>
              <p className="has-text-weight-bold">
                Background:{" "}
                <span className="has-text-weight-normal">
                  {appData.personal.background}
                </span>
              </p>
              <p className="has-text-weight-bold">
                Email:{" "}
                <span className="has-text-weight-normal">
                  {appData.personal.emails[0]}
                </span>
              </p>
              <p className="has-text-weight-bold">
                Phone:{" "}
                <span className="has-text-weight-normal">
                  {appData.personal.phone}
                </span>
              </p>
            </div>
          </div>
          {/*Programming*/}
          <div className="columns">
            <div className="column content">
              <h1 className="title has-text-centered has-text-white">
                Preferred Languages
              </h1>
            </div>
          </div>
          {Object.entries(appData.preferredProgrammingLanguages || {})?.map(
            (entry) => {
              const [language, percent] = entry;
              return (
                <Progressbar
                  key={language}
                  language={language}
                  percent={percent}
                />
              );
            }
          )}
        </div>
        {/* About me */}
        <div className="column is-half content">
          <h1 className="title has-text-centered has-text-white">About me</h1>
          {appData.personal.aboutMe?.map((paragraph: string, i: number) => {
            return <p key={i}>{paragraph}</p>;
          })}
        </div>
      </div>
    </Section>
  );
};

export default AboutmeSection;

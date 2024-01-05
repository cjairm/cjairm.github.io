import React from "react";

import Section from "../layout/Section";

import aboutMe from "../assets/about-me.jpg";
import appData from "../app.data";

import { getUrl } from "../utils/getUrl";

const AboutmeSection: React.FunctionComponent = (): React.ReactElement => {
  const url = getUrl();
  const backgroundTarget = url.searchParams.get("t") || "fullstack";
  return (
    <Section id="about_me">
      <div className="columns is-justify-content-center is-align-items-center">
        {/* Image */}
        <div className="column is-narrow has-text-centered-mobile">
          <figure className="image is-128x128">
            <img src={aboutMe} alt="about_me" />
          </figure>
        </div>

        {/* Info */}
        <div className="content">
          <p className="has-text-weight-bold">
            Preferred name:{" "}
            <span className="has-text-weight-normal">
              {appData.personal.middleName}
            </span>
          </p>
          <p className="has-text-weight-bold">
            Bachelor's degree:{" "}
            <span className="has-text-weight-normal">
              {appData.personal.bachelors}
            </span>
          </p>
          <p className="has-text-weight-bold">
            Master's degree:{" "}
            <span className="has-text-weight-normal">
              {appData.personal.masters}
            </span>
          </p>
          <p className="has-text-weight-bold">
            Primary email:{" "}
            <span className="has-text-weight-normal">
              {appData.personal.emails[0]}
            </span>
          </p>
        </div>
      </div>

      <div className="columns">
        {/* About me */}
        <div className="column content">
          <h1 className="title has-text-centered has-text-white">Background</h1>

          {appData.personal.background?.[backgroundTarget]?.map(
            (paragraph: string, i: number) => {
              return (
                <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
              );
            },
          )}
        </div>
      </div>
    </Section>
  );
};

export default AboutmeSection;

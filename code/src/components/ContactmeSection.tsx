import React from "react";

import Section from "../layout/Section";
import appData from "../app.data";

const ContactmeSection: React.FunctionComponent = (): React.ReactElement => {
  return (
    <Section id="contact_me">
      <div className="columns">
        <div className="column content">
          <h1 className="title has-text-centered has-text-white">
            Drop me a line
          </h1>
        </div>
      </div>
      <div className="columns">
        <div className="column is-4 content">
          <div className="is-flex mb-4 is-justify-content-center">
            <span className="icon is-large">
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <div>
              <h4 className="has-text-white-ter mb-1">Location:</h4>
              <p>{appData.personal.currentLocation}</p>
            </div>
          </div>
        </div>
        <div className="column is-4 content">
          <div className="is-flex mb-4 is-justify-content-center">
            <span className="icon is-large">
              <i className="fa-solid fa-envelope"></i>
            </span>
            <div>
              <h4 className="has-text-white-ter mb-1">Primary email:</h4>
              <p>
                {appData.personal.emails[0]}
              </p>
            </div>
          </div>
        </div>
        <div className="column is-4 content">
          <div className="is-flex mb-4 is-justify-content-center">
            <span className="icon is-large">
              <i className="fa-solid fa-envelope"></i>
            </span>
            <div>
              <h4 className="has-text-white-ter mb-1">Work email:</h4>
              <p>
                {appData.personal.emails[2]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactmeSection;

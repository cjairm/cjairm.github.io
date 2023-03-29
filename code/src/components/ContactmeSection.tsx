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
      <div className="columns is-vcentered">
        <div className="column is-3 content">
          <div className="is-flex mb-4">
            <span className="icon is-large">
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <div>
              <h4 className="has-text-white-ter mb-1">Location:</h4>
              <p>{appData.personal.currentLocation}</p>
            </div>
          </div>

          <div className="is-flex mb-4">
            <span className="icon is-large">
              <i className="fa-solid fa-phone"></i>
            </span>
            <div>
              <h4 className="has-text-white-ter mb-1">Phone:</h4>
              <p>{appData.personal.phone}</p>
            </div>
          </div>

          <div className="is-flex mb-4">
            <span className="icon is-large">
              <i className="fa-solid fa-envelope"></i>
            </span>
            <div>
              <h4 className="has-text-white-ter mb-1">Email:</h4>
              <p style={{ wordBreak: "break-all" }}>
                {appData.personal.emails[0]}
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <label className="label has-text-white-ter">Full Name</label>
                <p className="control is-expanded has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="Your name"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <label className="label has-text-white-ter">Email</label>
                <p className="control is-expanded has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="email"
                    placeholder="Your email"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label has-text-white-ter">Subject</label>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="e.g. Software engineer position for you!"
                />
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label has-text-white-ter">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Explain how I can help you"
              ></textarea>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button is-primary">Send message</button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactmeSection;

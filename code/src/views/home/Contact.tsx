import React, { FC } from "react";

import SectionBox from "../../components/SectionBox";
import SectionTitle from "../../components/SectionTitle";
import { LocationIcon, EmailIcon, PhoneIcon } from "../../components/Icons";
import contactData from "./contact.data";

const Contact: FC = () => {
  return (
    <SectionBox
      shadow={false}
      id="contact"
      className="portfolio-mf sect-pt4 route"
    >
      <SectionTitle>Drop me a line</SectionTitle>

      <div className="columns">
        <div className="column is-4">
          <div className="info">
            <div className="address">
              <i>
                <LocationIcon
                  style={{
                    margin: "0.62rem",
                    width: "1.5rem",
                    height: "1.5rem",
                    fill: "currentColor",
                  }}
                />
              </i>
              <h4>Location:</h4>
              <p>{contactData.location}</p>
            </div>

            <div className="email">
              <i>
                <EmailIcon
                  style={{
                    margin: "0.62rem",
                    width: "1.5rem",
                    height: "1.5rem",
                    fill: "currentColor",
                  }}
                />
              </i>
              <h4>Email:</h4>
              <p>{contactData.email}</p>
            </div>

            <div className="phone">
              <i>
                <PhoneIcon
                  style={{
                    margin: "0.62rem",
                    width: "1.5rem",
                    height: "1.5rem",
                    fill: "currentColor",
                  }}
                />
              </i>
              <h4>Call:</h4>
              <p>{contactData.phoneNumber}</p>
            </div>
          </div>
        </div>

        <div className="column is-8">
          <form
            action="forms/contact.php"
            method="post"
            role="form"
            className="php-email-form"
          >
            <div className="columns">
              <div className="column is-6">
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-primary"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="column is-6">
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-primary"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group mt-3">
              <div className="field">
                <div className="control">
                  <input
                    className="input is-primary"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group mt-3">
              <div className="field">
                <div className="control">
                  <textarea
                    className="textarea"
                    name="message"
                    rows={5}
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="has-text-centered">
              <button className="button is-info is-rounded" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </SectionBox>
  );
};

export default Contact;

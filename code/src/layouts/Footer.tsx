import React, { FC } from "react";
import moment from "moment";

import { LinkedinIcon, GithubIcon } from "../components/Icons";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <h3>Carlos Mendez</h3>
        <div className="social-links">
          <a href="/">
            <LinkedinIcon
              style={{
                margin: "0.62rem",
                width: "1.5rem",
                height: "1.5rem",
              }}
            />
          </a>
          <a href="/">
            <GithubIcon
              style={{
                margin: "0.62rem",
                width: "1.5rem",
                height: "1.5rem",
              }}
            />
          </a>
        </div>
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Carlos Mendez inc</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by Carlos Mendez | 1991-{moment().format("YYYY")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

import appData from "../app.data";

const Footer: React.FunctionComponent = (): React.ReactElement => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <h3>Carlos Mendez</h3>
        <div className="social-links">
          <a
            target="_blank"
            rel="noreferrer"
            href={appData.personal.links.github}
          >
            <span className="icon">
              <i className="fa-brands fa-github"></i>
            </span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={appData.personal.links.linkedin}
          >
            <span className="icon">
              <i className="fa-brands fa-linkedin"></i>
            </span>
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
          Designed by Carlos Mendez | 1991-{new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

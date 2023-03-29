import React from "react";

import navbarLogo from "../assets/navbar-logo.png";

const IS_ACTIVE = "is-active";
const NAVBAR_MENU_CONTAINER_ID = "navbar-menu";
const NAVBAR_BURGER_CONTAINER_ID = "navbar-burger";

const Navbar: React.FunctionComponent = (): React.ReactElement => {
  const toggleIsActive = (elementId?: string) => {
    document
      .getElementById(NAVBAR_BURGER_CONTAINER_ID)
      ?.classList.toggle(IS_ACTIVE);
    document
      .getElementById(NAVBAR_MENU_CONTAINER_ID)
      ?.classList.toggle(IS_ACTIVE);

    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <nav
      className="navbar is-primary is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/#">
          <img src={navbarLogo} width="112" height="28" alt="logo" />
        </a>
        <a
          id={NAVBAR_BURGER_CONTAINER_ID}
          href="#!"
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target={NAVBAR_MENU_CONTAINER_ID}
          onClick={() => toggleIsActive()}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id={NAVBAR_MENU_CONTAINER_ID} className="navbar-menu">
        <div className="navbar-end">
          <a
            href="/#!"
            className="navbar-item"
            onClick={() => toggleIsActive("about_me")}
          >
            About me
          </a>
          <a
            href="/#!"
            className="navbar-item"
            onClick={() => toggleIsActive("resume")}
          >
            Resume
          </a>
          <a
            href="/#!"
            className="navbar-item"
            onClick={() => toggleIsActive("portfolio")}
          >
            Portfolio
          </a>
          <a
            href="/#!"
            className="navbar-item"
            onClick={() => toggleIsActive("contact_me")}
          >
            Contact me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

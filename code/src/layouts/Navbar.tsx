import React, { FC, useRef } from "react";

import { toogleMenuHandler, goToViewAndCloseMenu } from "./navbar.utils";

import navbarLogo from "../assets/navbar-logo.png";

const Navbar: FC = () => {
  const divMenuElement = useRef<HTMLDivElement>({} as HTMLDivElement);
  const buttonMenuElement = useRef<HTMLButtonElement>({} as HTMLButtonElement);

  return (
    <nav
      className="navbar is-fixed-top is-primary px-2"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/#" onClick={() =>
              goToViewAndCloseMenu({
                buttonTogglerElement: buttonMenuElement.current,
                menuWrapperElement: divMenuElement.current,
                viewId: "hero",
              })
            }>
          <img alt="logo" src={navbarLogo} width="112" height="28" />
        </a>

        <button
          ref={buttonMenuElement}
          onClick={() =>
            toogleMenuHandler({
              buttonTogglerElement: buttonMenuElement.current,
              menuWrapperElement: divMenuElement.current,
            })
          }
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-cjairm"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbar" className="navbar-menu" ref={divMenuElement}>
        <div className="navbar-end">
          <a
            href="/#about"
            className="navbar-item"
            onClick={() =>
              goToViewAndCloseMenu({
                buttonTogglerElement: buttonMenuElement.current,
                menuWrapperElement: divMenuElement.current,
                viewId: "about",
              })
            }
          >
            About me
          </a>
          <a
            href="/#resume"
            className="navbar-item"
            onClick={() =>
              goToViewAndCloseMenu({
                buttonTogglerElement: buttonMenuElement.current,
                menuWrapperElement: divMenuElement.current,
                viewId: "resume",
              })
            }
          >
            Projects
          </a>
          <a
            href="/#portfolio"
            className="navbar-item"
            onClick={() =>
              goToViewAndCloseMenu({
                buttonTogglerElement: buttonMenuElement.current,
                menuWrapperElement: divMenuElement.current,
                viewId: "portfolio",
              })
            }
          >
            Portfolio
          </a>
          <a
            href="/#contact"
            className="navbar-item"
            onClick={() =>
              goToViewAndCloseMenu({
                buttonTogglerElement: buttonMenuElement.current,
                menuWrapperElement: divMenuElement.current,
                viewId: "contact",
              })
            }
          >
            Contact me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

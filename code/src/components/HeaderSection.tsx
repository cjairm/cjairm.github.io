import React from "react";
import Typed from "typed.js";

import appData from "../app.data";

const HeaderSection: React.FunctionComponent = (): React.ReactElement => {
  // Create reference to store the DOM element containing the animation
  const spanTyped = React.useRef<HTMLSpanElement | null>(null);

  React.useEffect(() => {
    const options = {
      strings: appData.header.quotes,
      loop: true,
      typeSpeed: 50,
      backSpeed: 15,
      backDelay: 1000,
    };

    // elRef refers to the <span> rendered below
    const typed = new Typed(spanTyped.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero is-link is-fullheight-with-navbar is-relative header-background">
      <div className="header-overlay" />
      <div className="header-content">
        <h1
          className="is-size-1 has-text-weight-bold"
          dangerouslySetInnerHTML={{ __html: appData.header.greeting }}
        />
        <h3 className="is-size-3">
          <span ref={spanTyped}></span>
        </h3>
      </div>
    </section>
  );
};

export default HeaderSection;

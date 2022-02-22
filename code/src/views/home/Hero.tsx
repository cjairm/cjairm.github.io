import React, { FC, useEffect, useRef } from "react";
import Typed from "typed.js";

import heroData from "./hero.data";

const Hero: FC = () => {
  // Create reference to store the DOM element containing the animation
  const spanTypedElement = useRef<HTMLSpanElement>({} as HTMLSpanElement);

  useEffect(() => {
    const options = {
      strings: (heroData as any).quotes,
      loop: true,
      typeSpeed: 50,
      backSpeed: 15,
      backDelay: 1000,
    };

    // elRef refers to the <span> rendered below
    const typed = new Typed(spanTypedElement.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="hero"
      className="hero bg-image"
      style={{ backgroundImage: `url(${heroData.heroImage})` }}
    >
      <div className="overlay-intro"></div>
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="column">
            <h1 className="hero-title mb-4">
              Hey there &#128075; I'm {heroData.name}
            </h1>
            <p className="hero-subtitle">
              <span ref={spanTypedElement}></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

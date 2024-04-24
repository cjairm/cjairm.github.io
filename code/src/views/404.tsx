import React from "react";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";

const NotFound: React.FunctionComponent = (): React.ReactElement => {
  return (
    <>
      <Navbar />
      <section className="section-default">
        <div className="box has-background-black-ter has-text-white-ter">
          <div className="columns">
            <div className="column content">
              <h1 className="has-text-centered has-text-white">404</h1>
            </div>
          </div>
          <div className="columns">
            <div className="column content has-text-centered">
              <Link to="/" className="has-text-white">
                Go to the home page
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;

import React from "react";
import { Link } from "react-router-dom";

import appData from "../app.data";
import { scrollTop } from "../utils/scrollTop";

const BackgroundSection: React.FunctionComponent = (): React.ReactElement => {
  const blogSlugs = Object.keys(appData.blog);
  return (
    <section className="section-default">
      {/*Inversed section*/}
      <div className="box has-background-white-ter has-text-black-ter">
        <div className="columns">
          <div className="column content">
            <h1 className="title has-text-centered">About me</h1>
          </div>
        </div>
        <div className="columns">
          <div className="column content">
            {appData.personal.aboutMe?.map((paragraph: string, i: number) => {
              return <p key={i}>{paragraph}</p>;
            })}
          </div>
        </div>
        <div className="columns">
          <div className="column content">
            <h3>I have a blog!</h3>
            <p>Take a look at the articles I have written.</p>
            <ul>
              {blogSlugs.map((slug) => {
                return (
                  <li key={slug}>
                    <Link to={`/blog/${slug}`} onClick={scrollTop}>
                      <>
                        {appData.blog[slug as keyof typeof appData.blog].title}
                      </>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;

import React from "react";

import appData from "../app.data";

const BackgroundSection: React.FunctionComponent = (): React.ReactElement => {
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
      </div>
    </section>
  );
};

export default BackgroundSection;

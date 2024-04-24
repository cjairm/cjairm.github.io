import React from "react";

import Progressbar from "./Progressbar";

import appData from "../app.data";
import { getUrl } from "../utils/getUrl";

const SkillsSection: React.FunctionComponent = (): React.ReactElement => {
  const url = getUrl();
  const backgroundTarget = url.searchParams.get("t") || "fullstack";
  return (
    <section className="section-default">
      {/*Inversed section*/}
      <div className="box has-background-white-ter has-text-black-ter">
        <div className="columns">
          <div className="column content">
            <h1 className="title has-text-centered">Other skills</h1>
          </div>
        </div>
        {(backgroundTarget === "backend"
          ? appData.backendSkills
          : appData.fullstackSkills
        )?.map((languagesByName, i) => (
          <div key={i} className="columns">
            {Object.keys(languagesByName || {}).map((languageName, i) => (
              <div key={i} className="column is-one-quarter">
                <Progressbar
                  language={languageName as any}
                  percent={(languagesByName as any)[languageName as any]}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

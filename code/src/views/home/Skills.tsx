import React, { FC, useEffect } from "react";
import { chunk } from "lodash";

import SectionBox from "../../components/SectionBox";
import Progressbar from "../../components/Progressbar";
import SectionTitle from "../../components/SectionTitle";
import useVisibilityHook from "../../hooks/useVisibilityHook";

import { animateCSS } from "../../utils";
import skillsData from "./skills.data";

const Skills: FC = () => {
  const { setElement, isVisible } = useVisibilityHook({
    threshold: 0.25,
    rootMargin: "-5px",
  });

  useEffect(() => {
    if (isVisible) {
      animateCSS(
        document.getElementById("skills") as HTMLElement,
        "fadeInLeft"
      );
    }
  }, [isVisible]);

  const skillChunkNames = chunk(Object.keys(skillsData.items), 3);

  return (
    <div ref={setElement} id="skills">
      {isVisible && (
        <SectionBox shadow={true} id="skills-section">
          <SectionTitle>Skills</SectionTitle>

          <div className="columns">
            {skillChunkNames.map((skillNames: string[], i: number) => {
              return (
                <div key={i} className="column">
                  <div className="skill-mf">
                    {skillNames.map((skill: string, ii: number) => {
                      return (
                        <Progressbar
                          key={ii}
                          value={(skillsData as any).items[skill]}
                        >
                          {skill}
                        </Progressbar>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </SectionBox>
      )}
    </div>
  );
};

export default Skills;

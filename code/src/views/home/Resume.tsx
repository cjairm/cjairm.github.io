import React, { FC, useEffect } from "react";

import SectionBox from "../../components/SectionBox";
import SectionTitle from "../../components/SectionTitle";
import ResumeItem from "../../components/ResumeItem";
import useVisibilityHook from "../../hooks/useVisibilityHook";
import { animateCSS } from "../../utils";
import resumeData from "./resume.data";

const Resume: FC = () => {
  const { setElement, isVisible } = useVisibilityHook({
    threshold: 0.25,
    rootMargin: "-5px",
  });

  useEffect(() => {
    if (isVisible) {
      animateCSS(
        document.getElementById("resume") as HTMLElement,
        "fadeInRight"
      );
    }
  }, [isVisible]);

  const currentPosition = resumeData.experience.find(
    (item: typeof resumeData["experience"][number]) =>
      (item as any)?.type === "current"
  ) as typeof resumeData["experience"][number];

  const schools = resumeData.school as typeof resumeData["school"];

  const experience = resumeData.experience.filter(
    (item: typeof resumeData["experience"][number]) => !(item as any)?.type
  ) as any;

  return (
    <div ref={setElement} id="resume">
      {isVisible && (
        <SectionBox shadow={true} id="resume-section" className="resume">
          <SectionTitle
            description={
              <>
                {resumeData.description.map((paragraph: string, i: number) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </>
            }
          >
            Resume
          </SectionTitle>

          <div className="columns is-gapless">
            <div className="column is-half">
              <h3 className="resume-title">Current</h3>
              <ResumeItem
                name={currentPosition.companyName}
                place={currentPosition.position}
                bullets={currentPosition.bullets as any}
                extra={(currentPosition as any).extra}
              />

              <h3 className="resume-title">Education</h3>
              {schools.map(
                (item: typeof resumeData["school"][number], i: number) => (
                  <ResumeItem
                    key={i}
                    name={item.degreeName}
                    place={item.schoolName}
                    yearFrom={item.startedAt}
                    yearTo={item.finishedAt}
                    bullets={item.bullets as any}
                    extra={(item as any)?.extra}
                  />
                )
              )}
            </div>

            <div className="column is-half">
              <h3 className="resume-title">Professional Experience</h3>
              {experience.map((company: any, i: number) => (
                <ResumeItem
                  key={i}
                  name={company.companyName}
                  place={company.position}
                  yearFrom={company.startedAt}
                  yearTo={company.finishedAt}
                  bullets={company.bullets as any}
                  extra={(company as any)?.extra}
                />
              ))}
            </div>
          </div>
        </SectionBox>
      )}
    </div>
  );
};

export default Resume;

import React from "react";

import Section from "../layout/Section";
import appData from "../app.data";

const ExperienceItem: React.FunctionComponent<any> = (
  props
): React.ReactElement => {
  const companyName = props.company?.name;
  const joinedAt = props.position?.startedAt;
  const leftAt = props.position?.endedAt;
  const positionName = props.position?.name;
  const locationName = props.location?.name;
  const locationType = props.location?.type;
  const companyAddress = props.company?.address;
  const workEmail = props.workEmail;
  const companyAdditionalInfo = props.company?.additionalInfo;

  return (
    <div className="resume">
      <div className="is-flex is-align-items-center">
        <h4 className="has-text-white my-1">{companyName}</h4>
        {joinedAt && (
          <span className="tag has-text-black-ter has-background-white-ter has-text-weight-bold ml-2">
            {joinedAt}
            {leftAt ? `- ${leftAt}` : ""}
          </span>
        )}
      </div>
      {companyAdditionalInfo && (
        <p className="has-text-white mb-2">({companyAdditionalInfo})</p>
      )}
      {positionName && (
        <em className="has-text-white">
          {positionName}
          {locationName && <span> - {locationName}</span>}
          {locationType && <span> ({locationType})</span>}
        </em>
      )}
      <ul>
        {(props.description || []).map((paragraph: string, i: number) => {
          return (
            <li key={i} dangerouslySetInnerHTML={{ __html: paragraph }}></li>
          );
        })}
        {companyAddress && (
          <li>
            <span className="has-text-weight-bold">Address</span>:{" "}
            {companyAddress}
          </li>
        )}
        {workEmail && (
          <li>
            <span className="has-text-weight-bold">Email</span>: {workEmail}
          </li>
        )}
      </ul>
    </div>
  );
};

const SchoolItem: React.FunctionComponent<any> = (
  props
): React.ReactElement => {
  const degreeName = props.degreeName;
  const schoolName = props.schoolName;
  const joinedAt = props.startedAt;
  const leftAt = props.endedAt;

  return (
    <div className="resume">
      <div className="is-flex is-align-items-center">
        <h4 className="has-text-white my-1">{degreeName}</h4>
        {joinedAt && (
          <span className="tag has-text-black-ter has-background-white-ter has-text-weight-bold ml-2">
            {joinedAt}
            {leftAt ? `- ${leftAt}` : ""}
          </span>
        )}
      </div>
      {schoolName && <em className="has-text-white">{schoolName}</em>}
      <ul>
        {(props.description || []).map((paragraph: string, i: number) => {
          return (
            <li
              key={i}
              className="has-text-white"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

const ResumeSection: React.FunctionComponent = (): React.ReactElement => {
  return (
    <Section id="resume">
      <div className="columns">
        <div className="column content">
          <h1 className="title has-text-centered has-text-white">Resume</h1>
          {appData.experience.introduction?.map(
            (paragraph: string, i: number) => {
              return (
                <p key={i} className="has-text-centered">
                  {paragraph}
                </p>
              );
            }
          )}
        </div>
      </div>
      <div className="columns">
        <div className="column is-half content">
          <h1 className="has-text-centered has-text-white">Current</h1>
          <ExperienceItem {...appData.experience.current} />
          <h1 className="has-text-centered has-text-white">Education</h1>
          {appData.experience.school?.map((school, i) => (
            <div key={i}>
              <SchoolItem {...school} />
              <br />
            </div>
          ))}
        </div>
        <div className="column is-half content">
          <h1 className="has-text-centered has-text-white">Experience</h1>
          {appData.experience.other?.map((job, i) => (
            <div key={i}>
              <ExperienceItem {...job} />
              <br />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ResumeSection;

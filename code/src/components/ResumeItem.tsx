import React, { FC } from "react";

interface ResumeItemComponentProps {
  name: string;
  place: string;
  bullets: string[];
  yearFrom?: number;
  yearTo?: number;
  extra?: string[];
}

const ResumeItem: FC<ResumeItemComponentProps> = (props) => {
  const yearsFrame = props.yearFrom && props.yearTo;
  return (
    <>
      <div className="resume-item pb-0">
        <h4>{props.name}</h4>
        {yearsFrame && (
          <h5>
            {props.yearFrom} - {props.yearTo}
          </h5>
        )}
        <p>
          <em>{props.place}</em>
        </p>
        <br />
        <ul>
          {props.bullets.map((bullet: string, index: number) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: `&#8226; ${bullet}` }}
            />
          ))}
          {props.extra && (
            <>
              <br />
              {props.extra.map((extra: string, index: number) => (
                <li key={index}>{extra}</li>
              ))}
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default ResumeItem;

import React from "react";

const Progressbar: React.FunctionComponent<{
  language: string;
  percent: number;
}> = (props): React.ReactElement => {
  return (
    <div className="columns">
      <div className="column">
        <p>
          <span className="is-capitalized">{props.language}</span>:{" "}
          {props.percent}%
        </p>
        <progress
          className="progress is-primary"
          value={props.percent}
          max="100"
        >
          {props.percent}%
        </progress>
      </div>
    </div>
  );
};

export default Progressbar;

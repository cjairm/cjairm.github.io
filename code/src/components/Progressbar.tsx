import React, { FC } from "react";

interface ProgressbarComponentProps {
  children: string;
  value: number;
  valueMin?: number;
  valueMax?: number;
}

const Progressbar: FC<ProgressbarComponentProps> = (props) => {
  const valueMin = props.valueMin ?? 0;
  const valueMax = props.valueMax ?? 100;
  return (
    <>
      <span>{props.children}</span>{" "}
      <span className="is-pulled-right">{props.value}%</span>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${props.value}%` }}
          aria-valuenow={props.value}
          aria-valuemin={valueMin}
          aria-valuemax={valueMax}
        ></div>
      </div>
    </>
  );
};

export default Progressbar;

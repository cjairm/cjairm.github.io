import React, { FC } from "react";

interface QuoteComponentProps {
  children: string;
  author: string;
}

const Quote: FC<QuoteComponentProps> = (props) => {
  return (
    <div className="counter-box pt-4">
      <div className="content">
        <h3 className="title is-3 is-italic" style={{ color: "#fff" }}>
          "{props.children}"
        </h3>
        <h4 className="subtitle is-4 pb-5" style={{ color: "#fff" }}>
          — {props.author}
        </h4>
      </div>
    </div>
  );
};

export default Quote;

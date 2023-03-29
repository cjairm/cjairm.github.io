import React from "react";

const QuoteSection: React.FunctionComponent<{
  quote: string;
  author: string;
}> = (props): React.ReactElement => {
  return (
    <section className="section quote-background">
      <div className="quote-overlay" />
      <div className="content p-3">
        <h2 className="has-text-white has-text-centered is-relative is-italic">
          "{props.quote}"
        </h2>
        <p className="has-text-white has-text-centered is-relative is-size-4">
          - {props.author}
        </p>
      </div>
    </section>
  );
};

export default QuoteSection;

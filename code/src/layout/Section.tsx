import React from "react";

const Section: React.FunctionComponent<{
  id: string;
  children: React.ReactNode;
}> = (props): React.ReactElement => {
  return (
    <section className="section-default" id={props.id}>
      <div className="box has-background-black-ter has-text-white-ter">
        {props.children}
      </div>
    </section>
  );
};

export default Section;

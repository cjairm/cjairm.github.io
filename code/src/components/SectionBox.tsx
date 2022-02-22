import React, { FC, ReactChild, ReactNode } from "react";

interface SectionBoxComponentProps {
  children: ReactChild | ReactNode;
  id: string;
  className?: string;
  shadow: boolean;
}

const SectionBox: FC<SectionBoxComponentProps> = (props) => {
  const shadow = props.shadow ? " box-shadow-full" : "";
  return (
    <section id={props.id} className={props.className ? props.className : ""}>
      <div className="columns is-centered">
        <div className={`column is-four-fifths${shadow}`}>{props.children}</div>
      </div>
    </section>
  );
};

export default SectionBox;

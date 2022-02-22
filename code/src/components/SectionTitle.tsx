import React, { FC, ReactChild, ReactNode } from "react";

interface SectionTitleComponentProps {
  children: string;
  description?: ReactNode | ReactChild;
}

const SectionTitle: FC<SectionTitleComponentProps> = (props) => {
  return (
    <div className="section-title">
      <div className="title-box-2">
        <h5 className="title-left">{props.children}</h5>
      </div>
      {props.description}
    </div>
  );
};

export default SectionTitle;

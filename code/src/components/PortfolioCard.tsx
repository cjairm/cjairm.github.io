import React, { FC } from "react";
import { Moment } from "moment";

import { PlusIcon } from "./Icons";

interface PortfolioCardComponentProps {
  imageSource: React.ImgHTMLAttributes<HTMLImageElement>["src"];
  title: string;
  hashtags: string[];
  date: Moment;
  link: string;
}

const PortfolioCard: FC<PortfolioCardComponentProps> = (props) => {
  return (
    <div className="column is-one-quarter">
      <div className="card">
        <div className="card-image">
          <figure className="image work-img work-box">
            <img
              src={props.imageSource}
              alt={props.title}
              className="img-fluid"
            />
          </figure>
        </div>
        <div className="card-content is-flex is-justify-content-space-between">
          <div className="">
            <p className="is-size-5">{props.title}</p>
            {props.hashtags.map((hashtag: string, index: number) => (
              <a href="/#" key={index}>
                {hashtag}{" "}
              </a>
            ))}
            {props.date.isValid() && (
              <>
                <br />
                <time>{props.date.format("D MMM[.] YYYY")}</time>
              </>
            )}
          </div>
          <div className="icon-wrapper">
            <a href={props.link} target="_blank" rel="noreferrer">
              <PlusIcon
                style={{
                  margin: "0.62rem",
                  width: "1.5rem",
                  height: "1.5rem",
                  fill: "currentColor",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;

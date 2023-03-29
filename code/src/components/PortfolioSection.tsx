import React from "react";

import Section from "../layout/Section";
import appData from "../app.data";

const Card: React.FunctionComponent<
  typeof appData["portfolio"][number][number]
> = (props): React.ReactElement => {
  return (
    <div className="card is-flex is-flex-direction-column">
      {props.imageSource && (
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.imageSource} alt="Placeholder" />
          </figure>
        </div>
      )}
      <div className="card-content is-flex is-flex-grow-1">
        <div className="content">
          {props.description ? (
            <>{props.description}</>
          ) : props.title ? (
            props.title
          ) : (
            <></>
          )}
          {props.hashtags && props.hashtags.length > 0 && <br />}
          {props.hashtags?.map((hashtag, i) => (
            <a key={i} href="/#!">
              {hashtag}{" "}
            </a>
          ))}
          <br />
          <time>{props.date}</time>
        </div>
      </div>
      <footer className="card-footer">
        <a
          target="_blank"
          rel="noreferrer"
          href={props.link}
          className="card-footer-item"
        >
          Source code
        </a>
      </footer>
    </div>
  );
};

const PortfolioSection: React.FunctionComponent = (): React.ReactElement => {
  return (
    <Section id="portfolio">
      <div className="columns">
        <div className="column content">
          <h1 className="title has-text-centered has-text-white">Portfolio</h1>
        </div>
      </div>
      {appData.portfolio?.map((column, i) => (
        <div key={i} className="columns">
          {column.map((project, i) => (
            <div key={i} className="column is-one-third is-flex">
              <Card {...project} />
            </div>
          ))}
        </div>
      ))}
    </Section>
  );
};

export default PortfolioSection;

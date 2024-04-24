import React from "react";

import appData from "../app.data";

const PortfolioSection: React.FunctionComponent = (): React.ReactElement => {
  return (
    <section className="section-default" id="portfolio">
      <div className="box has-background-black-ter has-text-white-ter">
        <div className="columns">
          <div className="column content">
            <h1 className="title has-text-centered has-text-white">
              Portfolio
            </h1>
          </div>
        </div>
        <div className="columns is-multiline">
          {appData.portfolio?.map(
            (
              item: Record<string, string[] | string | undefined>,
              i: number,
            ) => {
              return (
                <div
                  className={`column${item.size ? " " + item.size : ""}`}
                  key={i}
                >
                  <div className="box content">
                    <h4>{item.title}</h4>
                    {(item.description as string[])?.map(
                      (paragraph: string, j: number) => (
                        <p
                          key={j}
                          dangerouslySetInnerHTML={{ __html: paragraph }}
                        ></p>
                      ),
                    )}
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

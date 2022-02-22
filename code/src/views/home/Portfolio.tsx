import React, { FC } from "react";
import moment from "moment";

import SectionBox from "../../components/SectionBox";
import SectionTitle from "../../components/SectionTitle";
import PortfolioCard from "../../components/PortfolioCard";
import portfolioData from "./portfolio.data";

const Portfolio: FC = () => {
  const portfolioCards = (portfolioData.items as any).sort((a: any, b: any) => {
    return moment(a.date, "MM/DD/YYYY").isBefore(moment(b.date, "MM/DD/YYYY"))
      ? 1
      : -1;
  });

  return (
    <SectionBox
      shadow={false}
      id="portfolio"
      className="portfolio-mf sect-pt4 route"
    >
      <SectionTitle>Portfolio</SectionTitle>
      <div className="columns is-multiline">
        {portfolioCards.map(
          (card: typeof portfolioCards["items"][number], i: number) => (
            <PortfolioCard
              key={i}
              imageSource={card.imageSource}
              title={card.title}
              hashtags={card.hashtags}
              date={moment(card.date)}
              link={card.link}
            />
          )
        )}
      </div>
    </SectionBox>
  );
};

export default Portfolio;

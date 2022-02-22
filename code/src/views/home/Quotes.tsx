import React, { FC } from "react";

import Quote from "../../components/Quote";
import quotesData from "./quotes.data";

const Quotes: FC = () => {
  return (
    <section className="pt-0">
      <div
        className="paralax-mf bg-image"
        style={{ backgroundImage: `url(${quotesData.planeImage})` }}
      >
        <div className="overlay-mf columns is-centered is-gapless is-vcentered">
          {quotesData.quotes.map(
            (quote: typeof quotesData["quotes"][number], i: number) => (
              <div key={i} className="column is-half">
                <Quote author={quote.author}>{quote.text}</Quote>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Quotes;

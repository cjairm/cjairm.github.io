import planeImage from "../../assets/plane-bg.png";

const data = {
  planeImage,
  quotes: [
    {
      author: "Bruce Lee",
      text: "Research your own experience. Absorb what is useful. Reject what is useless. Add what is essentially your own",
    },
    {
      author: "Unknown",
      text: "There is no victory without sacrifice",
    },
  ],
} as const;

export default data;

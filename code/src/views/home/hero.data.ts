import appData from "../../app.data";
import heroImage from "../../assets/hero-bg.jpg";

const data = {
  name: appData.firstName,
  heroImage,
  quotes: [
    "I want to be a person that <i>inspires</i> others",
    "I want to be a <i>role model</i> for those who think that anything is impossible",
    "I want to be an important person that is <i>respectful</i>, <i>fair</i>, and <i>truthful</i>",
  ],
} as const;

export default data;

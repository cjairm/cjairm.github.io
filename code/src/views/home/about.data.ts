import appData from "../../app.data";
import aboutMeImage from "../../assets/aboutme.jpg";

const data = {
  name: `${appData.firstName} ${appData.lastName}`,
  aboutImage: aboutMeImage,
  position: appData.currentPosition,
  email: appData.email,
  phoneNumber: appData.phone,
  languages: {
    typescript: 80,
    python: 55,
  },
  paragraphs: [
    `
    I'm a person with a lot of dreams. I learn on my own.
    I love to learn new things, and I'm always
    updated on my work field. I'm an entrepreneur, and I've
    created two companies where I'm helping other people, such
    as, developers and mexican women by giving them a platform
    where they can sell products.
    `,
    `
    I speak two languages (English and Spanish). I'd love learn
    more languages. I enjoy traveling. I love to eat
    every single regional food everywhere I go, and I give a
    smile to everyone.
    `,
    `
    Did you ask if I have a superpower? Yes,
    I'm Mexican. To those that told me because I'm Mexican I
    cannot shine, that the success was not available in my
    region (they may be partially right), well... I had the
    opotunnity to born in a land full of potholes, challenges
    and reasons to give up. A country that every day teach us
    how to handle disappointment and frustration. A country that
    make us live in a constant necesity to reinvent ourselves
    (not for pleasure but for survival).
    `,
    `
    We don't need contacts, or money.
    WE DON'T NEED THE EASY WAY. It's true that
    we don't have trustworthy institutions or accessible
    eduation, not even tranquility in the streets (in Mexico).
    But what I DO have are balls, and desire, and ambition, and
    creativity, and pride, and an enviable resilience to defeat
    any chanllenges on my way.
    `,
    `
    Now, you need a meteorite to stop me. I'm hoping to do the
    things right to become an inspiration for the 120 million
    (population in Mexico) of folks that still don't believe
    that it can be done. I want to became in another reason to
    never give up, another role model that inspires everyone to
    continue bringing down walls.
    `,
    `Let's make it happen!`,
  ],
} as const;

export default data;

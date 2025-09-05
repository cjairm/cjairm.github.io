export interface HeroData {
  name: string;
  title: string;
  credential: string;
  ctaText: string;
  ctaLink: string;
  profileImage: string;
}

export const heroData: HeroData = {
  name: "James Anderson",
  title: "Senior Software Engineer leading high-performance teams",
  credential:
    "10+ years building scalable applications for Fortune 500 companies",
  ctaText: "View Work",
  ctaLink: "work",
  profileImage: "/src/assets/me.jpg",
};


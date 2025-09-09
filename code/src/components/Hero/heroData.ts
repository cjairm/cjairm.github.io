import meImg from "@/assets/me.jpg";

export interface HeroData {
  name: string;
  title: string;
  credential: string;
  ctaText: string;
  ctaLink: string;
  profileImage: string;
}

export const heroData: HeroData = {
  name: "Jair Méndez",
  title: "Engineer Driving Scalable & Innovative Solutions",
  credential:
    "Experienced in architecting and delivering systems that empower teams and elevate user experiences",
  ctaText: "View Experience",
  ctaLink: "experience",
  profileImage: meImg,
};

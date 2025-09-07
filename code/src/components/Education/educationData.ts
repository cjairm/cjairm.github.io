export interface EducationItem {
  id: string;
  institution: string;
  institutionLogo?: string;
  degree: string;
  field: string;
  location: string;
  startDate: string; // Format: "YYYY"
  endDate: string;
  description?: string;
  relevantCourses?: string[];
  achievements?: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "edu-masters",
    institution: "Universidad Autónoma de Guadalajara",
    institutionLogo: "https://www.uag.mx/img/logo90.svg?ui=s",
    degree: "Master's Degree",
    field: "Information Technology and Communications Engineering",
    location: "Guadalajara, Jalisco, Mexico",
    startDate: "2018",
    endDate: "2019",
    description:
      "Focused on IoT systems, real-time data processing, and communications engineering.",
    relevantCourses: [
      "Internet of Things (IoT) Systems",
      "Real-Time GPS Tracking",
      "Wireless Communications",
      "Database Systems (MongoDB)",
      "API Development with Node.js",
    ],
    achievements: [
      "Developed a real-time GPS tracking system for public transport using ESP8266 (testing) and LoRa + ATmega328 (production).",
      "Integrated Node.js REST APIs, MongoDB, and Google Maps API to visualize and monitor transport data.",
      "Submitted project to two innovation events (XChallenge and COECYTJAL).",
      "Won $20,000 USD in prizes from Guadalajara’s government.",
      "Published master’s thesis: Real-time tracking system of public transport in Guadalajara city.",
    ],
  },
  {
    id: "edu-bachelors",
    institution: "Instituto Tecnológico Superior de Atlixco",
    institutionLogo: "https://www.atlixco.tecnm.mx/logos/logo-institutions/itsa-logo.png",
    degree: "Bachelor of Engineering",
    field: "Mechatronics Engineering",
    location: "Atlixco, Puebla, Mexico",
    startDate: "2009",
    endDate: "2014",
    description:
      "Comprehensive mechatronics program combining electronics, mechanics, and computer engineering.",
    relevantCourses: [
      "Digital Systems Design",
      "Microcontrollers & Embedded Systems",
      "FPGA Development",
      "Control Systems",
      "Robotics Engineering",
    ],
    achievements: [
      "Bachelor thesis: Implemented VHDL designs on Spartan-6 FPGA using Xilinx ISE IDE.",
      "Developed training board for applied logic and digital design.",
      "Hands-on work with embedded systems and electronic automation.",
    ],
  },
];

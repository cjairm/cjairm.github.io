import automatedhubImg from "../../assets/automatedhub-website.png";
import lunaraImg from "../../assets/lunara-website.png";
import cjairmImg from "../../assets/cjairm-website.png";
import hadamenuImg from "../../assets/hadamenu-website.png";

export interface Portfolio {
  id: string;
  title: string;
  role: string;
  summary: string;
  stack: string[];
  outcomes: string[];
  image: {
    src: string;
    alt: string;
  };
  links: {
    demo?: string;
    repo?: string;
  };
}

export const portfolioData: Portfolio[] = [
  {
    id: "project-automatedhub",
    title: "AutomatedHub – MQTT Integration Platform",
    role: "Full-Stack Engineer",
    summary:
      "Early-stage IoT platform providing secure MQTT messaging with custom authentication, topic structures, and a React-based dashboard for device control and documentation.",
    stack: ["Go", "Python", "React", "Docker", "APIs", "MQTT"],
    outcomes: [
      "Implemented secure MQTT broker supporting WebSocket (WSS) and TCP connections with custom auth",
      "Built interactive documentation and dashboard for device management and examples",
      "Designed scalable topic structures and APIs enabling IoT device control and monitoring",
    ],
    image: {
      src: automatedhubImg,
      alt: "MQTT publish/subscribe architecture from AutomatedHub",
    },
    links: {
      demo: "https://automatedhub.io/",
      repo: "", // internal project; repo not public
    },
  },
  {
    id: "project-devgita",
    title: "Mac/Debian Dev Environment Setup Tool",
    role: "Tooling/Automation Engineer",
    summary:
      "CLI to bootstrap, configure, and manage consistent developer environments on macOS and Debian/Ubuntu. Focused on safe installs, reproducibility, and fast onboarding.",
    stack: ["Go", "macOS", "Debian/Ubuntu"],
    outcomes: [
      "Cross-platform direction: macOS today; Debian/Ubuntu compatibility planned.",
      "Comprehensive command suite: install/uninstall, configure/reconfigure, list/installed, check-updates, backup/restore, validate, and change (theme/font/background) with per-app/package flags.",
      "Build & test hygiene: universal builds for Apple Silicon/Intel; planned self-update command for the CLI.",
    ],
    image: {
      src: "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Automated developer setup scripts",
    },
    links: {
      demo: "",
      repo: "https://github.com/cjairm/devgita",
    },
  },
  {
    id: "project-lunara",
    title: "Lunara Weddings",
    role: "Founder & Lead Engineer",
    summary:
      "A digital wedding styling platform offering free AI-powered planning kits with premium upgrades, built for destination couples seeking visualization and coordination support.",
    stack: ["PHP", "JavaScript", "Stripe", "AI Tools", "Prompt Engineering"],
    outcomes: [
      "Launched a premium-feel platform with minimal navigation and Stripe checkout",
      "Integrated AI workflows for moodboards, color palettes, and vendor briefs",
      "Delivered scalable, fully digital styling services with a lean tech stack",
    ],
    image: {
      src: lunaraImg,
      alt: "Lunara Weddings platform showcasing AI wedding styling services",
    },
    links: {
      demo: "https://lunaraweddings.com/",
      repo: "", // private business repo
    },
  },
  {
    id: "project-site",
    title: "@cjairm’s Website",
    role: "Designer & Full-Stack Developer",
    summary:
      "Personal website and portfolio built from a reusable template. Clean, minimal UI with TypeScript-first patterns.",
    stack: ["React", "TypeScript"],
    outcomes: [
      "Released a reusable, open-source portfolio template",
      "Improved developer ergonomics with typed components",
      "Simplified content updates through data-driven sections",
    ],
    image: {
      src: cjairmImg,
      alt: "Personal website template preview",
    },
    links: {
      repo: "https://github.com/cjairm/cjairm.github.io",
    },
  },
  {
    id: "project-go-htmx",
    title: "Golang + HTMX Experiments",
    role: "Full-Stack Engineer",
    summary:
      "A collection of multipurpose Go + HTMX apps exploring auth, WebSockets, sessions/cookies, and a todo app.",
    stack: ["Go (Gin/Gorilla/Fiber/stdlib)", "HTMX"],
    outcomes: [
      "Prototyped multiple server-rendered patterns with progressive enhancement",
      "Implemented real-time UX via WebSockets",
      "Established session and cookie management patterns",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      alt: "Golang and HTMX prototype screens",
    },
    links: {
      demo: "",
      repo: "", // add repo link(s) if public
    },
  },
  {
    id: "project-cgrep",
    title: "cgrep (New Grep)",
    role: "Systems/CLI Developer",
    summary:
      "Command-line tool to search for words across files within a directory—fast, simple, and script-friendly.",
    stack: ["Go"],
    outcomes: [
      "Delivered a portable CLI for cross-file search",
      "Optimized for developer workflows and scripting",
      "Provided clear usage docs for quick adoption",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
      alt: "Terminal running a CLI search utility",
    },
    links: {
      demo: "",
      repo: "https://github.com/cjairm/cgrep",
    },
  },
  {
    id: "project-mobile",
    title: "Mobile Apps (Expo/React Native/Android)",
    role: "Mobile Developer",
    summary:
      "A set of mobile projects: a fun Pokédex, Hada Menú apps for restaurants & customers, and a GPS tracker (plus custom hardware).",
    stack: ["Expo", "React Native", "Android Studio", "Laravel"],
    outcomes: [
      "Shipped mobile prototypes and production apps",
      "Built a restaurant ordering experience (customer + kitchen views)",
      "Delivered a GPS-tracking demo with custom hardware integration",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
      alt: "React Native app screens",
    },
    links: {
      demo: "",
      repo: "https://github.com/cjairm/Pokedex-ReactNative",
    },
  },
  {
    id: "project-hadamenu",
    title: "Hada Menú",
    role: "Software Engineer & Cofounder",
    summary:
      "Multilingual restaurant ordering platform: per-table carts, real-time kitchen screens, and i18n.",
    stack: [
      "TypeScript",
      "React",
      "Laravel",
      "PHP",
      "Golang",
      "Expo",
      "React Native",
    ],
    outcomes: [
      "Implemented authentication and locale-aware UX (EN/ES)",
      "Enabled simultaneous orders per table from multiple devices",
      "Deployed real-time order dashboards for kitchen staff",
    ],
    image: {
      src: hadamenuImg,
      alt: "Restaurant ordering flow demo",
    },
    links: {
      demo: "https://hadamenu.com/k/19904033-de45-40a4-a782-72314d4c214d?table=1",
      repo: "", // private; leave blank or point to docs
    },
  },
  {
    id: "project-fpga",
    title: "FPGA/VHDL Community Support",
    role: "Hardware/Education",
    summary:
      "Educational content and resources to help newcomers start with FPGA programming (Spartan-6, VHDL).",
    stack: ["FPGA (Spartan-6)", "VHDL", "Xilinx ISE"],
    outcomes: [
      "Created didactic materials for foundational FPGA topics",
      "Shared thesis resources for community learning",
      "Promoted practical digital design workflows",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      alt: "FPGA board and circuit design",
    },
    links: {
      demo: "https://drive.google.com/file/d/1J6Lt8POaS26J_GRc2AlSdFf57-HILpG_/view",
      repo: "", // educational content, not a code repo
    },
  },
  {
    id: "project-laravel-cli",
    title: "Laravel CLI (Docker Template Setup)",
    role: "Tooling/Platform Engineer",
    summary:
      "CLI that scaffolds a new Laravel project with Docker for consistent local development.",
    stack: ["Go", "Docker", "Laravel"],
    outcomes: [
      "Reduced project bootstrap time with a single command",
      "Standardized local environments across contributors",
      "Documented usage for frictionless onboarding",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
      alt: "Dockerized Laravel template CLI",
    },
    links: {
      demo: "",
      repo: "https://github.com/cjairm/laravel-cli",
    },
  },
];

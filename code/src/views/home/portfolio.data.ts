import portfolioPokemonProject from "../../assets/portfolio/PokemonProject.png";
import portfolioPetLoversProject from "../../assets/portfolio/petLoversProject.png";
import portfolioPlantsProject from "../../assets/portfolio/plantsProject.png";
import portfolioGolangAlgoritms from "../../assets/portfolio/golangAlgoritms.png";
import portfolioIotProject from "../../assets/portfolio/iotProject.png";
import portfolioFpgaProject from "../../assets/portfolio/fpgaProject.png";
import portfolioClockProject from "../../assets/portfolio/clockProject.png";
import portfolioRobotProject from "../../assets/portfolio/robotProject.png";
import portfolioFlickrBootstrapProject from "../../assets/portfolio/flickrBootstrapProject.png";
import portfolioFlickrMaterialProject from "../../assets/portfolio/flickrMaterialProject.png";

const data = {
  items: [
    {
      imageSource: portfolioGolangAlgoritms,
      title: "Golang Algorithms",
      hashtags: ["#go"],
      date: "10/30/2020",
      link: "https://github.com/cjairm/go/tree/master/Algorithms-Go",
    },
    {
      imageSource: portfolioPokemonProject,
      title: "Pokemon app",
      hashtags: ["#react_native", "#styled_components", "#laravel"],
      date: "10/12/2020",
      link: "https://github.com/cjairm/Pokedex-ReactNative",
    },
    {
      imageSource: portfolioPetLoversProject,
      title: "Pet Lovers Site",
      hashtags: ["#reactJS", "#laravel", "#docker", "#scss", "#bootstrap"],
      date: "09/19/2020",
      link: "https://github.com/cjairm/Laravel/tree/main/Projects/pet-lovers",
    },
    {
      imageSource: portfolioPlantsProject,
      title: "Plant control Site",
      hashtags: ["#reactTS", "#scss", "#bootstrap"],
      date: "09/25/2020",
      link: "https://github.com/cjairm/typescript/tree/master/Projects/PlantsProject",
    },
    {
      imageSource: portfolioIotProject,
      title: "IoT Project",
      hashtags: ["#HTTP", "#REST", "#lora", "#atmega328"],
      date: "06/10/2020",
      link: "https://drive.google.com/file/d/1GzFDHXi6O5YXam0atFlYf-rgQgTXk4yg/view?usp=sharing",
    },
    {
      imageSource: portfolioClockProject,
      title: "Clock Project",
      hashtags: ["#vanilla", "#javascript"],
      date: "06/21/2020",
      link: "https://github.com/cjairm/javascript/tree/master/Projects/Clock",
    },
    {
      imageSource: portfolioRobotProject,
      title: "Robot Simulator Project",
      hashtags: ["#react", "#materialUI"],
      date: "01/20/2020",
      link: "https://github.com/cjairm/javascript/tree/master/Projects/testing-robot",
    },
    {
      imageSource: portfolioFlickrBootstrapProject,
      title: "Flickr Project 1",
      hashtags: ["#vanilla", "#javascript", "#bootstrap"],
      date: "06/21/2020",
      link: "https://github.com/cjairm/javascript/tree/master/Projects/vanilla-app-flickr",
    },
    {
      imageSource: portfolioFlickrMaterialProject,
      title: "Flickr Project 2",
      hashtags: ["#react", "#materialUI"],
      date: "06/21/2020",
      link: "https://github.com/cjairm/javascript/tree/master/Projects/react-app-flickr",
    },
    {
      imageSource: portfolioFpgaProject,
      title: "FPGA Project",
      hashtags: ["#FPGA", "#spartan6", "#xilinx"],
      date: "06/27/2017",
      link: "https://drive.google.com/file/d/1J6Lt8POaS26J_GRc2AlSdFf57-HILpG_/view",
    },
  ],
} as const;

export default data;

import BingeWatching from "../assets/images/BW-Search.png";
import Weather from "../assets/images/weather.png";
import Notetaker from "../../src/assets/images/notetaker.png";
import VitaAmet from "../../src/assets/images/Vita-Amet.png";

const projectData = [
  {
    name: "Vita Amet ",
    link: "https://vita-amet-2022-05-07.herokuapp.com/",
    githubLink: "https://github.com/Anastasiia-Ciloci/vita-amet.git",
    imgPath: VitaAmet,
    description:
      "Vita Amet is a full stack, mobile-responsive e-commerce application with authentication and payment method. Users can login and add items to cart and proceed to checkout",
    skills: "React,JavaScript,Bootstrap,Stripe API",
  },
  {
    name: "Weather dashboard",
    link: "https://anastasiia-ciloci.github.io/weather-dashboard/",
    githubLink: "https://github.com/Anastasiia-Ciloci/weather-dashboard",
    imgPath: Weather,
    description:
      "Weather Dashboard is an application for searching weather in different cities. Previous searching terms are being saved to the local storage. The weather data comes from Open Weather API. ",
    skills: "HTML,CSS,JavaScript,jQuery.js, third-party API",
  },
  {
    name: "Binge Watching",
    link: "https://anastasiia-ciloci.github.io/binge-watching/",
    githubLink: "https://github.com/Anastasiia-Ciloci/binge-watching",
    imgPath: BingeWatching,
    description:
      "Binge Watching is an application for searching movies or series on the query subject. Chosen items can be saved to the local storage.",
    skills: "HTML,CSS,JavaScript,jQuery.js, third-party API",
  },

  {
    name: "Notetaker ",
    link: "https://anastasiia-ciloci.github.io/Day-planner/",
    githubLink: "https://github.com/Anastasiia-Ciloci/Note-taker",
    imgPath: Notetaker,
    description:
      "A Note Taker application that saves notes. This application uses an Express.js back end and saves and retrieves note data from a JSON file.",
    skills: "HTML,CSS,JavaScript,jQuery.js",
  },
];

export default projectData;

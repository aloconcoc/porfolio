import { FaReact } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";
import { MdMobileFriendly } from "react-icons/md";
import { BsDatabaseCheck } from "react-icons/bs";

export const projectExperience = [
  {
    name: "Back-end development",
    projects: "Nodejs/expressjs",
    icon: BsDatabaseCheck,
    bg: "#286F6C",
  },
  {
    name: "Front-end development",
    projects: "Reactjs, Nextjs",
    icon: FaReact,
    bg: "#EEC048",
  },
  {
    name: "Mobile development",
    projects: "Native, React native",
    icon: MdMobileFriendly,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I'm here to help solve your web-related challenges. Whether it's building websites or digital products, I use my skills in web development to create solutions that work for you.",
  "Let's collaborate to improve your online presence and achieve your goals together.",
];

export const workExp = [
  {
    place: "FPT Software",
    tenure: "april 2023 - october 2023",
    role: "Backend Developer",
    detail:
      "Real-world job experience during the internship period, participating in the construction of an internal website for F-soft, writing APIs to query data, and database development.",
  },
];

export const comments = [
  {
    name: "Blog website",
    post: "Expressjs/Reactjs",
    comment:
      "Explore our MERN Stack Basic Blog Web, where you can effortlessly create and manage your blog content with MongoDB, Express.js, React.js, and Node.js. Enjoy a seamless experience for both writers and readers.",
    img: "./mern.png",
  },
  {
    name: "Ecommerce website",
    post: "Expressjs/Reactjs",
    comment:
      "Experience our MERN Ecommerce Web, seamlessly integrating MongoDB, Express.js, React.js, and Node.js for a dynamic online shopping experience. Browse, buy, and sell with ease on our intuitive platform.",
    img: "./mern.png",
  },
  {
    name: "Book management",
    post: "Expressjs/Reactjs",
    comment:
      "Streamline your book management system with our intuitive platform, designed to organize, track, and manage your collection effortlessly. From cataloging to tracking loans, simplify your book management process with ease.",
    img: "./mern.png",
  },
  {
    name: "Kanban clone",
    post: "Reactjs",
    comment:
      "Elevate your project management with our Kanban Clone, offering a streamlined interface for organizing tasks, tracking progress, and collaborating seamlessly. Harnessing the power of visual workflows, boost productivity and efficiency with ease.",
    img: "./react.png",
  },
  {
    name: "Movies website",
    post: "Expressjs/Reactjs",
    comment:
      "Explore our Movies Web platform, your gateway to a vast collection of films curated for every taste. Discover, watch, and review movies with ease, creating your personalized cinematic experience effortlessly.",
    img: "./mern.png",
  },
  {
    name: "Chat realtime website",
    post: "Expressjs/Reactjs",
    comment:
      "Engage in real-time conversations with our Chat Realtime platform, connecting users seamlessly for instant communication. Experience dynamic interactions with peers or clients, fostering collaboration and swift decision-making.",
    img: "./mern.png",
  },
  {
    name: "Task management",
    post: "Nextjs",
    comment:
      "Simplify your task management with our intuitive platform, enabling easy organization, tracking, and collaboration. Stay on top of your tasks with streamlined workflows and efficient communication.",
    img: "./next.png",
  },
  {
    name: "Food recipe app",
    post: "React native",
    comment:
      "Discover culinary delights with our Food Recipe App, your go-to source for delicious recipes and culinary inspiration. From quick meals to gourmet delights, explore a world of flavors at your fingertips.",
    img: "./mern.png",
  },
  {
    name: "Notes app",
    post: "Native",
    comment:
      "Unleash your productivity with our Notes App, simplifying the process of capturing, organizing, and accessing your thoughts on the go. Seamlessly sync across devices and never miss an idea again.",
    img: "./andr.jpg",
  },
  {
    name: "Pan-porfolio",
    post: "Html/Css/Js",
    comment:
      "Craft your personal brand with our Mini Portfolio, a sleek showcase of your skills and achievements. Present your work elegantly and professionally, leaving a lasting impression on potential clients or employers.",
    img: "./html.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

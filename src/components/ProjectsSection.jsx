import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import FightingGameImage from "../images/FightingGame.gif";
import WeatherAppImage from "../images/WeatherApp.png";
import WebsiteImage from "../images/Website.png";
import FirstTo100Image from "../images/FirstTo100.gif";
import TikTakToeImage from "../images/Tik-Tak-Toe.gif";
import BallGameImage from "../images/BallGame.gif";
const projects = [
  {
    title: "2D Canvas Fighting Game",
    description:
      "Fun fighting game using JavaScript, HTML & Canvas. Have a go at this two player game.",
    getImageSrc: FightingGameImage,
    url: "https://grants-2d-fighting-game.netlify.app/",
  },
  {
    title: "Cancas Weather App",
    description:
      "A weather app using TypeScript and canvas that makes an API call to fetch the required data. It also utilizes Jest for testing.",
    getImageSrc: WeatherAppImage,
    url: "https://grant-dennison.co.uk/weather-app-canvas/",
  },
  {
    title: "Child Minding Website",
    description: "A child-minding website using only HTML and CSS",
    getImageSrc: WebsiteImage,
    url: "https://github.com/grantdennison/Gosias-home-from-home",
  },
  {
    title: "First to 100 Wins",
    description:
      "First player to reach 100 roll the dice and hold. More you roll the greater risk to reward. Have a go and test your nerves",
    getImageSrc: FirstTo100Image,
    url: "https://grantdennison.github.io/first-to-100/index.html",
  },
  {
    title: "Tik-Tak-Toe React Game",
    description:
      "First react game of popular game tik-tak-toe. Fun to play and good way to learn react.",
    getImageSrc: TikTakToeImage,
    url: "https://github.com/grantdennison/tic-tac-toe",
  },
  {
    title: "Ball Game - Collect red dots",
    description:
      "Collect the red dots, more you collect the faster you go! Try beat your high score. Enjoy.",
    getImageSrc: BallGameImage,
    url: "https://grantdennison.github.io/ball-game/index.html",
  },
];

const ProjectsSection = () => {
  return (
    <div>
      <FullScreenSection
        backgroundColor="#04568a"
        isDarkBackground
        p={8}
        alignItems="flex-start"
        spacing={8}
      >
        <Heading as="h1" id="projects-section">
          Featured Projects
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(320px, 1fr))"
          gridGap={8}
        >
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.getImageSrc}
              url={project.url}
            />
          ))}
        </Box>
      </FullScreenSection>
    </div>
  );
};

export default ProjectsSection;

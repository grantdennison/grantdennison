import React from "react";
import { Avatar, Heading, VStack, HStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Grant from "../images/Grant-Dennison.jpg";
import "./LandingSection.css";

const greeting = "Hello, My name is Grant Dennison!";

const bio1 = `I am an engineer with a strong background in the railway industry, specializing in ensuring the smooth operation of trains through online monitoring, fault finding, and programming. However, my true passion lies in JavaScript programming. I have developed a deep understanding of JavaScript and I'm familiar with popular frameworks and libraries such as React, Node.js, Express, Canvas, and Socket.io.`;
const bio2 = `Although I don't have commercial programming experience, I'm eager to transition into a career as a JavaScript developer. I am confident in my skills and believe I can make a significant impact given the right opportunity. I'm actively seeking a company that will give me a chance to prove myself. Initially, I'm open to part-time or voluntary work to gain practical experience and showcase my capabilities.`;
const bio3 = `I bring a unique combination of technical problem-solving skills from my engineering background and a strong foundation in JavaScript development. I am a quick learner, adaptable, and possess excellent analytical skills. I thrive in challenging environments and enjoy collaborating to find innovative solutions.`;
const bio4 = `If given the opportunity, I am confident that I can contribute effectively to your team and help drive the success of your projects. I am excited about the prospect of starting a fulfilling career in programming and I am committed to continuous learning and growth.`;

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#02301f"
  >
    <VStack spacing={6} align="center">
      <HStack spacing={10} align="center">
        <Avatar src={Grant} alt="Avatar" className="landing_avator" size="xl" />
        <Heading as="h1" size="xl" color="white" className="landing_heading">
          {greeting}
        </Heading>
      </HStack>
      <Heading as="h2" color="white" className="landing_para">
        {bio1}
        <br></br>
        <br></br>
        {bio2}
        <br></br>
        <br></br>
        {bio3}
        <br></br>
        <br></br>
        {bio4}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

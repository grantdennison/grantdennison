import React from "react";
import { Avatar, Heading, VStack, HStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Grant from "../images/Grant-Dennison.jpg";
import "./LandingSection.css";

const greeting = "Hello, My name is Grant Dennison!";

const bio1 = `With a background in the railway industry specializing in online monitoring, fault finding, and self taught JavaScript programming using frameworks like React and libraries like Socket.io, I am an adaptable and collaborative professional seeking part-time or voluntary work to gain practical experience and transition into a JavaScript development career. Confident in my abilities to contribute effectively, drive project success, and committed to continuous learning and growth, I am excited to start a fulfilling career in programming.`;

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
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

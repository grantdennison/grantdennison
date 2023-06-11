import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import "./Header.css";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: grantdennison@yahoo.co.uk"
  },
  {
    icon: faGithub,
    url: "https://github.com/grantdennison"
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/grant-dennison-8a1537b6/"
  }
];

const Header = () => {
  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);

    if (element) {
      const navBarHeight = 100; // Adjust this value to the height of your fixed navigation bar

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - navBarHeight;

      window.scrollTo({
        top: window.scrollY + offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="profile-section">
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="#18181b"
        zIndex={100}
      >
        <Box color="white" maxWidth="1280px" minW="670px" margin="0 auto">
          <HStack
            px={16}
            py={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <nav>
              <div className="socials_icons">
                <HStack spacing={8}>
                  {socials.map((social, index) => (
                    <a href={social.url} key={index}>
                      <FontAwesomeIcon
                        icon={social.icon}
                        className="icon"
                        size="2x"
                      />
                    </a>
                  ))}
                </HStack>
              </div>
            </nav>
            <nav>
              <div className="socials_icons">
                <HStack spacing={8}>
                  <a
                    href="/#profile"
                    onClick={() => {
                      handleClick("profile");
                    }}
                    key={"profile"}
                    className="head"
                  >
                    Profile
                  </a>
                  <a
                    href="/#projects"
                    onClick={() => handleClick("projects")}
                    key={"projects"}
                    className="head"
                  >
                    Projects
                  </a>
                  <a
                    href="/#contact-me"
                    onClick={() => handleClick("contactme")}
                    key={"contact_me"}
                    className="head"
                  >
                    Contact Me
                  </a>
                </HStack>
              </div>
            </nav>
          </HStack>
        </Box>
      </Box>
    </div>
  );
};
export default Header;

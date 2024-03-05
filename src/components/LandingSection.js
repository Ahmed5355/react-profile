import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Ahmed!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <img src="https://i.pravatar.cc/150?img=7" style={{borderRadius:"50%"}} />
    <p style={{fontSize:"24px",marginBottom:"15px"}}>{greeting}</p>
    <h1 style={{fontSize:"40px" , fontWeight:"bold"}}>{bio1}</h1>
    <h1 style={{fontSize:"40px" , fontWeight:"bold"}}>{bio2}</h1>

  </FullScreenSection>
);

export default LandingSection;

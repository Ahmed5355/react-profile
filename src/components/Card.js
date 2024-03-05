import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <>
      <HStack>
      <VStack style={{borderRadius:"10px" ,backgroundColor:"white",overflow:"hidden", color: "black", textAlign:"left"}}>
      <Image src={imageSrc} style={{width:"100%"}}/>
      <Heading style={{width:"100%",textAlign:"left",marginLeft:"20px",fontSize:"30px"}}>{title}</Heading>
      <Text style={{marginLeft:"10px",color:"black"}}>{description}</Text>
      <Text style={{marginLeft:"20px",width:"100%",marginBottom:"20px",fontWeight:"bold",cursor:"pointer"}}>see more  <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
      </VStack>
      </HStack>
    </>
  );
};

export default Card;

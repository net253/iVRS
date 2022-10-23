import React from "react";
import { Box, Text, Flex, Image, HStack } from "@chakra-ui/react";
import Logo from "../assets/image/logo.png";
const Footer = () => {
  return (
    <>
      <Box w="100vw" h="4vh" bg="white">
        <Flex
          justifyContent="space-between"
          mx="20px"
          alignItems="center"
          h="100%"
        >
          <Box>
            <Text fontSize={"9px"} fontWeight={"semibold"}>
              Copyright &copy; SNC Former Public Company Limited 2022
            </Text>
          </Box>
          <HStack alignItems={"center"}>
            <Image src={Logo} w={{ md: "2vw", base: "3vw" }} h={"auto"} />
            <Text fontSize={"9px"} fontWeight={"semibold"}>
              IIoT-Center
            </Text>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;

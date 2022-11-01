import React from "react";
import { Box, Text, Flex, HStack } from "@chakra-ui/react";
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

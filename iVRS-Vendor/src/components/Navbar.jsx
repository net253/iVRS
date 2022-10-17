import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Text,
  Image,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import logo from "../assets/image/logo.png";

export default function Simple() {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={"6vh"} alignItems={"center"} justifyContent={"space-between"}>
          <HStack
            spacing={{ base: "10px", xl: "20px", sm: "5px", md: "5px" }}
            alignItems={"center"}
            className="textclick"
          >
            <Image
              src={logo}
              alt="React Logo"
              h={{ base: "1rem", xl: "1.5rem" }}
            />
            <Box
              fontWeight="semibold"
              fontSize={{ base: "10px", xl: "20px", sm: "10px", md: "10px" }}
            >
              {" "}
              iVRS Vendor Registation
            </Box>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton>
                <Flex alignItems="center">
                  <Avatar
                    name={window.localStorage.username}
                    mr="10px"
                    size={{ base: "xs", xl: "sm", sm: "sm" }}
                  />
                  <Text
                    w="max-content"
                    fontSize={{ base: "10px", xl: "14px" }}
                    fontWeight="semibold"
                    mr="10px"
                  >
                    {window.localStorage.username}
                  </Text>
                  <BsChevronDown size={14} />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem>Reset Password</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

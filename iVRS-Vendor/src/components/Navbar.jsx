import React, { useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Simple() {
  const navigate = useNavigate();
  const logout = () => {
    Swal.fire({
      title: "ต้องการออกจากระบบ ใช่ หรือ ไม่",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช่",
      cancelButtonText: "ไม่",
    }).then((result) => {
      if (result.isConfirmed) {
        window.localStorage.clear();
        navigate("/");
      }
    });
  };

  const checklocalstorafe = () => {
    if (!window.localStorage.isLoggedIn) {
      setTimeout(() => navigate("/"), 500);
    }
  };

  var waitTime = 30 * 60 * 1000; // = 30min
  if (window.localStorage.isLoggedIn) {
    setTimeout(function () {
      console.log("clear");
      window.localStorage.clear();
      setTimeout(() => navigate("/"), 1000);
    }, waitTime);
  }

  useEffect(() => {
    const initPage = setTimeout(() => {
      checklocalstorafe();
    }, 100);
    const timer1m = setInterval(() => {
      checklocalstorafe();
    }, 2000);
    return () => {
      clearTimeout(initPage);
      clearInterval(timer1m);
    };
  }, []);

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
                <MenuItem onClick={logout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

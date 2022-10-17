import React from "react";
import { useState } from "react";
import {
  Center,
  Box,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  FormControl,
  FormLabel,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import bg from "../assets/image/bg.png";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [formlogin, setFormlogin] = useState({
    username: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState({
    msg: "",
  });

  const handleclick = () => {
    if (formlogin.username == "" || formlogin.password == "") {
      console.log("Please enter your username");
      setErrorMsg({ ...errorMsg, msg: "**กรุณาระบุข้อมูลให้ครบถ้วน**" });
    } else {
      Swal.fire({
        icon: "success",
        title: "เข้าสู่ระบบสำเร็จ",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        window.localStorage.setItem("isLoggedIn", true);
        window.localStorage.setItem("username", formlogin.username);
        navigate("/Vendor");
      });
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <Center
        h="100vh"
        bgImage={bg}
        bgSize={1000}
        bgRepeat="no-repeat"
        bgPosition="right bottom"
      >
        <Box
          bgColor="#fff"
          shadow="xl"
          p={8}
          w="25%"
          rounded="2xl"
          minW="400px"
          onKeyPress={(e) => e.code == "Enter"}
        >
          <Heading mb={5} textAlign="center" fontSize={"30px"}>
            iVRS Vendor Registation
          </Heading>

          <FormControl isRequired>
            <FormLabel>ชื่อผู้ใช้(Username)</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FaUserAlt} color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Type your username"
                onChange={({ target: { value: username } }) =>
                  setFormlogin({ ...formlogin, username })
                }
              />
            </InputGroup>
          </FormControl>

          <FormControl my={3}>
            <FormLabel>รหัสผ่าน(Password)</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FaLock} color="gray.300" />
              </InputLeftElement>
              <Input
                type="password"
                placeholder="Type your password"
                onChange={({ target: { value: password } }) =>
                  setFormlogin({ ...formlogin, password })
                }
              />
            </InputGroup>
          </FormControl>
          <Text fontSize={"12px"} color="red" pb="10px">
            {errorMsg.msg}
          </Text>
          <Flex w="100%" justifyContent={"space-between"}>
            <Text fontSize={"12px"} className={"cursor"}>
              ลืมรหัสผ่าน?
            </Text>
            <Text
              fontSize={"12px"}
              className={"cursor"}
              onClick={() => {
                navigate("/Register");
              }}
            >
              สมัครสมาชิก
            </Text>
          </Flex>
          <Button
            size="sm"
            w="100%"
            mt={5}
            colorScheme="messenger"
            rounded="full"
            onClick={handleclick}
          >
            เข้าสู่ระบบ(Login)
          </Button>
        </Box>
      </Center>
    </>
  );
};

export default Login;

import React from "react";
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
  useDisclosure,
} from "@chakra-ui/react";
import bg from "../assets/image/bg.png";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useLogin } from "../store/Login/useLogin";
import { fetchlogin } from "../services/feth-api";
import { toastMixin } from "../libs/swalCustom";
import { Resetpassword } from "../components/modal";

const Login = () => {
  const navigate = useNavigate();
  const { LoginDetail, updateLoginDetail, updateLoginStatus } = useLogin();

  const handleonChange = (e) => {
    const { name, value } = e.target;
    updateLoginDetail(name, value);
  };

  const {
    isOpen: isOpenModalReset,
    onClose: onCloseModalReset,
    onOpen: onOpenModalReset,
  } = useDisclosure();

  const handleLogin = () => {
    if (LoginDetail.Username === "" || LoginDetail.Password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "กรุณากรอกข้อมูลให้ครบถ้วน",
      });
    } else {
      fetchlogin(LoginDetail).then((data) => {
        if (data.state) {
          toastMixin
            .fire({
              icon: "success",
              title: "เข้าสู่ระบบสำเร็จ",
              showConfirmButton: false,
              timer: 1500,
            })
            .then(() => {
              updateLoginStatus(true);
              window.localStorage.setItem("isLoggedIn", true);
              window.localStorage.setItem("username", LoginDetail.Username);
              window.localStorage.setItem("token", data.token);
              navigate("/home");
            });
        } else {
          toastMixin.fire({
            icon: "error",
            title: data.msg,
            text: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
          });
        }
      });
    }
  };

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
          p={9}
          w="25%"
          rounded="2xl"
          minW="400px"
          onKeyPress={(e) => e.code == "Enter"}
        >
          <Heading mb={5} textAlign="center" fontSize={"30px"}>
            iVRS Vendor Registation
          </Heading>

          <FormControl isRequired>
            <FormLabel>ชื่อผู้ใช้ (Username)</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FaUserAlt} color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Type your username"
                name="Username"
                onChange={handleonChange}
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    handleLogin();
                  }
                }}
              />
            </InputGroup>
          </FormControl>

          <FormControl my={3}>
            <FormLabel>รหัสผ่าน (Password)</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FaLock} color="gray.300" />
              </InputLeftElement>
              <Input
                name="Password"
                type="password"
                onChange={handleonChange}
                placeholder="Type your password"
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    handleLogin();
                  }
                }}
              />
            </InputGroup>
          </FormControl>
          <Text fontSize={"12px"} color="red">
            หมายเหตุ: เพื่อประสิทธิภาพสูงสุด แนะนำใช้งานเว็บไซต์ผ่าน Web Browser
            on PC
          </Text>
          <Flex w="100%" justifyContent={"space-between"} py="10px">
            <Text
              fontSize={"12px"}
              className={"cursor"}
              onClick={() => {
                onOpenModalReset();
              }}
            >
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
            onClick={handleLogin}
          >
            เข้าสู่ระบบ(Login)
          </Button>
        </Box>
      </Center>

      <Resetpassword isOpen={isOpenModalReset} onClose={onCloseModalReset} />
    </>
  );
};

export default Login;

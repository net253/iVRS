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
  InputRightElement,
} from "@chakra-ui/react";
import bg from "../assets/image/bg.png";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useRegister } from "../store/Register";
import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";
import { fetchregister } from "../services/feth-api";
import { toastMixin } from "../libs/swalCustom";
import {
  validateEmail,
  validatePassword,
  validateUsername,
  validateNameThaiAndEnglish,
} from "../libs/Validate";

const Registerpage = () => {
  const navigate = useNavigate();
  const { RegisterDetail, updateRegisterDetail } = useRegister();

  const handleonChange = (e) => {
    const { name, value } = e.target;
    updateRegisterDetail(name, value);
  };

  const handleRegister = () => {
    if (
      RegisterDetail.Email === "" ||
      RegisterDetail.Password === "" ||
      RegisterDetail.Name === "" ||
      RegisterDetail.Username === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "กรุณากรอกข้อมูลให้ครบถ้วน",
      });
    } else if (!validateEmail(RegisterDetail.Email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "รูปแบบอีเมล์ไม่ถูกต้อง",
      });
    } else if (!validatePassword(RegisterDetail.Password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "รูปแบบรหัสผ่านไม่ถูกต้อง",
      });
    } else if (!validateNameThaiAndEnglish(RegisterDetail.Name)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "รูปแบบชื่อไม่ถูกต้อง",
      });
    } else if (!validateUsername(RegisterDetail.Username)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "รูปแบบชื่อผู้ใช้ไม่ถูกต้อง",
      });
    } else {
      fetchregister(RegisterDetail).then((data) => {
        if (data.state) {
          toastMixin
            .fire({
              icon: "success",
              title: "สมัครสมาชิกสำเร็จ",
            })
            .then(() => {
              updateRegisterDetail("Email", "");
              updateRegisterDetail("Password", "");
              updateRegisterDetail("Name", "");
              updateRegisterDetail("Username", "");
              updateRegisterDetail("ComfirmPassword", "");
            });
          navigate("/");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "มีบางอย่างผิดพลาด",
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
          p={8}
          w="30vw"
          rounded="2xl"
          minW="400px"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleRegister();
            }
          }}
        >
          <Heading mb={5} textAlign="center" fontSize={"30px"}>
            iVRS Vendor Registation
          </Heading>

          <FormControl my={3}>
            <FormLabel>ชื่อ-นามสกุล (Name)</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FaUserAlt} color="gray.300" />
              </InputLeftElement>
              <Input
                required={true}
                type="text"
                name="Name"
                placeholder="ชื่อ-นามสกุล"
                onChange={handleonChange}
              />
              {validateNameThaiAndEnglish(RegisterDetail.Name) ? (
                <InputRightElement>
                  <Icon as={FaCheckCircle} color="green.500" />
                </InputRightElement>
              ) : (
                <InputRightElement>
                  <Icon as={FaExclamationCircle} color="red.500" />
                </InputRightElement>
              )}
            </InputGroup>
          </FormControl>

          <FormControl my={3}>
            <FormLabel>ชื่อผู้ใช้ (Username)</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FaUserAlt} color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="ชื่อผู้ใช้"
                name="Username"
                onChange={handleonChange}
              />
              {validateUsername(RegisterDetail.Username) ? (
                <InputRightElement>
                  <Icon as={FaCheckCircle} color="green.500" />
                </InputRightElement>
              ) : (
                <InputRightElement>
                  <Icon as={FaExclamationCircle} color="red.500" />
                </InputRightElement>
              )}
            </InputGroup>
          </FormControl>

          <FormControl my={3}>
            <FormLabel>Email (@gmail.com)</FormLabel>
            <Text>
              <Text ml={2} fontSize="10px" color={"red"}>
                หมายเหตุ: กรุณาใช้อีเมล์ที่ใช้งานจริง เพื่อใช้ในการรับรหัสผ่าน
              </Text>
            </Text>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={MdEmail} color="gray.300" />
              </InputLeftElement>
              <Input
                type="email@gmail.com"
                placeholder="Email"
                onChange={handleonChange}
                name="Email"
              />
              {validateEmail(RegisterDetail.Email) ? (
                <InputRightElement>
                  <Icon as={FaCheckCircle} color="green.500" />
                </InputRightElement>
              ) : (
                <InputRightElement>
                  <Icon as={FaExclamationCircle} color="red.500" />
                </InputRightElement>
              )}
            </InputGroup>
          </FormControl>

          <FormControl my={3}>
            <FormLabel>รหัสผ่าน (Password)</FormLabel>
            <Text color={"red"} fontSize={"10px"}>
              หมายเหตุ: รหัสผ่านต้องมีอย่างน้อย 8 ตัว และมีตัวอักษรและตัวเลข
            </Text>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FaLock} color="gray.300" />
              </InputLeftElement>
              <Input
                type="password"
                placeholder="Password"
                onChange={handleonChange}
                name="Password"
              />
              {validatePassword(RegisterDetail.Password) ? (
                <InputRightElement>
                  <Icon as={FaCheckCircle} color="green.500" />
                </InputRightElement>
              ) : (
                <InputRightElement>
                  <Icon as={FaExclamationCircle} color="red.500" />
                </InputRightElement>
              )}
            </InputGroup>
          </FormControl>
          <FormControl my={3}>
            <FormLabel>ยืนยันรหัสผ่าน (Confirm Password)</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FaLock} color="gray.300" />
              </InputLeftElement>
              <Input
                type="password"
                placeholder="Confirm Password"
                onChange={handleonChange}
                name="ConfirmPassword"
              />
              {RegisterDetail.Password === RegisterDetail.ConfirmPassword &&
              RegisterDetail.ConfirmPassword != "" ? (
                <InputRightElement>
                  <Icon as={FaCheckCircle} color="green.500" />
                </InputRightElement>
              ) : (
                <InputRightElement>
                  <Icon as={FaExclamationCircle} color="red.500" />
                </InputRightElement>
              )}
            </InputGroup>
          </FormControl>
          <Text py="10px" fontSize={"14px"} color="red"></Text>
          <Flex w="100%" justifyContent={"space-between"}>
            <Text fontSize={"12px"} className={"cursor"}></Text>
            <Text
              fontSize={"12px"}
              className={"cursor"}
              onClick={() => {
                navigate("/");
              }}
            >
              เข้าสู่ระบบ
            </Text>
          </Flex>

          <Center>
            <Button
              size="sm"
              w="max-content"
              mt={5}
              colorScheme="messenger"
              rounded="md"
              onClick={handleRegister}
            >
              ลงทะเบียน (Registation)
            </Button>
          </Center>
        </Box>
      </Center>
    </>
  );
};

export default Registerpage;

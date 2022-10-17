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
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Registerpage = () => {
  const [formInput, setFormInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(formInput);

  const [errorMsg, setErrorMsg] = useState({
    msg: "",
  });

  const handleClick = () => {
    if (
      formInput.firstname == "" ||
      formInput.lastname == "" ||
      formInput.email == "" ||
      formInput.password == "" ||
      formInput.confirmPassword == ""
    ) {
      setErrorMsg({ ...errorMsg, msg: "กรุณาระบุข้อมูลให้ครบถ้วน" });
    } else {
      Swal.fire({
        icon: "success",
        title: "เข้าสู่ระบบสำเร็จ",
        showConfirmButton: false,
        timer: 2000,
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
          w="30vw"
          rounded="2xl"
          minW="400px"
          // onKeyPress={(e) => e.code == "Enter"}
        >
          <Heading mb={5} textAlign="center" fontSize={"30px"}>
            iVRS Vendor Registation
          </Heading>

          <FormControl my={3}>
            <FormLabel>ชื่อ (First Name)</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FaUserAlt} color="gray.300" />
              </InputLeftElement>
              <Input
                required={true}
                type="text"
                placeholder="ชื่อ"
                onChange={({ target: { value: firstname } }) =>
                  setFormInput({ ...formInput, firstname })
                }
              />
            </InputGroup>
          </FormControl>

          <FormControl my={3}>
            <FormLabel>นามสุกล (Last Name)</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                // children={[<Icon as={FaUserAlt} color="gray.300" />]}
              >
                <Icon as={FaUserAlt} color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="นามสกุล"
                onChange={({ target: { value: lastname } }) =>
                  setFormInput({ ...formInput, lastname })
                }
              />
            </InputGroup>
          </FormControl>

          <FormControl my={3}>
            <FormLabel>Email (Email@gmail.com)</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                // children={[<Icon as={FaUserAlt} color="gray.300" />]}
              >
                <Icon as={MdEmail} color="gray.300" />
              </InputLeftElement>
              <Input
                type="email@gmail.com"
                placeholder="Email"
                onChange={({ target: { value: email } }) =>
                  setFormInput({ ...formInput, email })
                }
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
                type="password"
                placeholder="Password"
                onChange={({ target: { value: password } }) =>
                  setFormInput({ ...formInput, password })
                }
              />
            </InputGroup>
          </FormControl>
          <FormControl my={3}>
            <FormLabel>ยืนยันรหัสผ่าน(Confirm Password)</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FaLock} color="gray.300" />
              </InputLeftElement>
              <Input
                type="password"
                placeholder="Confirm Password"
                onChange={({ target: { value: confirmPassword } }) =>
                  setFormInput({ ...formInput, confirmPassword })
                }
              />
            </InputGroup>
          </FormControl>
          <Text py="10px" fontSize={"14px"} color="red">
            **{errorMsg.msg}**
          </Text>
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
              onClick={handleClick}
            >
              ลงทะเบียน(Registation)
            </Button>
          </Center>
        </Box>
      </Center>
    </>
  );
};

export default Registerpage;

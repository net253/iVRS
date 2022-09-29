import React from "react";
import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Text,
  VStack,
  Button,
  Flex,
  Center,
  Select,
} from "@chakra-ui/react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import Swal from "sweetalert2";
import fakedata from "../data/businessrole.json";
import { useNavigate } from "react-router-dom";

const VendorLogin = () => {
  const navigate = useNavigate();
  const handleVendor = () => {
    navigate("/vendorRegister");
    console.log("vendorRegister called");
  };

  const handleForgot = () => {
    Swal.fire({
      title: "E-mail address",
      input: "email",
      inputLabel: "รหัสผ่านใหม่จะถูกส่งไปยังอีเมลของคุณ",
      inputPlaceholder: "Enter your email address",
      showCancelButton: true,
      cancelButtonColor: "red",
    }).then(({ value }) => {
      if (value) {
        Swal.fire({
          title: `Your enter e-mail is ${value}`,
          showCancelButton: true,
          confirmButtonText: "Confirm",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: `<p class="font-thai">กำลังส่งรหัสผ่านใหม่ </p>(Sending new password.)`,
              html: `<p class="font-thai">กรุณารอสักครู่ (Please wait.)</p>`,
              allowEscapeKey: false,
              allowOutsideClick: false,
              didOpen: () => {
                Swal.showLoading();
              },
              timer: 8000,
            });
            axios.post(resetPass, { email: value }).then(({ data }) => {
              if (data.state) {
                Swal.fire({
                  html: `<p class="font-thai" >รหัสผ่านใหม่ถูกส่งไปยังอีเมลของคุณเรียบร้อยแล้ว กรุณาตรวจสอบอีเมล<br /> 
              <span>The new password has been successfully sent to your email. Please check your email.</span></p>`,
                  icon: "success",
                  showConfirmButton: true,
                  timer: 8000,
                });
              } else {
                Swal.fire({
                  icon: "error",
                  title: data.massage,
                  showConfirmButton: false,
                  timer: 3000,
                });
              }
            });
          }
        });
      }
    });
  };
  return (
    <>
      <Box bg="#f2f2f2" w="100vw" h="100vh">
        <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
          <Box bg="white" p={10} rounded="2xl">
            <VStack>
              <Text className="font-thai" textAlign="center">
                <b className="font-thai" style={{ color: "red" }}>
                  พนักงานบริษัท เอส เอ็น ซี ฟอร์เมอร์ จำกัด (มหาชน)
                  และบริษัทในเครือ
                </b>
                <br />
                กรุณาลงชื่อเข้าใช้เพื่อเริ่มใช้งาน
              </Text>
              <Text>
                <b style={{ color: "red" }}>SNC Group</b> please log in to start
                your session
              </Text>
            </VStack>

            <FormControl mt={3} isRequired p={5}>
              {/* Username */}
              <FormLabel htmlFor="username" fontSize="xl">
                USERNAME
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={FaUser} />}
                />
                <Input
                  id="username"
                  type="text"
                  variant="flushed"
                  placeholder="Type your username"
                />
              </InputGroup>

              {/* Password */}
              <FormLabel htmlFor="password" mt={4} fontSize="xl">
                PASSWORD
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={FaLock} />}
                />
                <Input
                  id="password"
                  type="password"
                  variant="flushed"
                  placeholder="Type your password"
                />
              </InputGroup>

              {/* <FormLabel htmlFor="password" mt={4} fontSize="xl">
                Business Role
              </FormLabel>
              <Select>
                <option value="">-- Please select Order ID --</option>
                {fakedata.map((sap, index) => (
                  <option value={sap.role}>{sap.role}</option>
                ))}
              </Select> */}

              {/* Button */}
              <Box
                mt={10}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button
                  variant="link"
                  rounded="md"
                  size="sm"
                  color="blue.400"
                  onClick={() => handleVendor()}
                >
                  สมัครสมาชิก <br />
                  Register
                </Button>
                <Button
                  variant="link"
                  rounded="md"
                  size="sm"
                  color="blackAlpha.600"
                  onClick={() => handleForgot()}
                >
                  ลืมรหัสผ่าน <br />
                  Forgot password?
                </Button>
              </Box>
              <Box w="100%" mt={35}>
                <Center>
                  <Button
                    rightIcon={<Icon as={MdArrowForwardIos} />}
                    bgColor="#787ff6"
                    color="#fff"
                    variant="solid"
                    w="50%"
                    rounded="xl"
                    size="lg"
                    onClick={() => handleLogin()}
                  >
                    <span className="font-thai">เข้าใช้งาน </span> / Sign in
                  </Button>
                </Center>
              </Box>
            </FormControl>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default VendorLogin;

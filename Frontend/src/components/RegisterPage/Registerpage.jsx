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
  HStack,
} from "@chakra-ui/react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import Swal from "sweetalert2";
import fakedata from "../../data/businessrole.json";
import { useNavigate } from "react-router-dom";

const Registerpage = () => {
  const navigate = useNavigate();
  const handleVendor = () => {
    navigate("/vendorlogin");
  };

  return (
    <>
      <Box bg="#f2f2f2" w="100vw" h="100vh">
        <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
          <Box bg="white" rounded="2xl" w="50vw" p={2}>
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
              <FormLabel htmlFor="first-name" fontSize="xl">
                First Name
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
                  placeholder="First Name"
                />
              </InputGroup>

              {/* Password */}
              <FormLabel htmlFor="last-name" mt={4} fontSize="xl">
                Last Name
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={FaUser} />}
                />
                <Input
                  id="lastname"
                  type="text"
                  variant="flushed"
                  placeholder="Last Name"
                />
              </InputGroup>

              <FormLabel htmlFor="last-name" mt={4} fontSize="xl">
                Email
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={FaUser} />}
                />
                <Input
                  id="email"
                  type="text"
                  variant="flushed"
                  placeholder="E-mail"
                />
              </InputGroup>

              <FormLabel htmlFor="password" mt={4} fontSize="xl">
                Business Role
              </FormLabel>
              <Select>
                <option value="">-- Please select Business Role --</option>
                {fakedata.map((sap, index) => (
                  <option value={sap.role}>{sap.role}</option>
                ))}
              </Select>
              <HStack w="100%">
                <Box w="100%">
                  <FormLabel htmlFor="last-name" mt={4} fontSize="xl">
                    Password
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<Icon as={FaUser} />}
                    />
                    <Input
                      id="password"
                      type="text"
                      variant="flushed"
                      placeholder="E-mail"
                    />
                  </InputGroup>
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="last-name" mt={4} fontSize="xl">
                    Repleat Password
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<Icon as={FaUser} />}
                    />
                    <Input
                      id="email"
                      type="password"
                      variant="flushed"
                      placeholder="E-mail"
                    />
                  </InputGroup>
                </Box>
              </HStack>

              {/* Button */}
              <Box
                mt={10}
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Button
                  variant="link"
                  rounded="md"
                  size="sm"
                  color="blue.400"
                  onClick={() => handleVendor()}
                >
                  มีบัญชีอยู่แล้ว <br />
                  Login
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
                    <span className="font-thai">สมัครสมาชิก </span> / Register
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

export default Registerpage;

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
} from "@chakra-ui/react";
import bg from "../assets/image/bg.png";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
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

          <FormControl>
            <FormLabel>ชื่อผู้ใช้(Username)</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                // children={[<Icon as={FaUserAlt} color="gray.300" />]}
                children={[<Icon as={FaUserAlt} color="gray.300" />]}
              />
              <Input type="text" placeholder="Type your username" />
            </InputGroup>
          </FormControl>

          <FormControl my={3}>
            <FormLabel>รหัสผ่าน(Password)</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={FaLock} color="gray.300" />}
              />
              <Input type="password" placeholder="Type your password" />
            </InputGroup>
          </FormControl>
          <Flex w="100%" justifyContent={"space-between"}>
            <Text fontSize={"12px"} className={"cursor"}>
              ลืมรหัสผ่าน
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
          >
            เข้าสู่ระบบ(Login)
          </Button>
        </Box>
      </Center>
    </>
  );
};

export default Login;

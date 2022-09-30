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
import { BsPeopleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Registerpage = () => {
  const navigate = useNavigate();
  const handleVendor = () => {
    navigate("/vendorlogin");
    console.log("test");
  };

  const [formInput, setFormInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    bsnrole: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    bsnrole: "",
    password: "",
    confirmPassword: "",
  });

  const validateFormInput = (event) => {
    event.preventDefault();
    let inputError = {
      firstname: "",
      lastname: "",
      email: "",
      bsnrole: "",
      password: "",
      confirmPassword: "",
    };

    if (
      !formInput.email &&
      !formInput.password &&
      !formError.firstname &&
      !formError.lastname
    ) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
        password: "Password should not be empty",
        firstname: "กรุณาใส่ชื่อ",
      });
      return;
    }

    if (!formInput.email) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
      });
      return;
    }

    if (formInput.confirmPassword !== formInput.password) {
      setFormError({
        ...inputError,
        confirmPassword: "Password and confirm password should be same",
      });
      return;
    }

    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      return;
    }

    setFormError(inputError);
  };
  console.log(formInput);

  const Services = [
    "วัตถุดิบ**",
    "วัสดุสิ้นเปลืองโรงงาน",
    "วัสดุสำนักงาน",
    "งานรับเหมา,จ้างทำ",
    "ขนส่ง",
    "เบ็ดเตล็ด/อุปกรณ์โรงงาน",
    "เบ็ดเตล็ด/อุปกรณ์สำนักงาน",
    "สารเคมี,เชื้อเพลิง",
    "เครื่องจักร",
    "Others",
  ];
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
                  id="firstname"
                  type="text"
                  variant="flushed"
                  placeholder="First Name"
                  value={formInput.firstname}
                  onChange={({ target: { value: firstname } }) =>
                    setFormInput({ ...formInput, firstname })
                  }
                />
              </InputGroup>
              <p className="error-message">{formError.firstname}</p>

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
                  value={formInput.lastname}
                  onChange={({ target: { value: lastname } }) =>
                    setFormInput({ ...formInput, lastname })
                  }
                />
              </InputGroup>
              <p className="error-message">{formError.email}</p>

              <FormLabel htmlFor="email" mt={4} fontSize="xl">
                Email
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={MdEmail} />}
                />
                <Input
                  id="email"
                  type="text"
                  variant="flushed"
                  placeholder="E-mail"
                  value={formInput.email}
                  onChange={({ target: { value: email } }) =>
                    setFormInput({ ...formInput, email })
                  }
                />
              </InputGroup>
              <p className="error-message">{formError.email}</p>

              <FormLabel htmlFor="business-role" mt={4} fontSize="xl">
                Business Role
              </FormLabel>
              <Select
                onChange={({ target: { value: bsnrole } }) =>
                  setFormInput({ ...formInput, bsnrole })
                }
              >
                <option value="">-- Please select Business Role --</option>
                {Services.map((info, i) => (
                  <option value={info} key={i}>
                    {info}
                  </option>
                ))}
              </Select>
              <HStack w="100%">
                <Box w="100%">
                  <FormLabel htmlFor="password" mt={4} fontSize="xl">
                    Password
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<Icon as={RiLockPasswordFill} />}
                    />
                    <Input
                      id="password"
                      type="password"
                      variant="flushed"
                      placeholder="password"
                      value={formInput.password}
                      onChange={({ target: { value: password } }) =>
                        setFormInput({ ...formInput, password })
                      }
                    />
                  </InputGroup>
                  <p className="error-message">{formError.password}</p>
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="rpassword" mt={4} fontSize="xl">
                    Confirm Password
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<Icon as={RiLockPasswordFill} />}
                    />
                    <Input
                      id="password2"
                      type="password"
                      variant="flushed"
                      placeholder="password"
                      value={formInput.confirmPassword}
                      onChange={({ target: { value: confirmPassword } }) =>
                        setFormInput({ ...formInput, confirmPassword })
                      }
                    />
                  </InputGroup>
                  <Text className="error-message">
                    {formError.confirmPassword}
                  </Text>
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
                    onClick={validateFormInput}
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

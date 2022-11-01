import React from "react";
import {
  Text,
  Grid,
  GridItem,
  HStack,
  Input,
  Spacer,
  Divider,
  useBreakpoint,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import useFormInput from "../../store/forminput/forminput";

const textInput = [
  { thai: "งานขาย", name: "SaleName", email: "SaleEmail", phone: "SaleTel" },
  {
    thai: "ผู้จัดการฝ่ายขาย",
    name: "SaleManagerName",
    email: "SaleManagerEmail",
    phone: "SaleManagerTel",
  },
  {
    thai: "งานแผนกบัญชี",
    name: "AccountName",
    email: "AccountEmail",
    phone: "AccountTel",
  },
];

export default function Contact() {
  const { FormDetail, updateFormDetail } = useFormInput();
  console.log(FormDetail);

  const handleForminput = (e) => {
    const { name, value } = e.target;
    updateFormDetail(name, value);
  };

  const lineShow = useBreakpoint();

  return (
    <>
      <HStack mt={5} px="10px">
        <Text
          className="font-thai"
          fontWeight="bold"
          fontSize={{ base: "sm", sm: "md" }}
        >
          บุคคลติดต่อ / <span>Contact Person</span>
        </Text>
        <Spacer />
        <Text fontWeight="light" fontSize="sm">
          Step 2 of 6
        </Text>
      </HStack>

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={4}
        alignItems="center"
        borderTop="2px"
        borderColor="blackAlpha.600"
        px="10px"
        py={3}
        my={1}
        fontSize={{ base: "sm", sm: "sm" }}
      >
        {textInput.map((info, i) => (
          <React.Fragment key={i}>
            {/* Name */}
            <GridItem w="100%">
              {lineShow == "base" && i > 0 ? <Divider mb={3} /> : ""}
              {i == 1 ? (
                <Text className="font-thai" fontWeight="bold">
                  {info.thai} / Sales Manager
                </Text>
              ) : (
                <Text className="font-thai" fontWeight="bold">
                  {info.thai} / {info.name}
                </Text>
              )}
              <Input
                placeholder={info.eng}
                size="sm"
                name={info.name}
                onChange={handleForminput}
              />
              <Input
                mt={3}
                size="sm"
                variant="unstyled"
                disabled
                display={{ base: "none", lg: "unset" }}
              />
            </GridItem>

            {/* email */}
            <GridItem w="100%">
              <Text className="font-thai">อีเมล / E-mail</Text>
              <Input
                placeholder="E-mail"
                type="email"
                size="sm"
                name={info.email}
                onChange={handleForminput}
              />
              <InputGroup>
                <Input
                  placeholder="ยืนยันอีเมล / Verify E-mail"
                  type="email"
                  size="sm"
                  mt={2}
                  onChange={handleForminput}
                />
              </InputGroup>
            </GridItem>

            {/* Tel */}
            <GridItem w="100%">
              <Text className="font-thai">เบอร์ติดต่อ / Ext. No.</Text>
              <Input
                placeholder="Ext. No."
                type="text"
                size="sm"
                name={info.phone}
                maxLength={10}
                onChange={handleForminput}
              />
              <InputGroup>
                <Input
                  placeholder="ยืนยันเบอร์ติดต่อ / Verify Ext. No."
                  type="text"
                  size="sm"
                  mt={2}
                  maxLength={10}
                  onChange={handleForminput}
                />
                <InputRightElement />
              </InputGroup>
            </GridItem>
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
}

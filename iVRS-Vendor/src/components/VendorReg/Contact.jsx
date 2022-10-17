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

const textInput = [
  { thai: "งานขาย", eng: "Sales" },
  { thai: "ผู้จัดการฝ่ายขาย", eng: "Manager" },
  { thai: "งานแผนกบัญชี", eng: "Accountant" },
];

export default function Contact() {
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
                  {info.thai} / {info.eng}
                </Text>
              )}
              <Input
                placeholder={`${info.eng}`}
                size="sm"
                name={`${info.eng.toLowerCase()}Name`}
              />
              <Input
                mt={4}
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
                name={`${info.eng.toLowerCase()}Email`}
              />
              <InputGroup>
                <Input
                  placeholder="ยืนยันอีเมล / Verify E-mail"
                  type="email"
                  size="sm"
                  mt={2}
                  name={`${info.eng.toLowerCase()}VEmail`}
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
                name={`${info.eng.toLowerCase()}Tel`}
                maxLength={10}
              />
              <InputGroup>
                <Input
                  placeholder="ยืนยันเบอร์ติดต่อ / Verify Ext. No."
                  type="text"
                  size="sm"
                  mt={2}
                  name={`${info.eng.toLowerCase()}VTel`}
                  maxLength={10}
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

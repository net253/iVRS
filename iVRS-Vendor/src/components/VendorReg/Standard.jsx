import React from "react";
import {
  Text,
  Grid,
  GridItem,
  HStack,
  Stack,
  Input,
  Spacer,
  Radio,
  RadioGroup,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { currencyCodes } from "../currency/currency";

const chkText = [
  "ISO 9001:2000",
  "ISO 14001:2004",
  "ISO TS16949:2002",
  "TIS 18001:1999",
  "OHSAS 18001:2007",
  "ISO 26000",
  "มรท. 8001-2546",
  "BOI",
  "Other",
];

// const currency = [
//   {
//     Name: "USD",
//     value: "USD",
//   },
//   {
//     Name: "EUR",
//     value: "EUR",
//   },
// ];

const bnf = ["BOI", "Flow", "อื่นๆ / Others", "ไม่มี"];
const creditterm = [
  "Cash",
  "0 วัน",
  "15 วัน",
  "30 วัน",
  "45 วัน",
  "60 วัน",
  "75 วัน",
  "90 วัน",
  "120 วัน",
  "150 วัน",
];

const question = [
  {
    thai: "3. คุณมีมาตรฐานการบรรจุหรือไม่",
    eng: "Do you have standard packing?",
    value: "stdPacking",
  },
  {
    thai: "4. คุณมีจำนวนการสั่งซื้อขั้นต่ำหรือไม่",
    eng: "Do you have minimum order quantity (MOQ)?",
    value: "moq",
  },
];

export default function Standard() {
  return (
    <>
      <HStack mt={5} px="10px">
        <Text
          className="font-thai"
          fontWeight="bold"
          fontSize={{ base: "sm", sm: "md" }}
        >
          มาตรฐานและการรับรองที่ได้รับในปัจจุบัน /{" "}
          <span>Current Standards and Certifications</span>
        </Text>
        <Spacer />
        <Text fontWeight="light" fontSize="sm">
          Step 3 of 6
        </Text>
      </HStack>

      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={3}
        alignItems="center"
        borderTop="2px"
        borderColor="blackAlpha.600"
        py={3}
        my={1}
        fontSize={{ base: "sm", sm: "sm" }}
        px="10px"
      >
        {/* Q1 */}
        <GridItem w="100%" colSpan={3}>
          <Text className="font-thai" fontWeight="bold">
            1. การรับรองที่ได้รับ / <span>Kind of certificate approved</span>
          </Text>
        </GridItem>
        <GridItem w="100%" colSpan={3} fontSize={{ base: "sm", sm: "sm" }}>
          <RadioGroup colorScheme="green">
            <Grid
              templateColumns={{ base: "repeat(2,1fr)", md: "repeat(5,1fr)" }}
              gap={2}
              fontSize={{ base: "sm", sm: "sm" }}
            >
              {chkText.map((info, i) => (
                <GridItem
                  key={i}
                  w="100%"
                  display="flex"
                  colSpan={info == "Other" ? "2" : "1"}
                >
                  <Radio key={i} value={info}>
                    {info}
                  </Radio>
                  {info == "Other" ? (
                    <Input placeholder="Other certificate" ml={5} size="sm" />
                  ) : (
                    ""
                  )}
                </GridItem>
              ))}
              <GridItem></GridItem>
            </Grid>
          </RadioGroup>
        </GridItem>

        <GridItem w="100%" colSpan={3}>
          <Text className="font-thai" fontWeight="bold">
            2. สิทธิประโยชน์ที่ได้รับ / <span>Benefits</span>
          </Text>
        </GridItem>
        <GridItem w="100%" colSpan={3} fontSize={{ base: "sm", sm: "sm" }}>
          <RadioGroup colorScheme="green">
            <Grid
              templateColumns={{ base: "repeat(2,1fr)", md: "repeat(5,1fr)" }}
              gap={2}
              fontSize={{ base: "sm", sm: "sm" }}
            >
              {bnf.map((info, i) => (
                <GridItem
                  key={i}
                  w="100%"
                  display="flex"
                  colSpan={info == "Other" ? "2" : "1"}
                >
                  <Radio key={i} value={info}>
                    {info}
                  </Radio>
                  {info == "Other" ? (
                    <Input placeholder="Other certificate" ml={5} size="sm" />
                  ) : (
                    ""
                  )}
                </GridItem>
              ))}
              <GridItem></GridItem>
            </Grid>
          </RadioGroup>
        </GridItem>

        {/* Q2 */}
        <GridItem w="100%" colSpan={3}>
          <Text className="font-thai" fontWeight="bold">
            3. เงื่อนไขการชำระเงิน / <span>Term of payment</span>
          </Text>
          <GridItem w="100%" colSpan={3} fontSize={{ base: "sm", sm: "sm" }}>
            <Text fontWeight={"bold"} py="10px">
              3.1 Credit Term / <span>ระยะเวลาการให้สินเชื่อ</span>
            </Text>
            <RadioGroup colorScheme="green">
              <Grid
                templateColumns={{ base: "repeat(2,1fr)", md: "repeat(5,1fr)" }}
                gap={2}
                fontSize={{ base: "sm", sm: "sm" }}
              >
                {creditterm.map((info, i) => (
                  <GridItem
                    key={i}
                    w="100%"
                    display="flex"
                    colSpan={info == "Other" ? "2" : "1"}
                  >
                    <Radio key={i} value={info}>
                      {info}
                    </Radio>
                    {info == "Other" ? (
                      <Input placeholder="Other certificate" ml={5} size="sm" />
                    ) : (
                      ""
                    )}
                  </GridItem>
                ))}
                <GridItem></GridItem>
              </Grid>
            </RadioGroup>
          </GridItem>
          <Textarea
            placeholder=" - กรุณาระบุเงื่อนไขการชำระเงินให้ชัดเจน เช่น Credit Terms (วัน) หรือ เงินสดภายในกี่วัน หรือ ต้องการมัดจำจำนวนกี่เปอร์เซ็นต์ (%) / 
Please specify the payment terms clearly such as Credit Terms (days) or how many days to pay with cash or how many percent deposit is required (%)
- ตัวอย่างเช่น วางมัดจำ 30% เมื่อเปิดใบสั่งซื้อ และงวดถัดๆไปมี Credit Terms 60 วัน / 
For example, place a 30% deposit when opening an order. And the next installment has 60 days Credit Terms."
            size="sm"
            rows={5}
          />
        </GridItem>
        <GridItem w="100%" colSpan={{ base: "3", md: "1" }}>
          <Text className="font-thai" fontSize={{ base: "sm", sm: "sm" }}>
            วงเงินอนุมัติ / <span>Approval limit</span>
          </Text>
        </GridItem>
        <GridItem w="100%" colSpan={{ base: "2", md: "1" }}>
          <Input
            fontSize={{ base: "sm", sm: "sm" }}
            w="100%"
            type="number"
            placeholder="กรุณาระบุตัวเลขเท่านั้น / Please enter numbers only"
          />
        </GridItem>
        <GridItem w="100%" fontSize={{ base: "sm", sm: "sm" }}>
          <Select
            placeholder="Select Currency"
            fontSize={{ base: "sm", sm: "sm" }}
          >
            {currencyCodes.map((info, i) => (
              <option key={i}>{info}</option>
            ))}
          </Select>
        </GridItem>

        {/* Q3+4 */}
        {question.map((text, i) => (
          <React.Fragment key={i}>
            <GridItem w="100%" colSpan={3}>
              <Text className="font-thai" fontWeight="bold">
                {text.thai} /<span> {text.eng}</span>
              </Text>
            </GridItem>
            <GridItem w="100%" colSpan={3}>
              <HStack spacing={10} justifyContent="center">
                <input
                  name={text.value}
                  id={`${text.value}No`}
                  type="radio"
                  value="No"
                />
                <label
                  htmlFor={`${text.value}No`}
                  style={{ marginLeft: "10px" }}
                >
                  ไม่มี / No
                </label>
                <input
                  name={text.value}
                  id={`${text.value}Yes`}
                  type="radio"
                  value="Yes"
                />
                <label
                  htmlFor={`${text.value}Yes`}
                  style={{ marginLeft: "10px" }}
                >
                  มี / Yes
                </label>

                <Stack>
                  <Text className="font-thai" fontSize="small">
                    แนบเอกสาร / <span>Attach file</span>
                  </Text>
                  <Input
                    type="file"
                    accept=".pdf"
                    variant="unstyled"
                    size="sm"
                  />
                </Stack>
              </HStack>
            </GridItem>
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
}

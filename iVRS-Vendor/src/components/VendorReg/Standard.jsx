import React, { useState } from "react";
import {
  Text,
  Grid,
  GridItem,
  HStack,
  Stack,
  Input,
  Spacer,
  Checkbox,
  CheckboxGroup,
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
    thai: "4. คุณมีมาตรฐานการบรรจุหรือไม่",
    eng: "Do you have standard packing?",
    value: "stdPacking",
  },
  {
    thai: "5. คุณมีจำนวนการสั่งซื้อขั้นต่ำหรือไม่",
    eng: "Do you have minimum order quantity (MOQ)?",
    value: "moq",
  },
];

export default function Standard({ setCertificate, certificate }) {
  const [moq, setMoq] = useState(false);
  const [std, setStd] = useState(false);

  const handleQuest = (text, value) => {
    if (text == "stdPacking") {
      setCertificate({ ...certificate, stdPacking: value });
      if (value == "Yes") {
        setStd(true);
      } else {
        setStd(false);
      }
    } else {
      setCertificate({ ...certificate, moq: value });
      if (value == "Yes") {
        setMoq(true);
      } else {
        setMoq(false);
      }
    }
  };
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
          <CheckboxGroup colorScheme="green">
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
                  <Checkbox key={i} value={info}>
                    {info}
                  </Checkbox>
                  {info == "Other" ? (
                    <Input placeholder="Other certificate" ml={5} size="sm" />
                  ) : (
                    ""
                  )}
                </GridItem>
              ))}
              <GridItem></GridItem>
            </Grid>
          </CheckboxGroup>
        </GridItem>

        <GridItem w="100%" colSpan={3}>
          <Text className="font-thai" fontWeight="bold">
            2. สิทธิประโยชน์ที่ได้รับ / <span>Benefits</span>
          </Text>
        </GridItem>
        <GridItem w="100%" colSpan={3} fontSize={{ base: "sm", sm: "sm" }}>
          <CheckboxGroup colorScheme="green">
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
                  <Checkbox key={i} value={info}>
                    {info}
                  </Checkbox>
                  {info == "Other" ? (
                    <Input placeholder="Other certificate" ml={5} size="sm" />
                  ) : (
                    ""
                  )}
                </GridItem>
              ))}
              <GridItem></GridItem>
            </Grid>
          </CheckboxGroup>
        </GridItem>

        {/* Q2 */}
        <GridItem w="100%" colSpan={3}>
          <Text className="font-thai" fontWeight="bold">
            3. เงื่อนไขการชำระเงิน / <span>Term of payment</span>
          </Text>
          <GridItem w="100%" colSpan={3} fontSize={{ base: "sm", sm: "sm" }}>
            <Text fontWeight={"bold"} py="10px" px="1.2rem">
              3.1 Credit Term / <span>ระยะเวลาการให้สินเชื่อ</span>
            </Text>
            <RadioGroup colorScheme="green" px="1.2rem">
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
          <Text className="font-thai" fontWeight="bold" px="1.2rem">
            3.2 การวางมัดจำ / <span>Earnest</span>
          </Text>
          <Textarea
            placeholder="- ตัวอย่างเช่น วางมัดจำ 30% เมื่อเปิดใบสั่งซื้อ และงวดถัดๆไปมี Credit Terms 60 วัน / 
For example, place a 30% deposit when opening an order. And the next installment has 60 days Credit Terms."
            size="sm"
            rows={3}
            px="1.2rem"
          />
        </GridItem>
        <GridItem w="100%" colSpan={{ base: "3", md: "1" }}>
          <Text
            className="font-thai"
            fontSize={{ base: "sm", sm: "sm" }}
            fontWeight={"bold"}
            px="1.2rem"
          >
            3.3 วงเงินอนุมัติ / <span>Approval limit</span>
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
                <RadioGroup>
                  <Stack direction="row">
                    <Radio
                      name={text.value}
                      value="No"
                      px="1rem"
                      onChange={(e) => handleQuest(text.value, e.target.value)}
                    >
                      ไม่มี / No
                    </Radio>
                    <Radio
                      value="Yes"
                      name={text.value}
                      onChange={(e) => handleQuest(text.value, e.target.value)}
                    >
                      มี / Yes
                    </Radio>
                  </Stack>
                </RadioGroup>
                <Stack>
                  <Text className="font-thai" fontSize="small">
                    แนบเอกสาร / <span>Attach file</span>
                  </Text>
                  <Input
                    isDisabled={text.value == "stdPacking" ? !std : !moq}
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

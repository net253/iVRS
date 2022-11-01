import React, { useState } from "react";
import {
  Text,
  Grid,
  GridItem,
  HStack,
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
  "ไม่มี",
  "อื่นๆ",
];

const bnf = [
  "BOI",
  "Free Zone",
  "JTEPA",
  "อื่นๆ",
  "ไม่ได้รับ สิทธิประโยชน์ใดๆ",
];
const creditterm = [
  "Cash",
  "7 วัน",
  "15 วัน",
  "30 วัน",
  "45 วัน",
  "60 วัน",
  "75 วัน",
  "90 วัน",
  "120 วัน",
  "150 วัน",
];

export default function Standard() {
  const [checkedItems, setCheckedItems] = useState({});
  const [checkedItemsBenefits, setCheckedItemsBenefits] = useState({});

  function onChangecheckbox(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setCheckedItems({ ...checkedItems, [item]: isChecked });
  }
  function onChangecheckboxBenefits(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setCheckedItemsBenefits({ ...checkedItemsBenefits, [item]: isChecked });
  }

  console.log(checkedItems);
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
                  colSpan={info == "อื่นๆ" ? "2" : "1"}
                >
                  <Checkbox
                    key={i}
                    value={info}
                    name={info}
                    onChange={onChangecheckbox}
                  >
                    {info}
                  </Checkbox>
                  {info == "อื่นๆ" ? (
                    <Input
                      placeholder="โปรดระบุ"
                      ml={5}
                      size="sm"
                      isDisabled={!checkedItems[info]}
                    />
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
                  colSpan={checkedItemsBenefits.อื่นๆ ? "2" : "1"}
                >
                  <Checkbox
                    key={i}
                    value={info}
                    name={info}
                    onChange={onChangecheckboxBenefits}
                  >
                    {info}
                  </Checkbox>
                  {info == "อื่นๆ" ? (
                    <Input
                      placeholder="โปรดระบุ"
                      ml={5}
                      size="sm"
                      display={checkedItemsBenefits[info] ? "block" : "none"}
                      isDisabled={!checkedItemsBenefits[info]}
                    />
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
              3.1 การชำระเงิน การให้เครดิตเทอม / <span>Credit Term</span>
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
                    colSpan={info == "อื่นๆ" ? "2" : "1"}
                  >
                    <Radio key={i} value={info}>
                      {info}
                    </Radio>
                    {info == "อื่นๆ" ? (
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
            placeholder="กรุณาระบบเงื่อนไขการชำระสินค้า เช่น ชำระเงินสด 30% เมื่อยืนยันการสั่งซื้อ และชำระส่วนที่เหลือเมื่อจัดส่งสินค้าเสร็จสมบูรณ์"
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
      </Grid>
    </>
  );
}

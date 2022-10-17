import React from "react";
import { Text, Grid, GridItem, Select, Button } from "@chakra-ui/react";

const optionText = [
  {
    text: "SNC - เอส เอ็น ซี ฟอร์เมอร์ จำกัด",
    value: "SNC",
  },
  {
    text: "CL - เอส เอ็น ซี คูลลิ่ง ซัพพลาย จำกัด",
    value: "CL",
  },
  {
    text: "IMP - อิมมอทัล พาร์ท จำกัด",
    value: "IMP",
  },
  {
    text: "PRD - พาราไดซ์ พลาสติก จำกัด",
    value: "PRD",
  },
  {
    text: "MSPC - บริษัท เมอิโซะ เอส เอ็น ซี พริซิชั่น จำกัด",
    value: "MSPC",
  },
  {
    text: "SPEC - บริษัท เอส เอ็น ซี ไพยองซาน อีโวลูชั่น จำกัด",
    value: "SPEC",
  },
  {
    text: "IPC - อินฟินิตี้ พาร์ท จำกัด",
    value: "IPC",
  },
  {
    text: "SCAN - บริษัท เอส เอ็น ซี ครีเอติวิตี้ แอนโทโลจี จำกัด",
    value: "SCAN",
  },
  {
    text: "SAHP - บริษัท เอส เอ็น ซี แอตแลนติก ฮีต ปัมพ์ จำกัด",
    value: "SAHP",
  },
];
const buttonText = [
  {
    thai: "ภพ.20",
    eng: "Vat License",
    value: "vatLicense",
  },
];
const mapText = [
  {
    thai: "แผนที่บริษัท ระยอง",
    eng: "Rayong Plant Map",
    link: "https://goo.gl/maps/FyiR9kQrQraCTnVJ8",
  },
  {
    thai: "แผนที่บริษัท สมุทรปราการ",
    eng: "Samut Prakan Plant Map",
    link: "https://goo.gl/maps/xnxHYpwLoZQCwi4s7",
  },
];

export default function InputForm() {
  return (
    <>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={4}
        alignItems="center"
        px="10px"
      >
        <GridItem w="100%" colSpan={{ base: "2", md: "1" }}>
          <Text className="font-thai" fontWeight="bold" fontSize={"sm"}>
            เรียน / <span>Attention</span>
          </Text>
        </GridItem>
        <GridItem w="100%" colSpan={{ base: "2", md: "1" }}>
          <Text className="font-thai" fontSize={"sm"}>
            กรรมการผู้จัดการ
          </Text>
        </GridItem>
        <GridItem w="100%" colSpan={{ base: "2", md: "1" }}>
          <Text className="font-thai" fontWeight="bold" fontSize={"sm"}>
            เบอร์แฟกซ์ / <span>Fax No.</span>
          </Text>
        </GridItem>
        <GridItem w="100%" colSpan={{ base: "2", md: "1" }}>
          <Text className="font-thai" fontSize={"sm"}>
            02-108-0367
          </Text>
        </GridItem>

        <GridItem w="100%" fontWeight="bold" colSpan={{ base: "4", lg: "1" }}>
          <Text className="font-thai" fontSize={"sm"}>
            เลือกบริษัทที่ต้องการขึ้นทะเบียน
          </Text>
          <Text fontSize="small">Select the company you want to register.</Text>
        </GridItem>

        {/* Select Form */}
        <GridItem w="100%" colSpan={{ base: "4", lg: "3" }}>
          <Select
            placeholder="Select the company you want to register."
            fontSize={"sm"}
          >
            {optionText.map((info, i) => (
              <option key={i} value={info.value}>
                {info.text}
              </option>
            ))}
          </Select>
        </GridItem>

        {/* Button */}
        <GridItem w="100%" colSpan={{ base: "3", md: "3" }}>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
            gap={3}
          >
            {buttonText.map((info, i) => (
              <GridItem key={i}>
                <Button
                  w="100%"
                  className="font-thai"
                  fontSize={{ base: ".6rem", sm: "sm" }}
                  bgColor="#4adede"
                  shadow="md"
                >
                  {info.thai} <br /> {info.eng}
                </Button>
              </GridItem>
            ))}
            {mapText.map((info, i) => (
              <GridItem key={i}>
                <Button
                  w="100%"
                  className="font-thai"
                  fontSize={{ base: ".6rem", sm: "sm" }}
                  bgColor="#4adede"
                  shadow="md"
                >
                  {info.thai} <br /> {info.eng}
                </Button>
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { Text, Grid, GridItem, Select, Button } from "@chakra-ui/react";
import { docPath } from "../../UrlPath";
import axios from "axios";
import Swal from "sweetalert2";

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
  {
    text: "SAWHA - เอส เอ็น ซี แอตแลนติก วอเตอร์ ฮีตเตอร์ เอเชีย จำกัด",
    value: "SAWHA",
  },
];
const buttonText = [
  {
    thai: "ภพ.20",
    eng: "Vat License",
    value: "vatLicense",
  },
  {
    thai: "หนังสือรับรองบริษัท",
    eng: "Company Affidavit",
    value: "certificate",
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

export default function InputForm({ setReistor, registor }) {
  const dataURItoBlob = (dataURI) => {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: "application/pdf" });
    return blob;
  };

  const handleDownload = (base64) => {
    const blob = dataURItoBlob(base64);
    const url = URL.createObjectURL(blob);

    Swal.close();
    window.open(url, "_blank");
  };

  const getPdf = (value) => {
    // console.log(registor, value);
    Swal.fire({
      title: `<p class="font-thai">กำลังค้นหาข้อมูล </p><span>(Searching information)</span>`,
      html: `<p class="font-thai">กรุณารอสักครู่ ใช้เวลาไม่เกิน 1-2 นาที <br /> <span>(Please wait until processing completed)</span> </p>`,
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    axios
      .post(docPath, { company: registor, document: value })
      .then(({ data: { results } }) => {
        handleDownload(results[value]);
      })
      .catch((err) => console.error("ERROR :" + err));
  };

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={4} alignItems="center">
        <GridItem w="100%" colSpan={{ base: "2", md: "1" }}>
          <Text className="font-thai" fontWeight="bold">
            เรียน / <span>Attention</span>
          </Text>
        </GridItem>
        <GridItem w="100%" colSpan={{ base: "2", md: "1" }}>
          <Text className="font-thai">กรรมการผู้จัดการ</Text>
        </GridItem>
        <GridItem w="100%" colSpan={{ base: "2", md: "1" }}>
          <Text className="font-thai" fontWeight="bold">
            เบอร์แฟกซ์ / <span>Fax No.</span>
          </Text>
        </GridItem>
        <GridItem w="100%" colSpan={{ base: "2", md: "1" }}>
          <Text className="font-thai">02-108-0367</Text>
        </GridItem>

        <GridItem w="100%" fontWeight="bold" colSpan={{ base: "4", lg: "1" }}>
          <Text className="font-thai">เลือกบริษัทที่ต้องการขึ้นทะเบียน</Text>
          <Text fontSize="small">Select the company you want to register.</Text>
        </GridItem>

        {/* Select Form */}
        <GridItem w="100%" colSpan={{ base: "4", lg: "3" }}>
          <Select
            placeholder="Select the company you want to register."
            onChange={({ target: { value: companyRegister } }) =>
              setReistor(companyRegister)
            }
          >
            {optionText.map((info, i) => (
              <option key={i} value={info.value}>
                {info.text}
              </option>
            ))}
          </Select>
        </GridItem>

        {/* Button */}
        <GridItem w="100%" colSpan={{ base: "4", md: "4" }}>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
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
                  isDisabled={!registor}
                  onClick={() => getPdf(info.value)}
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
                  isDisabled={!registor}
                  onClick={() => window.open(info.link, "_blank")}
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

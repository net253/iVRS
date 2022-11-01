import React, { useEffect } from "react";
import { Text, Grid, GridItem, Select, Button } from "@chakra-ui/react";
import Swal from "sweetalert2";
import { fetchcompanylist } from "../../services/feth-api";
import { useStoreCompanylist } from "../../store";

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
  const { companylist, updateCompanylist } = useStoreCompanylist();
  console.log(companylist);
  const getPdf = () => {
    Swal.fire({
      title: `<p class="font-thai">กำลังค้นหาข้อมูล </p><span>(Searching information)</span>`,
      html: `<p class="font-thai">กรุณารอสักครู่ ใช้เวลาไม่เกิน 1-2 นาที <br /> <span>(Please wait until processing completed)</span> </p>`,
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  };

  const getcompanilist = () => {
    // fetchcompanylist().then((data) => {
    //   updateCompanylist(data);
    // });
  };

  //fechh companylist
  useEffect(() => {
    const initPage = setTimeout(() => {
      getcompanilist();
    }, 200);
    const timer = setInterval(() => {
      getcompanilist();
    }, 5000);
    return () => {
      clearTimeout(initPage);
      clearInterval(timer);
    };
  }, []);

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
            {/* {companylist?.map((info, i) => (
              <option key={i} value={info.value}>
                {info.text}
              </option>
            ))} */}
          </Select>
        </GridItem>

        {/* Button */}
        <GridItem w="100%" colSpan={{ base: "3", md: "3" }}>
          <Grid
            templateColumns={{ base: "repeat(3, 1fr)", lg: "repeat(3, 1fr)" }}
            gap={3}
          >
            {buttonText.map((info, i) => (
              <GridItem key={i}>
                <Button
                  w="100%"
                  className="font-thai"
                  fontSize={{ base: ".6rem", sm: "sm" }}
                  bgColor="#c1c1c1"
                  shadow="md"
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
                  bgColor="#c1c1c1"
                  shadow="md"
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

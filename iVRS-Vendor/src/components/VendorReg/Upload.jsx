import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Text,
  Grid,
  GridItem,
  HStack,
  Input,
  Spacer,
  Stack,
  Button,
  Icon,
  FormControl,
  Checkbox,
  Link,
  Box,
} from "@chakra-ui/react";
import { TiTimes, TiMediaPlay } from "react-icons/ti";
import Swal from "sweetalert2";

const textOption = [
  {
    thai: "หมายเหตุ: สำเนา ภพ.20",
    eng: "Copy of Vat License",
    value: "vat",
  },
  {
    thai: "หมายเหตุ: สำเนาหนังสือรับรองบริษัทฉบับล่าสุด",
    eng: "Copy of Lasted Company Affidavit",
    value: "affidavit",
  },
  {
    thai: "แผนที่บริษัท",
    eng: "Company Map",
    value: "map",
  },
  {
    thai: "หมายเหตุ: สำเนาหน้าบัญชีธนาคาร",
    eng: "Copy of Book Bank",
    value: "BookBank",
  },
  {
    thai: "หมายเหตุ: สำเนากรรมการผู้จัดการ",
    eng: "Copy of Managing Director",
    value: "ManagingDirector",
  },
  {
    thai: "หมายเหตุ: สำเนาเอกสารงบการเงินย้อยหลัง 5 ปี",
    eng: "Copy of Lasted 5 Yrs. Financial Document",
    value: "Finance",
  },
  {
    thai: "หมายเหตุ: เอกสารอื่นๆ (ถ้ามี)",
    eng: "Other Document (if any)",
    value: "other",
  },
];

export default function Upload(props) {
  const [accept, setAccept] = useState(false);
  console.log(accept);
  const navigate = useNavigate();
  const [time, setTime] = useState("");
  const [upload, setUpload] = useState({
    vat: "",
    affidavit: "",
    map: "",
    mapLink: "",
    finance: "",
    other: "",
  });
  const [userName, setUserName] = useState("");
  const [check, setCheck] = useState(false);

  const { registor, company, contact, certificate } = props;

  const getTime = () => {
    var dt = new Date();
    var options = {
      hour12: false,
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    const dateTime = dt.toLocaleString("en-GB", options);
    setTime(dateTime);
  };

  const handleCancel = () => {
    Swal.fire({
      icon: "warning",
      title: `<p class="font-thai">ยกเลิกการลงทะเบียนใช่หรือไม่?  <br /> <span>Cancel registration?</span></p>`,
      showCancelButton: true,
      confirmButtonText: `<p class="font-thai">ใช่ / <span>Yes</span></p>`,
      cancelButtonText: `<p class="font-thai">ไม่ใช่ / <span>No</span></p>`,
      confirmButtonColor: "red",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };

  const handleNext = () => {
    Swal.fire({
      icon: "warning",
      title: `<p class="font-thai">ยืนยันการลงทะเบียนใช่หรือไม่?  <br /> <span>Confirm registration?</span></p>`,
      showCancelButton: true,
      confirmButtonText: `<p class="font-thai">ใช่ / <span>Yes</span></p>`,
      cancelButtonText: `<p class="font-thai">ไม่ใช่ / <span>No</span></p>`,
      confirmButtonColor: "green",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: `<p class="font-thai">บันทึกสำเร็จ / <span>Success</span></p>`,
          timer: 2000,
          showConfirmButton: false,
        }).then(() => navigate("/paymethod"));
      }
    });
  };

  const handleUpload = (text, file) => {
    if (text == "vat") {
      setUpload({ ...upload, vat: file });
    } else if (text == "affidavit") {
      setUpload({ ...upload, affidavit: file });
    } else if (text == "map") {
      setUpload({ ...upload, map: file });
    } else if (text == "finance") {
      setUpload({ ...upload, finance: file });
    } else {
      setUpload({ ...upload, other: file });
    }
  };

  const handlePdf = async () => {};

  const handleState = () => {
    if (registor == "") {
      handleError(`<b class="font-thai">กรุณาเลือกบริษัทที่ต้องการขึ้นทะเบียน <br />
        <span>Please select the company you want to register.</span></b>`);
    } else if (
      company.thaiCompany == "" ||
      company.engCompany == "" ||
      company.thaiAddress == "" ||
      company.engAddress == "" ||
      company.natureBusiness == "" ||
      company.companyWeb == "" ||
      company.tel == "" ||
      company.fax == ""
    ) {
      handleError(`<b class="font-thai">กรุณากรอกรายละเอียดบริษัทให้ครบถ้วน <br />
        <span>Please complete the company details.</span></b>`);
    } else if (
      contact.salesName == "" ||
      contact.salesEmail == "" ||
      contact.salesTel == "" ||
      contact.salesVEmail == "" ||
      contact.salesVTel == ""
    ) {
      handleError(`<b class="font-thai">กรุณากรอกรายละเอียดบุคคลติดต่อให้ครบถ้วน <br />
        <span>Please complete the contact person.</span></b>`);
    } else if (
      contact.salesVEmail != contact.salesEmail ||
      contact.salesVTel != contact.salesTel ||
      contact.managerVEmail != contact.managerEmail ||
      contact.managerVTel != contact.managerTel ||
      contact.othersVEmail != contact.othersEmail ||
      contact.othersVTel != contact.othersTel
    ) {
      handleError(`<b class="font-thai">กรุณาตรวจสอบรายละเอียดบุคคลติดต่อให้ถูกต้อง <br />
        <span>Please make sure your contact details are correct.</span></b>`);
    } else if (
      certificate.cerArray.length == 0 ||
      certificate.payment == "" ||
      certificate.limit == "" ||
      certificate.currency == "" ||
      certificate.stdPacking == "" ||
      certificate.moq == ""
    ) {
      handleError(`<b class="font-thai">กรุณากรอกรายละเอียดมาตรฐานและการรองรับให้ครบถ้วน <br />
        <span>Please complete the current standards and certifications.</span></b>`);
    } else if (upload.map == "") {
      handleError(`<b class="font-thai">กรุณาอัพโหลดเอกสารให้ครบถ้วน <br />
        <span>Please upload documents.</span></b>`);
    } else if (upload.mapLink == "") {
      handleError(`<b class="font-thai">กรุณาใส่ลิ้งค์แผนที่บริษัท <br />
        <span>Please enter a google map link.</span></b>`);
    } else {
      handlePdf();
    }
    // handlePdf();
  };

  const handleError = (text) => {
    Swal.fire({
      icon: "warning",
      html: text,
      timer: 4000,
      showConfirmButton: false,
    });
  };

  useEffect(() => {
    const initPage = setTimeout(() => {
      getTime();
    }, 100);
    const timer1m = setInterval(() => {
      getTime();
    }, 3600000);

    return () => {
      clearTimeout(initPage);
      clearInterval(timer1m);
    };
  }, []);

  return (
    <>
      <HStack mt={5} px="10px">
        <Text
          className="font-thai"
          fontWeight="bold"
          fontSize={{ base: "sm", sm: "md" }}
        >
          อัพโหลดเอกสาร / <span>Upload Documents</span>
        </Text>
        <Text color="red">
          หมายเหตุ: รองรับไฟล์ PDF ขนาดไม่เกิน 900KB เท่านั้น (Maximum PDF size
          is 900KB)
        </Text>
        <Spacer />
        <Text fontWeight="light" fontSize="sm">
          Step 6 of 6
        </Text>
      </HStack>

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={3}
        borderTop="2px"
        borderColor="blackAlpha.600"
        py={3}
        my={1}
        fontSize={{ base: "sm", sm: "sm" }}
        px="10px"
      >
        {/* Upload */}
        <GridItem
          w="100%"
          fontWeight="bold"
          borderRight={{ base: "", md: "2px" }}
          borderColor="blackAlpha.600"
          px={2}
        >
          <Box>
            <Checkbox
              onChange={(e) => {
                setAccept(e.target.checked);
              }}
              alignItems={"start"}
              py="2rem"
            >
              <Text className="font-thai" fontSize={"sm"} textAlign={"start"}>
                เอกสารสำเนาทุกฉบับจะต้อง
                ลงรายมือชื่อรับรองสำเนาถูกต้องโดยผู้มีอำนาจตามกฎหมาย
                และประทับตราบริษัททุกครั้ง{" "}
                <span>
                  (Certified true copy by legal authority person and affixed
                  with company seal all copy documents)
                </span>
              </Text>
            </Checkbox>
          </Box>
          {textOption.map((info, i) => (
            <Stack key={i} mb={8}>
              <Text className="font-thai">
                {i + 1}. {info.thai} /<span> {info.eng}</span>
              </Text>
              <Input
                type="file"
                accept=".pdf"
                variant="unstyled"
                size="sm"
                // isDisabled={!accept}
                bgColor={upload[info.value] ? "green.100" : "white"}
                onChange={(e) => handleUpload(info.value, e.target.files)}
              />
              {info.thai == "แผนที่บริษัท" ? (
                <Input
                  placeholder="Google Map Link => https://goo.gl/maps/DbHkSj8ZUHu88p9M7"
                  size="sm"
                  mt={3}
                  w="80%"
                  onChange={({ target: { value: mapLink } }) =>
                    setUpload({ ...upload, mapLink })
                  }
                />
              ) : (
                ""
              )}
            </Stack>
          ))}
        </GridItem>

        {/* Certify */}
        <GridItem w="100%" px={5} textAlign="center">
          <Text className="font-thai" fontSize="sm">
            ข้าพเจ้าขอรับรองว่าข้อความและเอกสารข้างต้นเป็นความจริงทุกประการ
          </Text>
          <Text>
            I certify that the information are true and correct in all respects.
          </Text>

          <FormControl
            onKeyPress={({ key }) => {
              if (key === "Enter") {
                handleNext();
              }
            }}
          >
            <Checkbox
              py="1rem"
              onChange={() => setCheck(!check)}
              alignItems={"start"}
            >
              <Text fontSize="sm" textAlign={"start"}>
                ข้าพเจ้าได้ศึกษาและยอมรับ{" "}
                <Link
                  color={"blue"}
                  href="https://www.sncformer.com/th/privacy-policy"
                  target="_blank"
                >
                  นโยบายการคุ้มครองข้อมูลส่วนบุคคล
                </Link>{" "}
                <br />
                ของทางบริษัท เอส เอ็น ซี ฟอร์เมอร์ จำกัด (มหาชน)
                และบริษัทในเครือเรียบร้อยแล้ว
              </Text>
            </Checkbox>

            <Input
              variant="filled"
              textAlign="center"
              placeholder="กรุณาระบุคำนำหน้า / Please specify name title"
              my={5}
              fontSize={"sm"}
              onChange={({ target: { value: name } }) => setUserName(name)}
            />
          </FormControl>
          <Text>(ผู้ให้ข้อมูล)</Text>
          <Text mb={8} mt={2}>
            วันที่ {time}
          </Text>

          {/* Button */}
          <HStack justifyContent="center" gap={8}>
            <Button
              w={{ base: "50%", md: "40%" }}
              rightIcon={<Icon as={TiTimes} />}
              colorScheme="red"
              rounded="xl"
              className="font-thai"
              px={15}
              onClick={() => handleCancel()}
            >
              ยกเลิก / Cancel
            </Button>

            <Button
              px={8}
              w={{ base: "55%", md: "40%" }}
              rightIcon={<Icon as={TiMediaPlay} />}
              colorScheme="green"
              rounded="xl"
              className="font-thai"
              onClick={() => handleState()}
              disabled={!check || userName == ""}
            >
              ยืนยันขึ้นทะเบียน / Confirm
            </Button>
          </HStack>
          <Text py="2rem" textAlign={"start"}>
            <span className="customers">หมายเหตุ:</span> หลังจากที่ท่านกด
            &quot;ยืนยันการขึ้นทะเบียน&quot; เรียบร้อยแล้ว
            ท่านสามารถติดตามผลการขึ้นทะเบียนได้จากสถานะเอกสารในหน้า{""}
            <Link
              color={"blue"}
              onClick={() => {
                navigate("/Home");
              }}
              target="_blank"
            >
              Home Page
            </Link>{" "}
            หรือทาง Email ที่ท่านแจ้งไว้
          </Text>
        </GridItem>
      </Grid>
    </>
  );
}

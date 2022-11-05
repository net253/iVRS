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
//import { convertPdfToBase64 } from "../../libs/Base64";
import useFormDetail from "../../store/forminput/forminput";
import { fetchuploadform } from "../../services/feth-api";
import { validatevendorRegister } from "../Validateupload";

const textOption = [
  {
    thai: "หมายเหตุ: สำเนา ภพ.20",
    eng: "Copy of Vat License",
    value: "VatLicenseBase64",
  },
  {
    thai: "หมายเหตุ: สำเนาหนังสือรับรองบริษัทฉบับล่าสุด",
    eng: "Copy of Lasted Company Affidavit",
    value: "AffidavitBase64",
  },
  {
    thai: "แผนที่บริษัท",
    eng: "Company Map",
    value: "MapBase64",
  },
  {
    thai: "หมายเหตุ: สำเนาหน้าบัญชีธนาคาร",
    eng: "Copy of Book Bank",
    value: "BookBankBase64",
  },
  {
    thai: "หมายเหตุ: สำเนากรรมการผู้จัดการ",
    eng: "Copy of Managing Director",
    value: "BookMDBase64",
  },
  {
    thai: "หมายเหตุ: สำเนาเอกสารงบการเงินย้อยหลัง 5 ปี",
    eng: "Copy of Lasted 5 Yrs. Financial Document",
    value: "FiStmtsBase64",
  },
  {
    thai: "หมายเหตุ: เอกสารอื่นๆ (ถ้ามี)",
    eng: "Other Document (if any)",
    value: "OtherBase64",
  },
];

export default function Upload() {
  const [accept, setAccept] = useState(false);
  const { updatepdfDoc, FormDetail, updateisDraft } = useFormDetail();
  console.log(accept);
  const navigate = useNavigate();
  const [time, setTime] = useState("");

  const [upload, setUpload] = useState({
    VatLicenseBase64: "",
    AffidavitBase64: "",
    MapBase64: "",
    BookBankBase64: "",
    BookMDBase64: "",
    FiStmtsBase6: "",
    OtherBase64: "",
  });
  const [check, setCheck] = useState(false);

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
    updateisDraft(false);
    const { isValid, error } = validatevendorRegister(FormDetail);
    if (!isValid) {
      Swal.fire({
        icon: "error",
        title: `<p class="font-sweetalert" >${error}</p>`,
        confirmButtonText: `<p>ตกลง</span></p>`,
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: `<p class="font-sweetalert">ยืนยันการลงทะเบียนใช่หรือไม่?  <br /> <span>Confirm registration?</span></p>`,
        showCancelButton: true,
        confirmButtonText: `<p class="font-sweetalert">ใช่ / <span>Yes</span></p>`,
        cancelButtonText: `<p class="font-sweetalert">ไม่ใช่ / <span>No</span></p>`,
        confirmButtonColor: "green",
      }).then((result) => {
        if (result.isConfirmed) {
          //sweealert loading here
          Swal.fire({
            title: `<p class="font-sweetalert">กำลังลงทะเบียน <br /> <span>
            Registering</span></p>`,
            didOpen: () => {
              Swal.showLoading();
            },
          });
          fetchuploadform(FormDetail).then((data) => {
            if (data.state) {
              Swal.fire({
                icon: "success",
                title: `<p class="font-sweetalert">ลงทะเบียนสำเร็จ <br /> <span>
                Successful registration</span></p>`,
                isConfirmed: false,
              }).then((result) => {
                if (result.isConfirmed) {
                  //navigate("/Home");
                }
              });
            } else {
              Swal.fire({
                icon: "error",
                title: `<p class="font-sweetalert">ลงทะเบียนไม่สำเร็จ <br /> <span>
                Failed to register</span></p>`,
              });
            }
          });
        }
      });
    }
  };

  const handleUpload = async (text, e) => {
    const file = e.target.files[0];
    if (text == "VatLicenseBase64") {
      setUpload({ ...upload, VatLicenseBase64: file });
    } else if (text == "AffidavitBase64") {
      setUpload({ ...upload, AffidavitBase64: file });
    } else if (text == "MapBase64") {
      setUpload({ ...upload, MapBase64: file });
    } else if (text == "BookBankBase64") {
      setUpload({ ...upload, BookBankBase64: file });
    } else if (text == "BookMDBase64") {
      setUpload({ ...upload, BookMDBase64: file });
    } else if (text == "FiStmtsBase64") {
      setUpload({ ...upload, FiStmtsBase64: file });
    } else {
      setUpload({ ...upload, OtherBase64: file });
    }
    // validate pdf size < 1MB
    if (file.size > 1000000) {
      Swal.fire({
        icon: "error",
        title: `<p class="font-thai">ขนาดไฟล์เกิน 1 MB <br /> <span>File size exceeds 1 MB</span></p>`,
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        //clear file
        e.target.value = "";
        setUpload({ ...upload, [text]: "" });
      });
    } else {
      const base64 = await convertBase64(file);
      setUpload({ ...upload, [text]: base64 });
      updatepdfDoc(text, base64);
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  useEffect(() => {
    getTime();
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
                isDisabled={!accept}
                bgColor={upload[info.value] ? "green.100" : "white"}
                onChange={(e) => handleUpload(info.value, e)}
              />
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
              isDisabled={!check}
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
              onClick={() => handleNext()}
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

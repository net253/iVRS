import React from "react";
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
} from "@chakra-ui/react";
import { TiTimes, TiMediaPlay } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";

const textOption = [
  {
    thai: "หน้า BookBank",
    eng: "Bookbank",
    value: "bookbank",
  },
];

const Uploadfile = (props) => {
  const dispatch = useDispatch();
  const payment = useSelector((state) => state.payment);
  const vendor = useSelector((state) => state.vendor);
  const { bankAccount } = props;
  const handleState = () => {
    const {
      accountName,
      accountNo,
      bank,
      branch,
      contact,
      tel,
      email,
      VTel,
      VEmail,
      otherBank,
    } = bankAccount;

    if (
      accountName == "" ||
      accountNo == "" ||
      bank == "" ||
      branch == "" ||
      contact == "" ||
      tel == "" ||
      email == ""
    ) {
      handleError(`<b class="font-thai">กรุณากรอกข้อมูลบัญชีธนาคารให้ครบถ้วน <br />
        <span>Please complete the bank account information.</span></b>`);
    } else if (bank == "อื่นๆ / Others" && otherBank == "") {
      handleError(
        `<b class="font-thai">กรุณาใส่ชื่อธนาคาร <br /><span>Please enter bank name.</span></b>`
      );
    } else if (VTel != tel || VEmail != email) {
      handleError(
        `<b class="font-thai">กรุณายืนยันเบอร์ติดต่อและอีเมลให้ถูกต้อง <br /><span>Please make sure your contact number and email address are correct.</span></b>`
      );
    } else {
      const formVendor = {
        ...vendor,
        bankAccount: [
          {
            accountName: accountName,
            accountNo: accountNo,
            bank: bank,
            otherBank: otherBank,
            branch: branch,
            contact: contact,
            tel: tel,
            email: email,
          },
        ],
        level: "0",
        status: "pending",
      };

      handleConfirm(formVendor);
    }
  };

  const handleConfirm = (formVendor) => {
    Swal.fire({
      icon: "warning",
      title: `<p class="font-thai">ยืนยันการบันทึกข้อมูล?  <br /> <span>Confirm to save data?</span></p>`,
      showCancelButton: true,
      confirmButtonText: `<p class="font-thai">ใช่ / <span>Yes</span></p>`,
      cancelButtonText: `<p class="font-thai">ไม่ใช่ / <span>No</span></p>`,
      confirmButtonColor: "green",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Upload Information.");
        Swal.fire({
          title: `<p class="font-thai">กำลังบันทึกข้อมูล </p><span>(Saving information)</span>`,
          html: `<p class="font-thai">กรุณารอสักครู่ ใช้เวลาไม่เกิน 2 นาที <br /> <span>(Please wait until processing completed)</span> </p>`,
          allowEscapeKey: false,
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });
        axios.post(regisPath, { ...formVendor }).then(({ data }) => {
          if (data.state) {
            insertPDF({ ...formVendor, number: data.number });
          } else {
            Swal.fire({
              icon: "error",
              title: data.message,
              showConfirmButton: false,
              timer: 5000,
            });
          }
        });
      }
    });
  };
  const handleCancel = () => {
    Swal.fire({
      icon: "error",
      title: `<p class="font-thai">ยกเลิกการบันทึกใช่หรือไม่?  <br /> <span>Cancel?</span></p>`,
      showCancelButton: true,
      confirmButtonText: `<p class="font-thai">ใช่ / <span>Yes</span></p>`,
      cancelButtonText: `<p class="font-thai">ไม่ใช่ / <span>No</span></p>`,
      confirmButtonColor: "red",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: `<p class="font-thai">ยกเลิกสำเร็จ / <span>Cancel success</span></p>`,
          showConfirmButton: false,
          timer: 2000,
        }).then(() => navigate("/"));
      }
    });
  };

  return (
    <>
      <HStack mt={5}>
        <Text
          className="font-thai"
          fontWeight="bold"
          fontSize={{ base: "sm", sm: "xl" }}
        >
          อัพโหลดเอกสาร / <span>Upload Documents</span>
        </Text>
        <Text color="red">
          *หมายเหตุ: ไฟล์ PDF ที่มีขนาดมากกว่า 900KB กรุณาส่งทางอีเมล
          (Sittipong-hit@sncformer.com)
        </Text>
        <Spacer />
        <Text fontWeight="light" fontSize="sm">
          Step 5 of 6
        </Text>
      </HStack>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={3}
        alignItems="center"
        borderTop="2px"
        borderColor="blackAlpha.600"
        py={3}
        my={1}
        fontSize={{ base: "sm", sm: "md" }}
      >
        <GridItem
          w="100%"
          fontWeight="bold"
          borderRight={{ base: "", md: "2px" }}
          borderColor="blackAlpha.600"
          px={2}
        >
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
                onChange={(e) => handleUpload(info.value, e.target.files)}
              />
              <Text color="red">*หมายเหตุ: ต้องมีการเซ็นรับรอง</Text>
            </Stack>
          ))}
        </GridItem>
        <GridItem>
          <Text
            className="font-thai"
            fontSize={{ base: "sm", sm: "md" }}
            mt={5}
          >
            ทางบริษัทฯ
            ขอขอบคุณในการให้ร่วมมือจากท่านและหวังเป็นอย่างยิ่งว่าจะได้ร่วมงานกับท่านด้วยดีเช่นนี้ต่อไป
          </Text>

          {/* Button */}
          <HStack justifyContent="end" gap={8} mb={8} mt={4}>
            <Button
              w={{ base: "50%", md: "20%" }}
              rightIcon={<Icon as={TiTimes} />}
              colorScheme="red"
              rounded="xl"
              className="font-thai"
              onClick={() => handleCancel()}
            >
              ยกเลิก / Cancel
            </Button>

            <Button
              w={{ base: "50%", md: "20%" }}
              rightIcon={<Icon as={TiMediaPlay} />}
              colorScheme="green"
              rounded="xl"
              className="font-thai"
              onClick={() => handleState()}
            >
              ยืนยัน / Confirm
            </Button>
          </HStack>
        </GridItem>
      </Grid>
    </>
  );
};

export default Uploadfile;

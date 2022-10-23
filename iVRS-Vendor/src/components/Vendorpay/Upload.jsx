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
} from "@chakra-ui/react";
import { TiTimes, TiMediaPlay } from "react-icons/ti";
import Swal from "sweetalert2";

const textOption = [
  {
    thai: "หน้า BookBank",
    eng: "Bookbank",
    value: "bookbank",
  },
];

const Upload = ({ bankAccount }) => {
  const handleError = (text) => {
    Swal.fire({
      icon: "warning",
      html: text,
      timer: 4000,
      showConfirmButton: false,
    });
  };

  const handleState = () => {
    if (bankAccount == "") {
      handleError(`<b class="font-thai">กรุณาเลือกบริษัทที่ต้องการขึ้นทะเบียน <br />
      <span>Please select the company you want to register.</span></b>`);
    } else if (
      bankAccount.accountName == "" ||
      bankAccount.accountNo == "" ||
      bankAccount.bank == "" ||
      bankAccount.otherBank == "" ||
      bankAccount.branch == "" ||
      bankAccount.contract == "" ||
      bankAccount.tel == "" ||
      bankAccount.VTel == "" ||
      bankAccount.email == "" ||
      bankAccount.Vemail == ""
    ) {
      console.log("no");
      handleError(`<b class="font-thai">กรุณากรอกรายละเอียดบริษัทให้ครบถ้วน <br />
      <span>Please complete the company details.</span></b>`);
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
        fontSize={{ base: "sm", sm: "sm" }}
        px="10px"
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
              <Input type="file" accept=".pdf" variant="unstyled" size="sm" />
              <Text color="red">*หมายเหตุ: ต้องมีการเซ็นรับรอง</Text>
            </Stack>
          ))}
        </GridItem>
        <GridItem>
          <Text
            className="font-thai"
            fontSize={{ base: "sm", sm: "sm" }}
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
            >
              ยกเลิก / Cancel
            </Button>

            <Button
              w={{ base: "50%", md: "20%" }}
              rightIcon={<Icon as={TiMediaPlay} />}
              colorScheme="green"
              rounded="xl"
              onClick={handleState}
            >
              ยืนยัน / Confirm
            </Button>
          </HStack>
        </GridItem>
      </Grid>
    </>
  );
};

export default Upload;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Text,
  Grid,
  GridItem,
  HStack,
  Input,
  Spacer,
  Select,
  Button,
  Icon,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { TiTimes, TiMediaPlay } from "react-icons/ti";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import Swal from "sweetalert2";
import { updateShowPayment } from "../../store/slices/showPaymentSlice";

import axios from "axios";
import { regisPath, pdfPath } from "../../UrlPath";

const bankList = [
  "ธนาคารกสิกรไทย / Kasikornbank Public Company Limited",
  "ธนาคารแห่งประเทศไทย / Bank of Thailand",
  "ธนาคารกรุงเทพ /  Bangkok Bank Public Company Limited",
  "ธนาคารกรุงไทย / Krung Thai Bank Public Company Limited",
  "ธนาคารทหารไทยธนชาต / TMBThanachart Bank Public Company Limited",
  "ธนาคารไทยพาณิชย์ / The Siam Commercial Bank Public Company Limited",
  "ธนาคารกรุงศรีอยุธยา /  Bank of Ayudhya Public Company Limited",
  "ธนาคารเกียรตินาคินภัทร / KIATNAKIN PHATRA Bank Public Company Limited",
  "ธนาคารซีไอเอ็มบีไทย / CIMB Thai Bank Public Company Limited",
  "ธนาคารทิสโก้ / TISCO Bank Public Company Limited",
  "ธนาคารยูโอบี / United Overseas Bank (Thai) Public Company Limited ",
  "ธนาคารไทยเครดิตเพื่อรายย่อย / Thai Credit Retail Bank",
  "ธนาคารแลนด์ แอนด์ เฮ้าส์ / Land and Houses Public Company Limited",
  "ธนาคารไอซีบีซี (ไทย) / ICBC (Thai) Leasing Company Limited",
  "ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย",
  "ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร /  Bank for Agriculture and Agricultural Cooperatives",
  "ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย / Export-Import Bank of Thailand",
  "ธนาคารออมสิน / The Government Savings Bank.",
  "ธนาคารอาคารสงเคราะห์ / Government Housing Bank",
  "ธนาคารอิสลามแห่งประเทศไทย / Islamic Bank of Thailand",
  "ธนาคารเมกะ สากลพาณิชย์ / MEGA INTERNATIONAL COMMERCIAL BANK PUBLIC.",
  "ธนาคารแห่งประเทศจีน / Bank of China",
  "ธนาคารเอเอ็นแซด (ไทย) / ANZ BANK (THAI) PUBLIC COMPANY LIMITED.",
  "ธนาคารซูมิโตโม มิตซุย ทรัสต์ (ไทย) / SUMITOMO MITSUI TRUST BANK (THAI) PUBLIC COMPANY LIMITED",
  "ธนาคารสแตนดาร์ดชาร์เตอร์ด (ไทย) / Standard Chartered (Thai)",
  "ธนาคารซิตี้แบงก์ / Citibank",
  "อื่นๆ / Others",
];

export default function Account({ bankAccount, setBankAccount }) {
  console.log(bankAccount);
  const dispatch = useDispatch();
  const payment = useSelector((state) => state.payment);
  const vendor = useSelector((state) => state.vendor);
  const navigate = useNavigate();

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

  const handleError = (text) => {
    Swal.fire({
      icon: "warning",
      html: text,
      timer: 4000,
      showConfirmButton: false,
    });
  };

  const getPage = () => {
    if (!payment) {
      navigate("/vendor");
    }
  };

  useEffect(() => {
    const initPage = setTimeout(() => {
      // getPage();
    }, 100);
    return () => {
      clearTimeout(initPage);
    };
  }, [payment]);

  return (
    <>
      <HStack mt={5}>
        <Text
          className="font-thai"
          fontWeight="bold"
          fontSize={{ base: "sm", sm: "xl" }}
        >
          ข้อมูลบัญชีธนาคาร / <span>Bank Account Information</span>
        </Text>
        <Spacer />
        <Text fontWeight="light" fontSize="sm">
          Step 5 of 6
        </Text>
      </HStack>

      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
        gap={3}
        alignItems="center"
        borderTop="2px"
        borderColor="blackAlpha.600"
        p={4}
        my={1}
        fontSize={{ base: "sm", sm: "md" }}
      >
        <GridItem w="100%">
          <Text className="font-thai">ชื่อบัญชี / Account Name</Text>
        </GridItem>
        <GridItem w="100%" colSpan={2}>
          <Input
            variant="filled"
            placeholder="ชื่อบัญชี / Account Name"
            size="sm"
            onChange={({ target: { value: accountName } }) =>
              setBankAccount({ ...bankAccount, accountName })
            }
          />
        </GridItem>

        <GridItem w="100%">
          <Text className="font-thai">เลขบัญชี / Account No.</Text>
        </GridItem>
        <GridItem w="100%" colSpan={2}>
          <Input
            variant="filled"
            placeholder="กรุณาระบุตัวเลขเท่านั้น / Please enter numbers only."
            size="sm"
            onChange={({ target: { value: accountNo } }) =>
              setBankAccount({ ...bankAccount, accountNo })
            }
          />
        </GridItem>

        <GridItem w="100%">
          <Text className="font-thai">ธนาคาร / Bank</Text>
        </GridItem>
        <GridItem w="100%" colSpan={2}>
          <Select
            placeholder="กรุณาระบุธนาคาร / Please enter Bank."
            size="sm"
            variant="filled"
            onChange={({ target: { value: bank } }) =>
              setBankAccount({ ...bankAccount, bank })
            }
          >
            {bankList.map((info, i) => (
              <option value={info} key={i}>
                {info}
              </option>
            ))}
          </Select>

          {bankAccount.bank == "อื่นๆ / Others" ? (
            <Input
              mt={2}
              variant="filled"
              placeholder="กรุณาระบุธนาคาร / Please enter Bank."
              size="sm"
              onChange={({ target: { value: otherBank } }) =>
                setBankAccount({ ...bankAccount, otherBank })
              }
            />
          ) : (
            ""
          )}
        </GridItem>

        <GridItem w="100%">
          <Text className="font-thai">สาขา / Branch</Text>
        </GridItem>
        <GridItem w="100%" colSpan={2}>
          <Input
            variant="filled"
            placeholder="สาขา / Branch"
            size="sm"
            onChange={({ target: { value: branch } }) =>
              setBankAccount({ ...bankAccount, branch })
            }
          />
        </GridItem>

        <GridItem w="100%">
          <Text className="font-thai">ชื่อผู้ติดต่อ / Contact Person</Text>
        </GridItem>
        <GridItem w="100%" colSpan={2}>
          <Input
            variant="filled"
            placeholder="กรุณาระบุคำนำหน้า / Please specify name title"
            size="sm"
            onChange={({ target: { value: contact } }) =>
              setBankAccount({ ...bankAccount, contact })
            }
          />
        </GridItem>

        <GridItem w="100%" colSpan={{ base: "2", md: "1" }}>
          <Text className="font-thai">เบอร์โทรศัพท์ / Tel No.</Text>
        </GridItem>
        <GridItem w="100%">
          <Input
            variant="filled"
            placeholder="เบอร์โทรศัพท์ / Tel No."
            size="sm"
            type="number"
            onChange={({ target: { value: tel } }) =>
              setBankAccount({ ...bankAccount, tel })
            }
          />
        </GridItem>
        <GridItem w="100%">
          <InputGroup>
            <Input
              variant="filled"
              placeholder="ยืนยันเบอร์โทรศัพท์ / Verify Tel No."
              size="sm"
              type="number"
              onChange={({ target: { value: VTel } }) =>
                setBankAccount({ ...bankAccount, VTel })
              }
            />
            <InputRightElement
              children={
                bankAccount.VTel != "" &&
                bankAccount.VTel == bankAccount.tel ? (
                  <CheckIcon color="green.500" />
                ) : (
                  ""
                )
              }
            />
          </InputGroup>
        </GridItem>

        <GridItem w="100%" colSpan={{ base: "2", md: "1" }}>
          <Text className="font-thai">อีเมล / E-mail</Text>
        </GridItem>
        <GridItem w="100%">
          <Input
            variant="filled"
            placeholder="อีเมล / E-mail"
            size="sm"
            type="email"
            onChange={({ target: { value: email } }) =>
              setBankAccount({ ...bankAccount, email })
            }
          />
        </GridItem>
        <GridItem w="100%">
          <InputGroup>
            <Input
              variant="filled"
              placeholder="ยืนยันอีเมล / Verify E-mail"
              size="sm"
              type="email"
              onChange={({ target: { value: VEmail } }) =>
                setBankAccount({ ...bankAccount, VEmail })
              }
            />
            <InputRightElement
              children={
                bankAccount.VEmail != "" &&
                bankAccount.VEmail == bankAccount.email ? (
                  <CheckIcon color="green.500" />
                ) : (
                  ""
                )
              }
            />
          </InputGroup>
        </GridItem>
      </Grid>
    </>
  );
}

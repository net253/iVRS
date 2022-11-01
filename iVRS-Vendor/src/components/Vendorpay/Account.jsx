import React from "react";
import {
  Text,
  Grid,
  GridItem,
  HStack,
  Input,
  Spacer,
  Select,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import Paycpn from "./paylist/paycomponents";
import { CheckCircleIcon } from "@chakra-ui/icons";

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

const Account = ({ setBankAccount, bankAccount }) => {
  return (
    <div>
      <HStack mt={5} px="10px">
        <Text
          className="font-thai"
          fontWeight="bold"
          fontSize={{ base: "sm", sm: "md" }}
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
        fontSize={{ base: "sm", sm: "sm" }}
        px="10px"
      >
        <GridItem w="100%">
          <Text className="font-thai" fontWeight="bold">
            1. ข้อมูลบัญชีธนาคาร / Bank Account Information
          </Text>
        </GridItem>
        <GridItem w="100%" colSpan={2}></GridItem>
        <GridItem w="100%" px="10px">
          <Text className="font-thai">ชื่อบัญชี / Account Name</Text>
        </GridItem>
        <GridItem w="100%" colSpan={2}>
          <Input
            placeholder="ชื่อบัญชี / Account Name"
            size="sm"
            onChange={({ target: { value: accountName } }) =>
              setBankAccount({ ...bankAccount, accountName })
            }
          />
        </GridItem>

        <GridItem w="100%" px="10px">
          <Text className="font-thai">เลขบัญชี / Account No.</Text>
        </GridItem>
        <GridItem w="100%" colSpan={2}>
          <Input
            placeholder="กรุณาระบุตัวเลขเท่านั้น / Please enter numbers only."
            size="sm"
            onChange={({ target: { value: accountNo } }) =>
              setBankAccount({ ...bankAccount, accountNo })
            }
          />
        </GridItem>

        <GridItem w="100%" px="10px">
          <Text className="font-thai">ธนาคาร / Bank</Text>
        </GridItem>
        <GridItem w="100%" colSpan={2}>
          <Select
            placeholder="กรุณาระบุธนาคาร / Please enter Bank."
            size="sm"
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

        <GridItem w="100%" px="10px">
          <Text className="font-thai">สาขา / Branch</Text>
        </GridItem>
        <GridItem w="100%" colSpan={2}>
          <Input
            placeholder="สาขา / Branch"
            size="sm"
            onChange={({ target: { value: branch } }) =>
              setBankAccount({ ...bankAccount, branch })
            }
          />
        </GridItem>

        <GridItem w="100%" px="10px">
          <Text className="font-thai">ชื่อผู้ติดต่อ / Contact Person</Text>
        </GridItem>
        <GridItem w="100%" colSpan={2}>
          <Input
            placeholder="กรุณาระบุคำนำหน้า / Please specify name title"
            size="sm"
            onChange={({ target: { value: contact } }) =>
              setBankAccount({ ...bankAccount, contact })
            }
          />
        </GridItem>

        <GridItem w="100%" colSpan={{ base: "2", md: "1" }} px="10px">
          <Text className="font-thai">เบอร์โทรศัพท์ / Tel No.</Text>
        </GridItem>
        <GridItem w="100%">
          <Input
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
              placeholder="ยืนยันเบอร์โทรศัพท์ / Verify Tel No."
              size="sm"
              type="number"
              onChange={({ target: { value: VTel } }) =>
                setBankAccount({ ...bankAccount, VTel })
              }
            />
          </InputGroup>
        </GridItem>

        <GridItem w="100%" colSpan={{ base: "2", md: "1" }} px="10px">
          <Text className="font-thai">อีเมล / E-mail</Text>
        </GridItem>
        <GridItem w="100%">
          <InputGroup size="sm">
            <Input
              placeholder="อีเมล / E-mail"
              type="email"
              onChange={({ target: { value: email } }) =>
                setBankAccount({ ...bankAccount, email })
              }
            />
            {bankAccount.VEmail != "" &&
            bankAccount.VEmail == bankAccount.email ? (
              <InputRightElement>
                <CheckCircleIcon color="green.500" />
              </InputRightElement>
            ) : (
              ""
            )}
          </InputGroup>
        </GridItem>
        <GridItem w="100%">
          <InputGroup size="sm">
            <Input
              placeholder="ยืนยันอีเมล / Verify E-mail"
              type="email"
              onChange={({ target: { value: VEmail } }) =>
                setBankAccount({ ...bankAccount, VEmail })
              }
            />
            {bankAccount.VEmail != "" &&
            bankAccount.VEmail == bankAccount.email ? (
              <InputRightElement>
                <CheckCircleIcon color="green.500" />
              </InputRightElement>
            ) : (
              ""
            )}
          </InputGroup>
        </GridItem>
      </Grid>
      <Paycpn />
    </div>
  );
};

export default Account;

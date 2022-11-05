import React from "react";
import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
} from "@chakra-ui/react";

const sizeForRes = { base: "sm", md: "sm" };
const HeaderpayDraft = () => {
  return (
    <div>
      {" "}
      <Box py={3} mb={5} px="10px">
        <Flex
          w="100%"
          borderBottom="2px"
          py={1}
          my={1}
          borderColor="blackAlpha.600"
          justifyContent={"space-between"}
        >
          <Text
            fontWeight="bold"
            fontSize={{ base: "sm", md: "md" }}
            className="font-thai"
          >
            รูปแบบการชำระเงิน
          </Text>
          <Text fontWeight="light" fontSize="sm">
            Step 4 of 6
          </Text>
        </Flex>

        {/* Document */}
        <Text my={5} fontSize={sizeForRes}>
          &emsp;&emsp;บริษัทฯ ขอแจ้งให้ทราบว่า บริษัทฯ
          มีนโยบายจะเปลี่ยนแปลงวิธีการจ่ายชำระสินค้า จากเดิมชำระด้วยธนาคาร
          เปลี่ยนเป็นการชำระ โดยการโอนผ่านธนาคาร ซึ่งทำให้เกิดความคล่องตัว
          ลดขั้นตอนในการเดินทางมารับเช็ค และประหยัดค่าใช้จ่ายในการนำฝาก
          จึงขอให้ท่านช่วยส่งข้อมูลเกี่ยวกับธนาคารที่ประสงค์จะให้บริษัท
          โอนเงินค่าสินค้าและบริการให้แก่บริษัทท่าน
          โดยกรอกข้อมูลตามช่องด้านล่างนี้
          {/* พร้อมอัพโหลดสำเนาหน้าแรกของบัญชีเงินฝาก */}
        </Text>
        <Text my={3} fontSize={sizeForRes}>
          อัตราค่าธรรมเนียมที่เกิดจากการโอน โดยจะหักจากยอดเงินที่ท่านได้รับ
          ดังนี้
        </Text>

        {/* Table */}
        <TableContainer>
          <Table variant="simple" border="1px" borderColor="gray.200">
            <Thead>
              <Tr>
                <Th fontSize={sizeForRes}>บริการ</Th>
                <Th fontSize={sizeForRes}>ยอดโอนเงิน</Th>
                <Th fontSize={sizeForRes}>อัตราค่าธรรมเนียม</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td fontSize={sizeForRes}>โอนเงินภายในธนาคารกสิกร</Td>
                <Td fontSize={sizeForRes}></Td>
                <Td fontSize={sizeForRes}>8 บาท / รายการ</Td>
              </Tr>
              <Tr>
                <Td fontSize={sizeForRes}>โอนเงินต่างธนาคารกสิกร</Td>
                <Td fontSize={sizeForRes}>ไม่เกิน 2,000,000 บาท / รายการ</Td>
                <Td fontSize={sizeForRes}>10 บาท / รายการ</Td>
              </Tr>
              <Tr>
                <Td fontSize={sizeForRes}>โอนเงินบาทเน็ต</Td>
                <Td fontSize={sizeForRes}></Td>
                <Td fontSize={sizeForRes}>
                  ขั้นต่ำ 150 บาท / รายการ <br /> สูงสุดไม่เกิน 950 บาท / รายการ
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default HeaderpayDraft;

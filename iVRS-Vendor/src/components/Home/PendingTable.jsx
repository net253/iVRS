import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Box,
} from "@chakra-ui/react";
import Datafake from "../../assets/data/table";
import { Loadinglottie } from "../lottie";

const PendingTable = () => {
  // lock the table header
  return (
    <>
      <Box h="27rem">
        <TableContainer overflowX="auto" overflowY="auto" h="100%">
          <Table variant="simple" size={"sm"} position={"relative"}>
            {/* lock Thead no scolling */}
            <Thead fontSize={"md"} position="sticky" top={0} zIndex={1}>
              <Tr color={"black"} bg="gray.100" h="2rem">
                <Th fontSize={"sm"} w="3rem" color={"black"}>
                  ลำดับ
                </Th>
                <Th fontSize={"sm"} w="5rem" color={"black"}>
                  หมายเลขเอกสาร
                </Th>
                <Th fontSize={"sm"} w="60rem" color={"black"}>
                  บริษัทที่ขึ้นทะเบียน
                </Th>
                <Th fontSize={"sm"} w="5rem" color={"black"}>
                  วันที่ทำรายการ
                </Th>
                <Th fontSize={"sm"} w="max-content" color={"black"}>
                  สถานะการทำรายการ
                </Th>
              </Tr>
            </Thead>
            <Tbody fontSize={"sm"}>
              {!Datafake?.length ? (
                <Tr>
                  <Th colSpan={4}>
                    <Loadinglottie />
                  </Th>
                </Tr>
              ) : (
                Datafake?.map((info, i) => (
                  <Tr key={i} _hover={{ bg: "gray.100" }} cursor={"pointer"}>
                    <Td fontSize={"sm"}>{i + 1}</Td>
                    <Td fontSize={"sm"}>
                      VEND65100{(i + 1).toString().padStart(2, "0")}
                    </Td>
                    <Td fontSize={"sm"}>{info?.Company}</Td>
                    <Td fontSize={"sm"}>{info?.Datetimefiled}</Td>
                    <Td fontSize={"sm"}>
                      <Text
                        fontSize={"sm"}
                        color={`${
                          info?.Status == "รอการพิจารณา" ? "orange" : "green"
                        }`}
                      >
                        {info?.Status}
                      </Text>
                    </Td>
                  </Tr>
                ))
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default PendingTable;

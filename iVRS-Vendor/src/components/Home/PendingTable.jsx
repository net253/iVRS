import React, { useEffect } from "react";
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

import useDoclist from "../../store/Doclist/Doclist";
import { Loadinglottie } from "../lottie";
import { fetchdocumentlistpending } from "../../services/feth-api";

// create format date time for thai
function formatDate(date) {
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return new Date(date).toLocaleDateString("th-TH", options);
}

const PendingTable = ({ onChangeSearch }) => {
  const { getDoclistPending, DoclistPending } = useDoclist();
  function fetchFormPending() {
    fetchdocumentlistpending().then((data) => {
      console.log(data);
      getDoclistPending(data);
    });
  }

  function Searchfilter(info) {
    console.log(onChangeSearch);
    return (
      info?.CompanyAdmin?.toLowerCase().includes(
        onChangeSearch.toLowerCase()
      ) ||
      info?.Status?.toLowerCase().includes(onChangeSearch.toLowerCase()) ||
      info?.CompanyFullName?.toLowerCase().includes(
        onChangeSearch.toLowerCase()
      ) ||
      info?.DocNo?.toLowerCase().includes(onChangeSearch.toLowerCase()) ||
      info?.SaveDatetime?.toLowerCase().includes(onChangeSearch.toLowerCase())
    );
  }

  useEffect(() => {
    const initpage = setInterval(() => {
      fetchFormPending();
    }, 3000);
    return () => clearInterval(initpage);
  }, []);
  return (
    <>
      <Box h="65vh">
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
                <Th fontSize={"sm"} w="max-content" color={"black"}></Th>
              </Tr>
            </Thead>
            <Tbody fontSize={"sm"}>
              {!DoclistPending?.length ? (
                <Tr>
                  <Th colSpan={5}>
                    <Loadinglottie />
                  </Th>
                </Tr>
              ) : (
                DoclistPending?.filter(Searchfilter)?.map((info, i) => (
                  <Tr key={i} _hover={{ bg: "gray.100" }} cursor={"pointer"}>
                    <Td fontSize={"sm"}>{i + 1}</Td>
                    <Td fontSize={"sm"}>
                      <Text fontSize={"sm"}>{info?.DocNo}</Text>
                    </Td>
                    <Td fontSize={"sm"}>
                      {info?.CompanyAdmin}&nbsp;
                      {info?.CompanyFullName}
                    </Td>
                    <Td fontSize={"sm"}>{formatDate(info?.SaveDatetime)}</Td>
                    <Td fontSize={"sm"}>
                      <Text
                        fontSize={"sm"}
                        color={`${
                          info?.Status == "pending" ? "orange" : "green"
                        }`}
                      >
                        {info?.Status == "pending"
                          ? "รออนุมัติ"
                          : "อนุมัติแล้ว"}
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

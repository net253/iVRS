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
import { Loadinglottie } from "../lottie";
import useDoclist from "../../store/Doclist/Doclist";
import useFormDraft from "../../store/draft/formdraft";
import { fetchdocumentlistdraft } from "../../services/feth-api";

const AllTable = () => {
  const { Doclist, getDoclistDraft } = useDoclist();
  const { getFormEditDraft } = useFormDraft();
  // lock the table header

  function fetchFormDraft() {
    fetchdocumentlistdraft().then((data) => {
      getDoclistDraft(data);
    });
  }

  function onClickEdit(info) {
    console.log(info);
    getFormEditDraft(info);
  }
  useEffect(() => {
    const initpage = setInterval(() => {
      fetchFormDraft();
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
              </Tr>
            </Thead>
            <Tbody fontSize={"sm"}>
              {!Doclist?.length ? (
                <Tr>
                  <Th colSpan={5}>
                    <Loadinglottie />
                  </Th>
                </Tr>
              ) : (
                Doclist?.map((info, i) => (
                  <Tr
                    key={i}
                    _hover={{ bg: "gray.100" }}
                    cursor={"pointer"}
                    onClick={() => onClickEdit(info)}
                  >
                    <Td fontSize={"sm"}>{i + 1}</Td>
                    <Td fontSize={"sm"}>
                      <Text fontSize={"sm"}>{info?.DocNo}</Text>
                    </Td>
                    <Td fontSize={"sm"}>
                      {info?.CompanyAdmin}&nbsp;
                      {info?.CompanyFullName}
                    </Td>
                    <Td fontSize={"sm"}>{info?.SaveDatetime}</Td>
                    <Td fontSize={"sm"}>
                      <Text
                        fontSize={"sm"}
                        color={`${
                          info?.Status == "pending" ? "orange" : "green"
                        }`}
                      >
                        {info?.Status == "pending" && info.IsDraft
                          ? "แบบร่าง"
                          : "รอการพิจารณา"}
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

export default AllTable;

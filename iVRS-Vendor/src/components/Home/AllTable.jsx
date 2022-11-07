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
import { fetchdocumentlistdraft } from "../../services/feth-api";
import useDraftEdit from "../../store/DrafStore/DraftEdit";
import { useNavigate } from "react-router-dom";
import shallow from "zustand/shallow";

const AllTable = ({ onChangeSearch }) => {
  const { Doclist, getDoclistDraft } = useDoclist(
    (state) => ({
      Doclist: state.Doclist,
      getDoclistDraft: state.getDoclistDraft,
    }),
    shallow
  );

  const { setDraftEdit, draftEdit } = useDraftEdit(
    (state) => ({
      setDraftEdit: state.setDraftEdit,
      draftEdit: state.draftEdit,
    }),
    shallow
  );

  const navigate = useNavigate();
  function fetchFormDraft() {
    fetchdocumentlistdraft().then((data) => {
      getDoclistDraft(data);
    });
  }

  function onClickEdit(info) {
    console.log(info);
    setDraftEdit(info);
    if (draftEdit != undefined) {
      navigate("/draft");
    }
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
    fetchFormDraft();
    const initpage = setInterval(() => {
      fetchFormDraft();
    }, 30000);
    return () => clearInterval(initpage);
  }, []);

  if (Doclist == undefined) {
    return (
      <Box
        display="grid"
        placeItems="center"
        height="90vh"
        width="99vw"
        alignItems="center"
      >
        <Loadinglottie />
      </Box>
    );
  } else {
    return (
      <>
        <Box h="65vh">
          <TableContainer overflowX="auto" overflowY="auto" h="100%">
            <Table variant="simple" size={"sm"} position={"relative"}>
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
                  <Th fontSize={"sm"} w="max-content" color={"black"}>
                    เพิ่มเติม
                  </Th>
                </Tr>
              </Thead>
              <Tbody fontSize={"sm"}>
                {Doclist &&
                  Doclist?.filter(Searchfilter)?.map((info, i) => (
                    <Tr key={i} cursor={"pointer"}>
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
                      <Td>
                        <Text
                          fontSize={"sm"}
                          color={"blue.500"}
                          onClick={() => onClickEdit(info)}
                        >
                          แก้ไข
                        </Text>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </>
    );
  }
};

export default AllTable;

import React, { useState, useEffect, useRef } from "react";
import {
    Grid,
    GridItem,
    Text,
    Input,
    Stack,
    Box,
    Button,
    HStack,
    Icon,
    Select,
} from "@chakra-ui/react";
import {
    SellerDetail,
    Evaluation,
    ExtraTable,
    Timeline,
    Details,
} from "./StaffDetails";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { approvePath, userPath, historyPath } from "../../UrlPath";
import axios from "axios";
import ReactToPrint from "react-to-print";
import { MdPrint } from "react-icons/md";
import { PdfStaff } from "../PdfForm/PdfStaff";
import { updateShow } from "../../store/slices/showSlice";

const printVendor = (nextApprover) => {
    return (
        <Button
            leftIcon={<Icon as={MdPrint} />}
            colorScheme="facebook"
            variant="solid"
            size="sm"
            rounded="full"
            disabled={nextApprover != "-"}
        >
            พิมพ์แบบประเมิน
        </Button>
    );
};

export default function FormStaff({ auth }) {
    const dispatch = useDispatch();
    const componentRef = useRef();

    const modalInfo = useSelector((state) => state.modalInfo);
    const [user, setUser] = useState([]);
    const [tablePoint, setTablePoint] = useState(
        Array(3).fill("10").concat(Array(21).fill("5"))
    );
    const [tableExtra, setTableExtra] = useState(Array(11).fill("5"));
    const [footer, setFooter] = useState({
        grade: "A",
        summarize: "",
        submitBy: "",
        sumPoint: "",
        level: parseInt(auth.level) + 1,
    });
    const [seller, setSeller] = useState({
        chk: [],
        product1: "",
        product2: "",
        product3: "",
        product4: "",
        other: "",
        sellerID: "",
    });
    const [approvedLine, setApprovedLine] = useState(modalInfo.approvalLine);
    const [history, setHistory] = useState([]);
    const [userPosition, setUserPosition] = useState([
        "ACC",
        "QC",
        "MINI MD",
        "MD",
    ]);

    const [time, setTime] = useState("");

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

    const getUser = () => {
        axios.get(userPath).then(({ data: { results } }) => {
            setUser(results);
            const users = results.map((user) =>
                user.position.toLocaleUpperCase("en-US")
            );
            if (users != "") {
                setUserPosition([...new Set(users)]);
            }
        });
        axios
            .post(historyPath, { number: modalInfo.number })
            .then(({ data: { results } }) => {
                setHistory(results);
            });
    };

    const handleApprove = (formAxios) => {
        // console.log(formAxios);
        Swal.fire({
            icon: "warning",
            title: `<p class="font-thai">ยืนยันการ${
                formAxios.status == "hold" ? "รอการพิจารณา" : "อนุมัติ"
            }?  <br /> <span>Confirm?</span></p>`,

            showCancelButton: true,
            confirmButtonText: `<p class="font-thai">ใช่ / <span>Yes</span></p>`,
            cancelButtonText: `<p class="font-thai">ไม่ใช่ / <span>No</span></p>`,
            confirmButtonColor: "green",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: `<p class="font-thai">กำลังบันทึกข้อมูล </p><span>(Saving information)</span>`,
                    html: `<p class="font-thai">กรุณารอสักครู่ ใช้เวลาไม่เกิน 5 นาที <br /> <span>(Please wait until processing completed)</span> </p>`,
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    },
                });
                axios.post(approvePath, { ...formAxios }).then(({ data }) => {
                    Swal.close();
                    // console.log(data);
                    if (data.state) {
                        Swal.fire({
                            icon: "success",
                            title: `<p class="font-thai">บันทึกสำเร็จ / <span>Success</span></p>`,
                            // html: ` <p class="font-thai">ท่านสามารถติดตามผลการดำเนินการได้ทางอีเมลที่ได้ระบุไว้ <br /> <span>You can follow up on the progress via the email.</span></p>`,
                        }).then(() => {
                            dispatch(updateShow(false));
                        });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: data.massage,
                            showConfirmButton: false,
                            timer: 5000,
                        });
                    }
                });
            }
        });
    };

    const handleState = (status) => {
        const { number, companyDetails, contactParson } = modalInfo;

        if (seller.chk.length == 0) {
            handleError(`<b class="font-thai">กรุณาเลือกรายละเอียดผู้ขาย <br />
        <span>Please select seller details.</span></b>`);
        } else if (
            seller.chk.find((chk) => chk == "Other") == "Other" &&
            seller.other == ""
        ) {
            handleError(`<b class="font-thai">กรุณากรอกรายละเอียดบริษัทให้ครบ<br />
        <span>Please complete the company details.</span></b>`);
        }
        // else if (!seller.sellerID) {
        //   handleError(`<b class="font-thai">กรุณากรอกรหัสผู้จำหน่าย<br />
        //     <span>Please enter ID.</span></b>`);
        // }
        else if (footer.summarize == "") {
            handleError(`<b class="font-thai">กรุณาสรุปผลการประเมิน<br />
        <span>Please summarize the evaluation results.</span></b>`);
        } else if (footer.submitBy == "") {
            handleError(`<b class="font-thai">กรุณากรอกชื่อผู้ประเมิน<br />
        <span>Please enter the name of the assessor.</span></b>`);
        } else {
            const formAxios = {
                number: number,
                companyName: companyDetails[0].engCompany,
                sellerDetails: { ...contactParson[0].sale[0], ...seller },
                score: tablePoint,
                moreInfo: tableExtra,
                summarize: footer.summarize,
                submitBy: footer.submitBy,
                status: status,
                // level: `${status == "hold" ? auth.level : footer.level}`,
                approvalLine: approvedLine.filter((user) => user != ""),
            };

            handleApprove(formAxios);
        }
    };

    const handleError = (text) => {
        Swal.fire({
            icon: "warning",
            html: text,
            timer: 4000,
            showConfirmButton: false,
        });
    };

    const handleSelector = (e, i) => {
        const { value } = e.target;
        const newValue = [...approvedLine];
        // newValue[0] = auth.username;
        //! username -> name --------------------------------------------------------------------
        newValue[0] = auth.name;
        newValue[i + 1] = value;

        setApprovedLine(newValue);
    };

    useEffect(() => {
        const initPage = setTimeout(() => {
            getTime();
            getUser();
        }, 0);
        const timer1m = setInterval(() => {
            getTime();
        }, 3600000);

        return () => {
            clearTimeout(initPage);
            clearInterval(timer1m);
        };
    }, []);

    const pageStyle =
        "@page { size: a4;  margin: 2mm; } @media print { body { -webkit-print-color-adjust: exact; } } ";

    if (!modalInfo) {
        return <div />;
    }

    return (
        <>
            <Grid
                templateColumns="repeat(4,1fr)"
                gap={2}
                mt={2}
                alignItems="center"
            >
                <GridItem w="100%">
                    <Text className="font-thai">บริษัท / Company</Text>
                </GridItem>
                <GridItem w="100%" colSpan={3}>
                    <Input
                        defaultValue={modalInfo.companyRegister}
                        variant="flushed"
                        size="sm"
                        isDisabled
                    />
                </GridItem>

                <GridItem w="100%">
                    <Text className="font-thai">วันที่ / Date</Text>
                </GridItem>
                <GridItem w="100%">
                    <Input
                        value={time}
                        variant="flushed"
                        size="sm"
                        isDisabled
                    />
                </GridItem>

                <GridItem w="100%">
                    <Text className="font-thai">รหัสผู้จำหน่าย / ID</Text>
                </GridItem>
                <GridItem w="100%">
                    {/* {!modalInfo.nextApprover ? (
            <Input
              variant="flushed"
              size="sm"
              onChange={({ target: { value: sellerID } }) =>
                setSeller({ ...seller, sellerID })
              }
            />
          ) : (
            <Input
              variant="flushed"
              size="sm"
              value={modalInfo.sellerDetails.sellerID}
              readOnly
            />
          )} */}
                    <Input
                        variant="flushed"
                        size="sm"
                        value={modalInfo.number}
                        readOnly
                    />
                </GridItem>

                <GridItem colSpan={4} display="flex" mt={2} fontSize="sm">
                    <Text className="font-thai" mr={4}>
                        หมายเหตุ :
                    </Text>
                    <Stack>
                        <Text className="font-thai">
                            เครื่องหมาย ** ต้องมีการตรวจสอบ ร่วมกัน โดย MINI.MD
                            และ SCM. <br />
                            (The mark ** must be jointly verified by MINI.MD and
                            SCM.)
                        </Text>
                        <Text className="font-thai">
                            เครื่องหมาย *** ใช้ประเมินเฉพาะกลุ่ม Raw Material{" "}
                            <br />
                            (The *** mark is used to evaluate only the Raw
                            Material group.)
                        </Text>
                    </Stack>
                </GridItem>
            </Grid>

            {!modalInfo.nextApprover ? (
                <React.Fragment>
                    <SellerDetail
                        company={modalInfo.companyDetails[0]}
                        seller={seller}
                        setSeller={setSeller}
                    />
                    <Evaluation
                        tablePoint={tablePoint}
                        setTablePoint={setTablePoint}
                        footer={footer}
                        setFooter={setFooter}
                    />
                    <ExtraTable
                        tablePoint={tablePoint}
                        tableExtra={tableExtra}
                        setTableExtra={setTableExtra}
                        footer={footer}
                        setFooter={setFooter}
                    />

                    <Grid
                        templateColumns="repeat(3,1fr)"
                        gap={2}
                        mt={10}
                        alignItems="center"
                    >
                        <GridItem w="100%" fontWeight="bold">
                            <Text className="font-thai">
                                ส่งข้อมูลโดย / Submitted by
                            </Text>
                        </GridItem>
                        <GridItem w="100%" colSpan={2}>
                            <Input
                                placeholder="กรุณาระบุคำนำหน้า / Please specify name title"
                                size="sm"
                                variant="filled"
                                onChange={({ target: { value: submitBy } }) =>
                                    setFooter({ ...footer, submitBy })
                                }
                            />
                        </GridItem>

                        <GridItem colSpan={3} w="100%" fontWeight="bold" mt={3}>
                            <Text className="font-thai">
                                ส่งไปยัง / Sent to
                            </Text>
                        </GridItem>
                        <GridItem colSpan={3} w="100%" display="flex" gap={2}>
                            {userPosition
                                .filter((arr) => arr != "SCM")
                                .map((info, i) => (
                                    <Select
                                        placeholder={info}
                                        key={info}
                                        size="sm"
                                        rounded="full"
                                        onChange={(e) => handleSelector(e, i)}
                                    >
                                        <option value="">-</option>
                                        {user.map((users, j) => (
                                            <React.Fragment key={j}>
                                                {users.position ==
                                                    info.toLocaleLowerCase(
                                                        "en-US"
                                                    ) && (
                                                    <option value={users.name}>
                                                        {users.name}
                                                    </option>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </Select>
                                ))}
                        </GridItem>
                    </Grid>
                </React.Fragment>
            ) : (
                <Details modalInfo={modalInfo} />
            )}

            {/* Button */}
            {modalInfo.nextApprover?.toLocaleLowerCase("en-US") !=
                auth.username?.toLocaleLowerCase("en-US") &&
            modalInfo.nextApprover ? (
                <Box display="flex" justifyContent="end" mt={8}>
                    <ReactToPrint
                        pageStyle={pageStyle}
                        trigger={() => printVendor(modalInfo.nextApprover)}
                        content={() => componentRef.current}
                    />
                    {modalInfo.nextApprover == "-" && (
                        <Box display="none">
                            <PdfStaff
                                ref={componentRef}
                                modalInfo={modalInfo}
                                history={history}
                            />
                        </Box>
                    )}
                </Box>
            ) : (
                <HStack justifyContent="end" mt={8}>
                    <Button
                        size="sm"
                        w="25%"
                        colorScheme="whatsapp"
                        className="font-thai"
                        rounded="full"
                        onClick={() => {
                            !modalInfo.nextApprover
                                ? handleState("pending")
                                : handleApprove({
                                      number: modalInfo.number,
                                      status:
                                          approvedLine[
                                              approvedLine.length - 1
                                          ] == modalInfo.nextApprover
                                              ? "approved"
                                              : "pending",
                                  });
                        }}
                    >
                        อนุมัติ / Approve
                    </Button>

                    <Button
                        size="sm"
                        w="25%"
                        colorScheme="red"
                        className="font-thai"
                        rounded="full"
                        onClick={() => {
                            !modalInfo.nextApprover
                                ? handleState("hold")
                                : handleApprove({
                                      number: modalInfo.number,
                                      status: "hold",
                                  });
                        }}
                    >
                        รอพิจารณา / Hold
                    </Button>
                </HStack>
            )}

            {/* Timeline */}
            <Timeline history={history} modalInfo={modalInfo} />
        </>
    );
}

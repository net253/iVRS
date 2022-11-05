import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FiSave } from "react-icons/fi";
import Swal from "sweetalert2";
import { fetchuploadform } from "../../services/feth-api";
import { validatevendorRegister } from "../../components/Validateupload";
import useFormDetail from "../../store/forminput/forminput";

const DraftButton = () => {
  const { FormDetail, updateisDraft } = useFormDetail();
  const handledraft = () => {
    updateisDraft(true);
    const { isValid, error } = validatevendorRegister(FormDetail);
    if (!isValid) {
      Swal.fire({
        icon: "error",
        title: `<p class="font-thai">${error}</p>`,
        confirmButtonText: `<p>ตกลง</span></p>`,
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: `<p class="font-thai">ยืนยันการบันทึกแบบร่างใช่หรือไม่?  <br /> <span>Confirm registration?</span></p>`,
        showCancelButton: true,
        confirmButtonText: `<p class="font-thai">ใช่ / <span>Yes</span></p>`,
        cancelButtonText: `<p class="font-thai">ไม่ใช่ / <span>No</span></p>`,
        confirmButtonColor: "green",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `<p class="font-thai">กำลังบันทึกแบบร่าง <br /> <span>Sending data</span></p>`,
            didOpen: () => {
              Swal.showLoading();
            },
          });
          fetchuploadform(FormDetail).then((data) => {
            if (data.state) {
              Swal.fire({
                icon: "success",
                title: `<p class="font-thai">บันทึกแบบร่างสำเร็จ <br /> <span>Send data successfully</span></p>`,
                confirmButtonText: `<p class="font-thai">ตกลง / <span>OK</span></p>`,
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/Home");
                }
              });
            } else {
              Swal.fire({
                icon: "error",
                title: `<p class="font-thai">บันทึกแบบร่างไม่สำเร็จ <br /> <span>Send data failed</span></p>`,
                confirmButtonText: `<p class="font-thai">ตกลง / <span>OK</span></p>`,
              });
            }
          });
        }
      });
    }
  };
  const navigate = useNavigate();

  return (
    <div>
      <Flex
        w="100%"
        h="5vh"
        justifyContent={"flex-end"}
        px="2rem"
        borderTop={"1px solid #E2E8F0"}
        py="3px"
      >
        <Button colorScheme={"yellow"} px="2rem" onClick={handledraft}>
          <FiSave />
          บันทึกแบบร่าง
        </Button>
      </Flex>
    </div>
  );
};

export default DraftButton;

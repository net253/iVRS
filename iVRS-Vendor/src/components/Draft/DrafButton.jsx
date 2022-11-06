import React from "react";
import { Button, Flex } from "@chakra-ui/react";
//import { useNavigate } from "react-router-dom";
import { FiSave } from "react-icons/fi";
import Swal from "sweetalert2";
import { fetchuploadform } from "../../services/feth-api";
import { validatevendorDraft } from "../Validateupload";
import useDraftEdit from "../../store/DrafStore/DraftEdit";
import shallow from "zustand/shallow";
import { useNavigate } from "react-router-dom";

const DraftButton = () => {
  const navigate = useNavigate();
  const { draftEdit, updateisDraft } = useDraftEdit(
    (state) => ({
      draftEdit: state.draftEdit,
      updateisDraft: state.updateisDraft,
    }),
    shallow
  );
  const handledraft = () => {
    updateisDraft(true);
    const { isValid, error } = validatevendorDraft(draftEdit);
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
            title: `<p class="font-thai">กำลังบันทึกแบบร่าง <br /> <span>Saving a draft</span></p>`,
            didOpen: () => {
              Swal.showLoading();
            },
          });
          fetchuploadform(draftEdit).then((data) => {
            if (data.state) {
              Swal.fire({
                icon: "success",
                title: `<p class="font-thai">บันทึกแบบร่างสำเร็จ <br /> <span>Save the draft successfully.</span></p>`,
                showConfirmButton: false,
                timer: 1500,
              }).then(() => {
                navigate("/Home");
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

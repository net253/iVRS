import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FiSave } from "react-icons/fi";
import Swal from "sweetalert2";

const DraftButton = () => {
  function onClickDraft() {
    //loading sweetalert 5 seconds
    Swal.fire({
      title: "กำลังบันทึก...",
      timer: 5000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire({
          icon: "success",
          title: "บันทึกสำเร็จ",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/Home");
        });
      }
    });
  }

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
        <Button colorScheme={"yellow"} px="2rem" onClick={onClickDraft}>
          <FiSave />
          บันทึกแบบร่าง
        </Button>
      </Flex>
    </div>
  );
};

export default DraftButton;

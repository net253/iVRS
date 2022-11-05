import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useFromDetail from "../../store/forminput/forminput";

const Buttoncomponents = () => {
  const { updateisDraft } = useFromDetail();
  const navigate = useNavigate();
  function onClickisNewDocument() {
    updateisDraft(true);
    navigate("/Vendor");
  }

  return (
    <>
      <Flex
        w="100%"
        h="5vh"
        justifyContent={"flex-end"}
        px="1rem"
        borderTop={"1px solid #E2E8F0"}
        py="3px"
      >
        <Button colorScheme={"green"} px="2rem" onClick={onClickisNewDocument}>
          ขึ้นทะเบียนผู้ขายใหม่ (New Vendor Registation)
        </Button>
      </Flex>
    </>
  );
};

export default Buttoncomponents;

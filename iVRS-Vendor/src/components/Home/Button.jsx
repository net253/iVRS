import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Buttoncomponents = () => {
  const navigate = useNavigate();

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
        <Button
          colorScheme={"green"}
          px="2rem"
          onClick={() => navigate("/vendor")}
        >
          ขึ้นทะเบียนผู้ขายใหม่ (New Vendor Registation)
        </Button>
      </Flex>
    </>
  );
};

export default Buttoncomponents;

import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const DraftButton = () => {
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
        <Button
          colorScheme={"yellow"}
          px="2rem"
          onClick={() => navigate("/vendor")}
        >
          บันทึกแบบร่าง
        </Button>
      </Flex>
    </div>
  );
};

export default DraftButton;

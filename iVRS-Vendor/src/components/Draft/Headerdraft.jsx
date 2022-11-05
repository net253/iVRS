import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function HeaderDraft() {
  return (
    <>
      <Box
        textAlign="center"
        py={3}
        my={3}
        borderBottom="2px"
        borderColor="blackAlpha.600"
      >
        <Text
          fontWeight="bold"
          fontSize={{ base: "sm", md: "sm" }}
          className="font-thai"
        >
          กรุณากรอกข้อมูลให้ครบถ้วน พร้อมแนบเอกสารดังต่อไปนี้เพื่อการลงทะเบียน
        </Text>
        <Text fontWeight="bold" fontSize={{ base: "sm", md: "sm" }}>
          (Please fill up all the sections in this form and attach the document
          files)
        </Text>
        {/* Note */}
        <Box
          display={{ lg: "flex" }}
          justifyContent="center"
          gap={1}
          fontSize="sm"
          pt={1}
        >
          <Text className="font-thai">
            หมายเหตุ : ระบบรองรับไฟล์ PDF เท่านั้น /
            <span> (PDF file only)</span>
          </Text>
        </Box>
      </Box>
    </>
  );
}

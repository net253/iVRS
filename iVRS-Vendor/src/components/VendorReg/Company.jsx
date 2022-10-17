import React from "react";
import {
  Text,
  Grid,
  GridItem,
  HStack,
  Input,
  Spacer,
  Textarea,
} from "@chakra-ui/react";

export default function Company() {
  return (
    <>
      <HStack mt={5} px="10px">
        <Text
          className="font-thai"
          fontWeight="bold"
          fontSize={{ base: "sm", sm: "sm" }}
        >
          รายละเอียดบริษัท / <span>Company Details</span>
        </Text>
        <Spacer />
        <Text fontWeight="light" fontSize="sm">
          Step 1 of 6
        </Text>
      </HStack>

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={4}
        alignItems="center"
        borderTop="2px"
        borderColor="blackAlpha.600"
        py={3}
        px="10px"
        my={1}
        fontSize={{ base: "sm", sm: "sm" }}
      >
        <GridItem w="100%">
          <Text className="font-thai">
            ชื่อบริษัท (ภาษาอังกฤษ) / Company Name (English)
          </Text>
          <Input placeholder="Company Name (English)" size="sm" />
        </GridItem>

        <GridItem w="100%">
          <Text className="font-thai">
            ชื่อบริษัท (ภาษาไทย) / Company Name (Thai)
          </Text>
          <Input placeholder="Company Name (Thai)" size="sm" />
        </GridItem>

        <GridItem w="100%">
          <Text className="font-thai">
            ที่อยู่ (ภาษาอังกฤษ) / Address (English)
          </Text>
          <Textarea placeholder="Address (English)" size="sm" />
        </GridItem>

        <GridItem w="100%">
          <Text className="font-thai">ที่อยู่ (ภาษาไทย) / Address (Thai)</Text>
          <Textarea placeholder="Address (Thai)" size="sm" />
        </GridItem>

        <GridItem w="100%">
          <Text className="font-thai">
            ประเภทของกิจการ / Nature of Business
          </Text>
          <Input placeholder="Nature of Business" size="sm" />
        </GridItem>

        <GridItem w="100%">
          <Text className="font-thai">เว็บไซต์ของบริษัท / Company Website</Text>
          <Input placeholder="Company Website" size="sm" />
        </GridItem>

        <GridItem w="100%">
          <Text className="font-thai">เบอร์โทรศัพท์ / Tel No.</Text>
          <Input placeholder="Tel No." type="text" size="sm" maxLength={10} />
        </GridItem>

        <GridItem w="100%">
          <Text className="font-thai">เบอร์แฟกซ์ / Fax No.</Text>
          <Input placeholder="Fax No." type="number" size="sm" />
        </GridItem>
      </Grid>
    </>
  );
}

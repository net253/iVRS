import React from "react";
import {
  Text,
  Grid,
  GridItem,
  HStack,
  Input,
  Spacer,
  Textarea,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import useFormInput from "../../store/forminput/forminput";
import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";
import {
  validateTextEngishAndNumberSpace,
  validateNameThaiAndEnglish,
  validateAddressThaiAndEnglish,
  validateWebsiteUrl,
  validatePhone,
  validateFaxNumber,
  validateJuristicID,
} from "../../libs/Validate";

export default function Company() {
  const { FormDetail, updateFormDetail } = useFormInput();
  const {
    JuristicID,
    Fax,
    Website,
    CompanyNameEN,
    CompanyNameTH,
    AddressEN,
    AddressTH,
    NatureBusiness,
    Tel,
  } = FormDetail;

  const handleCompany = (e) => {
    const { name, value } = e.target;
    updateFormDetail(name, value);
  };

  return (
    <>
      <HStack mt={5} px="10px">
        <Text
          className="font-thai"
          fontWeight="bold"
          fontSize={{ base: "sm", sm: "md" }}
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
          <InputGroup size={"sm"}>
            <Input
              placeholder="Company Name (English)"
              size="sm"
              name="CompanyNameEN"
              onChange={handleCompany}
            />
            {validateTextEngishAndNumberSpace(CompanyNameEN) ? (
              <InputRightElement>
                <Icon as={FaCheckCircle} color="green.500" />
              </InputRightElement>
            ) : (
              <InputRightElement>
                <Icon as={FaExclamationCircle} color="red.500" />
              </InputRightElement>
            )}
          </InputGroup>
        </GridItem>

        <GridItem w="100%">
          <Text className="font-thai">
            ชื่อบริษัท (ภาษาไทย) / Company Name (Thai)
          </Text>
          <InputGroup size={"sm"}>
            <Input
              placeholder="Company Name (Thai)"
              size="sm"
              name="CompanyNameTH"
              onChange={handleCompany}
            />
            {validateNameThaiAndEnglish(CompanyNameTH) ? (
              <InputRightElement>
                <Icon as={FaCheckCircle} color="green.500" />
              </InputRightElement>
            ) : (
              <InputRightElement>
                <Icon as={FaExclamationCircle} color="red.500" />
              </InputRightElement>
            )}
          </InputGroup>
        </GridItem>

        <GridItem w="100%">
          <Text className="font-thai">
            ที่อยู่ (ภาษาอังกฤษ) / Address (English)
          </Text>
          <InputGroup size={"sm"}>
            <Textarea
              placeholder="Address (English)"
              size="sm"
              name="AddressEN"
              onChange={handleCompany}
            />
            {validateAddressThaiAndEnglish(AddressEN) ? (
              <InputRightElement>
                <Icon as={FaCheckCircle} color="green.500" />
              </InputRightElement>
            ) : (
              <InputRightElement>
                <Icon as={FaExclamationCircle} color="red.500" />
              </InputRightElement>
            )}
          </InputGroup>
        </GridItem>

        <GridItem w="100%">
          <Text className="font-thai">ที่อยู่ (ภาษาไทย) / Address (Thai)</Text>
          <InputGroup size={"sm"}>
            <Textarea
              placeholder="Address (Thai)"
              size="sm"
              name="AddressTH"
              onChange={handleCompany}
            />
            {validateAddressThaiAndEnglish(AddressTH) ? (
              <InputRightElement>
                <Icon as={FaCheckCircle} color="green.500" />
              </InputRightElement>
            ) : (
              <InputRightElement>
                <Icon as={FaExclamationCircle} color="red.500" />
              </InputRightElement>
            )}
          </InputGroup>
        </GridItem>

        <GridItem w="100%">
          <Text className="font-thai">
            ประเภทของกิจการ / Nature of Business
          </Text>
          <InputGroup size={"sm"}>
            <Input
              placeholder="Nature of Business"
              size="sm"
              name="NatureBusiness"
              onChange={handleCompany}
            />
            {validateTextEngishAndNumberSpace(NatureBusiness) ? (
              <InputRightElement>
                <Icon as={FaCheckCircle} color="green.500" />
              </InputRightElement>
            ) : (
              <InputRightElement>
                <Icon as={FaExclamationCircle} color="red.500" />
              </InputRightElement>
            )}
          </InputGroup>
        </GridItem>

        <GridItem w="100%">
          <Text className="font-thai">เว็บไซต์ของบริษัท / Company Website</Text>
          <InputGroup size={"sm"}>
            <Input
              placeholder="Company Website"
              size="sm"
              name="Website"
              onChange={handleCompany}
            />
            {validateWebsiteUrl(Website) ? (
              <InputRightElement>
                <Icon as={FaCheckCircle} color="green.500" />
              </InputRightElement>
            ) : (
              <InputRightElement>
                <Icon as={FaExclamationCircle} color="red.500" />
              </InputRightElement>
            )}
          </InputGroup>
        </GridItem>

        <GridItem w="100%">
          <Text className="font-thai">เบอร์โทรศัพท์ / Tel No.</Text>
          <InputGroup size={"sm"}>
            <Input
              placeholder="Tel No."
              type="number"
              size="sm"
              maxLength={10}
              name="Tel"
              onChange={handleCompany}
            />
            {validatePhone(Tel) ? (
              <InputRightElement>
                <Icon as={FaCheckCircle} color="green.500" />
              </InputRightElement>
            ) : (
              <InputRightElement>
                <Icon as={FaExclamationCircle} color="red.500" />
              </InputRightElement>
            )}
          </InputGroup>
        </GridItem>

        <GridItem w="100%">
          <Text className="font-thai">เบอร์แฟกซ์ / Fax No.</Text>
          <InputGroup size={"sm"}>
            <Input
              placeholder="Fax No."
              type="number"
              size="sm"
              name="Fax"
              onChange={handleCompany}
            />
            {validateFaxNumber(Fax) ? (
              <InputRightElement>
                <Icon as={FaCheckCircle} color="green.500" />
              </InputRightElement>
            ) : (
              <InputRightElement>
                <Icon as={FaExclamationCircle} color="red.500" />
              </InputRightElement>
            )}
          </InputGroup>
        </GridItem>
        <GridItem w="100%">
          <Text className="font-thai">เลขนิติบุคคล / Juristic ID</Text>
          <InputGroup size={"sm"}>
            <Input
              placeholder="Juristic ID"
              type="number"
              max={13}
              size="sm"
              name="JuristicID"
              onChange={handleCompany}
            />
            {validateJuristicID(JuristicID) ? (
              <InputRightElement>
                <Icon as={FaCheckCircle} color="green.500" />
              </InputRightElement>
            ) : (
              <InputRightElement>
                <Icon as={FaExclamationCircle} color="red.500" />
              </InputRightElement>
            )}
          </InputGroup>
        </GridItem>
      </Grid>
    </>
  );
}

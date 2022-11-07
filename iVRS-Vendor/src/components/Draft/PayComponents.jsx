import React from "react";
import {
  GridItem,
  Text,
  Grid,
  Radio,
  RadioGroup,
  Box,
  Flex,
  Icon,
  Link,
} from "@chakra-ui/react";
import useDraftEdit from "../../store/DrafStore/DraftEdit";
import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";

const paycomponentsDraft = () => {
  const { draftEdit, updateMonetaryPolicy } = useDraftEdit();
  const { MonetaryPolicy } = draftEdit;
  return (
    <>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={3}
        alignItems="center"
        fontSize={{ base: "sm", sm: "sm" }}
        px="10px"
      >
        <GridItem w="100%" colSpan={3}>
          <Flex h="100%" alignItems={"center"}>
            <Text className="font-thai" fontWeight="bold">
              2. นโยบายการเงิน / Monetary Policy
            </Text>
            {MonetaryPolicy.length != 0 ? (
              <Icon as={FaCheckCircle} color="green.500" mx="5px" />
            ) : (
              <Icon as={FaExclamationCircle} color="red.500" mx="5px" />
            )}
          </Flex>
        </GridItem>
        {MonetaryPolicy.map((info, i) => (
          <GridItem
            w="100%"
            colSpan={3}
            fontSize={{ base: "sm", sm: "sm" }}
            px="10px"
            key={i}
          >
            <Flex>
              <Box w="30rem">
                <Flex>
                  <Text>
                    2.{i + 1}{" "}
                    {info.label == "แจ้งระเบียบวางบิล รับเช็ค"
                      ? "ศึกษารายละเอียดการวางบิล"
                      : info.label}
                  </Text>
                  &nbsp;
                  <Link
                    href="https://accounting.sncformer.com/index.php?login=n"
                    color={"blue"}
                  >
                    {info.label == "แจ้งระเบียบวางบิล รับเช็ค"
                      ? "(ที่นี่)"
                      : ""}
                  </Link>
                  &nbsp;
                  <Link
                    href="https://snc-services.sncformer.com/ivrs/vendor/companyDocument/SCAN_BillDoc.pdf"
                    color={"blue"}
                  >
                    {info.label == "แจ้งระเบียบวางบิล รับเช็ค"
                      ? "(รายละเอียด)"
                      : ""}
                  </Link>
                </Flex>
              </Box>
              <Grid colSpan={3} w="100%" px="10rem">
                <RadioGroup
                  onChange={(value) => updateMonetaryPolicy(info.name, value)}
                  defaultValue={info.value}
                >
                  <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                    <GridItem w={"14rem"}>
                      <Radio value={info.valueChecked1}>
                        {info.labelChecked1 == "แจ้ง"
                          ? "ศึกษารายละเอียดและรับทราบ"
                          : info.labelChecked1}
                      </Radio>
                    </GridItem>
                    <GridItem w="14rem">
                      {info.labelChecked2 == "" ? (
                        ""
                      ) : (
                        <Radio value={info.valueChecked2}>{info.label}</Radio>
                      )}
                    </GridItem>
                    <GridItem w="14rem">
                      {info.labelChecked3 == "" ? (
                        ""
                      ) : (
                        <Radio value={info.valueChecked3}>
                          {info.labelChecked3}
                        </Radio>
                      )}
                    </GridItem>
                  </Grid>
                </RadioGroup>
              </Grid>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default paycomponentsDraft;

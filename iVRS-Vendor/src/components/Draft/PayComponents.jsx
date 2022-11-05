import React, { useEffect } from "react";
import {
  GridItem,
  Text,
  Grid,
  Radio,
  RadioGroup,
  Box,
  Flex,
  Icon,
} from "@chakra-ui/react";
import useFormDetail from "../../store/forminput/forminput";
import { fetchmonetary } from "../../services/feth-api";
import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";

const paycomponentsDraft = () => {
  const { getMonetaryPolicy, FormDetail, updateMonetaryPolicy } =
    useFormDetail();
  const { MonetaryPolicy } = FormDetail;
  const getMonetaryPolicylist = () => {
    fetchmonetary().then((data) => {
      getMonetaryPolicy(data);
    });
  };

  useEffect(() => {
    getMonetaryPolicylist();
  }, []);
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
                <Text>
                  2.{i + 1}{" "}
                  {info.label == "แจ้งระเบียบวางบิล รับเช็ค"
                    ? "ศึกษารายละเอียดการวางบิล"
                    : info.label}
                </Text>
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

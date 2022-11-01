import React from "react";
import { paylist } from "./paylist";
import {
  GridItem,
  Text,
  Grid,
  Radio,
  RadioGroup,
  Box,
  Flex,
} from "@chakra-ui/react";

const paycomponents = () => {
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
          <Text className="font-thai" fontWeight="bold">
            2. นโยบายการเงิน / Monetary Policy
          </Text>
        </GridItem>
        {paylist.map((info, i) => (
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
                  2.{i + 1} {info.title}
                </Text>
              </Box>
              <Grid colSpan={3} w="100%" px="10rem">
                <RadioGroup>
                  <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                    <GridItem w={"14rem"}>
                      <Radio value="1">{info.isRadioGroup.isRadio1}</Radio>
                    </GridItem>
                    <GridItem w="14rem">
                      {info.isRadioGroup.isRadio2 == "" ? (
                        ""
                      ) : (
                        <Radio value="2">{info.isRadioGroup.isRadio2}</Radio>
                      )}
                    </GridItem>
                    <GridItem w="14rem">
                      {info.isRadioGroup.isRadio3 == "" ? (
                        ""
                      ) : (
                        <Radio value="2">{info.isRadioGroup.isRadio3}</Radio>
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

export default paycomponents;

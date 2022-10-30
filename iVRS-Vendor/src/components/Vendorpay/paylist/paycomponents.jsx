import React from "react";
import { paylist } from "./paylist";
import {
  GridItem,
  Text,
  Grid,
  Radio,
  RadioGroup,
  Stack,
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
            2. นโยบายการเงิน
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
                  <Stack direction="row" colSpan={3}>
                    <GridItem w="10rem">
                      <Radio value="1">{info.isRadioGroup.isRadio1}</Radio>
                    </GridItem>
                    <GridItem w="10rem">
                      <Radio
                        value="2"
                        display={`${
                          info.isRadioGroup.isRadio2 == "yy" ? "none" : ""
                        }`}
                      >
                        {" "}
                        {info.isRadioGroup.isRadio2}
                      </Radio>
                    </GridItem>
                    <GridItem w="10rem">
                      <Radio value="3"> {info.isRadioGroup.isRadio3}</Radio>
                    </GridItem>
                  </Stack>
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

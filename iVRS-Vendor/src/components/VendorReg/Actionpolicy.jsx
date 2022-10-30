import React from "react";
import {
  Text,
  Grid,
  GridItem,
  Radio,
  RadioGroup,
  Stack,
  Flex,
  Box,
  HStack,
  Input,
} from "@chakra-ui/react";

import { Bnflist } from "./Actionpolicycomponent/Bnflist";
const question = [
  {
    thai: "5. คุณมีมาตรฐานการบรรจุหรือไม่",
    eng: "Do you have standard packing?",
    value: "stdPacking",
  },
  {
    thai: "6. คุณมีจำนวนการสั่งซื้อขั้นต่ำหรือไม่",
    eng: "Do you have minimum order quantity (MOQ)?",
    value: "moq",
  },
];

const Actionpolicy = () => {
  const [moq, setMoq] = React.useState(false);
  const [std, setStd] = React.useState(false);

  const handleQuest = (text, value) => {
    if (text == "stdPacking") {
      if (value == "Yes") {
        setStd(true);
      } else {
        setStd(false);
      }
    } else {
      if (value == "Yes") {
        setMoq(true);
      } else {
        setMoq(false);
      }
    }
  };

  return (
    <div>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={3}
        alignItems="center"
        fontSize={{ base: "sm", sm: "sm" }}
        px="10px"
      >
        <GridItem w="100%" colSpan={3}>
          <Text className="font-thai" fontWeight="bold">
            4. นโยบายการดำเนินการ / <span>Benefits</span>
          </Text>
        </GridItem>
        {Bnflist.map((info, i) => (
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
                  4.{i + 1} {info.title}
                </Text>
              </Box>
              <RadioGroup px="10px">
                <Stack direction="row">
                  <Radio value="1" px="5rem">
                    มี / Yes
                  </Radio>
                  <Radio value="2"> ไม่มี / No</Radio>
                </Stack>
              </RadioGroup>
            </Flex>
          </GridItem>
        ))}
      </Grid>
      {question.map((text, i) => (
        <React.Fragment key={i}>
          <GridItem w="100%" colSpan={3} px="10px" py="10px">
            <Text fontWeight="bold" fontSize={{ base: "sm", sm: "sm" }}>
              {text.thai} /<span> {text.eng}</span>
            </Text>
          </GridItem>
          <GridItem w="100%" colSpan={3}>
            <HStack spacing={10} justifyContent="center">
              <RadioGroup>
                <Stack direction="row">
                  <Radio
                    name={text.value}
                    value="No"
                    px="1rem"
                    onChange={(e) => handleQuest(text.value, e.target.value)}
                  >
                    ไม่มี / No
                  </Radio>
                  <Radio
                    value="Yes"
                    name={text.value}
                    onChange={(e) => handleQuest(text.value, e.target.value)}
                  >
                    มี / Yes
                  </Radio>
                </Stack>
              </RadioGroup>
              <Stack>
                <Text className="font-thai" fontSize="small">
                  แนบเอกสาร / <span>Attach file</span>
                </Text>
                <Input
                  isDisabled={text.value == "stdPacking" ? !std : !moq}
                  type="file"
                  accept=".pdf"
                  variant="unstyled"
                  size="sm"
                />
              </Stack>
            </HStack>
          </GridItem>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Actionpolicy;

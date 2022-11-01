import React, { useEffect } from "react";
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

import { useActionpolicy } from "../../store";
import { fetchactionpolicylist } from "../../services/feth-api";
import useFormInput from "../../store/forminput/forminput";

const question = [
  {
    thai: "5. มีการกำหนดมาตรฐานการบรรจุ (Standard Packing) หรือไม่",
    eng: "Do you have standard packing?",
    value: "stdPacking",
  },
  {
    thai: "6. มีการกำหนดจำนวนการสั่งซื้อ (MOQ) หรือไม่",
    eng: "Do you have MOQ?",
    value: "moq",
  },
];

const ActionpolicyComponents = () => {
  const [moq, setMoq] = React.useState(false);
  const [std, setStd] = React.useState(false);

  const { Actionpolicy, updateActionpolicy } = useActionpolicy();
  const { getActionPolicy } = useFormInput();

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

  function onChangeActionpolicy(value) {
    Actionpolicy.map((item) => {
      if (item.value == value) {
        item.checked = !item.checked;
      }
    });
  }

  const getActionpolicyfunction = async () => {
    fetchactionpolicylist().then((data) => {
      updateActionpolicy(data);
      getActionPolicy(data);
    });
  };

  var timer1 = 60 * 1000;
  useEffect(() => {
    const initPage = setTimeout(() => {
      getActionpolicyfunction();
    }, 200);
    const timer = setInterval(() => {
      getActionpolicyfunction();
    }, timer1);
    return () => {
      clearTimeout(initPage);
      clearInterval(timer);
    };
  }, []);

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
            4. นโยบายการดำเนินการ / <span>Operation Policy</span>
          </Text>
        </GridItem>
        {Actionpolicy?.map((info, i) => (
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
                  4. {i + 1} {"  "}
                  {info.label}
                </Text>
              </Box>
              <Grid colSpan={3} w="100%" px="10rem">
                <RadioGroup onChange={onChangeActionpolicy}>
                  <Stack direction="row" colSpan={3}>
                    <GridItem w="14rem">
                      <Radio value={`${info.valueChecked1}`}>
                        {info.labelChecked1}
                      </Radio>
                    </GridItem>
                    <GridItem w="14rem">
                      <Radio value={`${info.valueChecked2}`}>
                        {" "}
                        {info.labelChecked3}
                      </Radio>
                    </GridItem>
                  </Stack>
                </RadioGroup>
              </Grid>
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
                    ไม่มี
                  </Radio>
                  <Radio
                    value="Yes"
                    name={text.value}
                    onChange={(e) => handleQuest(text.value, e.target.value)}
                  >
                    มี
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

export default ActionpolicyComponents;

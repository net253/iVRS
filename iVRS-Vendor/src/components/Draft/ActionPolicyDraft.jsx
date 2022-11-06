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
  Icon,
} from "@chakra-ui/react";

import useDraftEdit from "../../store/DrafStore/DraftEdit";
import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";

const question = [
  {
    topics: "STDPackingBase64",
    thai: "5. มีการกำหนดมาตรฐานการบรรจุ (Standard Packing) หรือไม่",
    eng: "Do you have standard packing?",
    accept: "stdPacking",
    isDetail: "IsSTDPacking",
  },
  {
    topics: "MOQBase64",
    thai: "6. มีการกำหนดจำนวนการสั่งซื้อ (MOQ) หรือไม่",
    eng: "Do you have MOQ?",
    accept: "moq",
    isDetail: "IsMOQ",
  },
];

const ActionpolicyDraft = () => {
  const [moq, setMoq] = React.useState(false);
  const [std, setStd] = React.useState(false);
  const { draftEdit, updateActionPolicy, updateisSTD, updatePDFMOQSTD } =
    useDraftEdit();
  const { ActionPolicy } = draftEdit;

  const handleQuest = (text, value) => {
    if (text == "STDPackingBase64") {
      if (value == "true") {
        setStd(true);
      } else {
        setStd(false);
      }
    } else {
      if (value == "true") {
        setMoq(true);
      } else {
        setMoq(false);
      }
    }
  };

  const onChangePDF = async (topics, e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    updatePDFMOQSTD(topics, base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  useEffect(() => {}, []);

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
              4. นโยบายการดำเนินการ / <span>Operation Policy</span>
            </Text>
            {ActionPolicy.length != 0 || ActionPolicy == undefined ? (
              <Icon as={FaCheckCircle} color="green.500" mx="5px" />
            ) : (
              <Icon as={FaExclamationCircle} color="red.500" mx="5px" />
            )}
          </Flex>
        </GridItem>
        {ActionPolicy?.map((info, i) => (
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
                <RadioGroup
                  onChange={(value) => updateActionPolicy(info.name, value)}
                  defaultValue={info.value}
                >
                  <Stack direction="row" colSpan={3}>
                    <GridItem w="14rem">
                      <Radio value={"1"}>{info.labelChecked1}</Radio>
                    </GridItem>
                    <GridItem w="14rem">
                      <Radio value={"3"}> {info.labelChecked3}</Radio>
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
            <Flex h="100%" alignItems={"center"}>
              <Text fontWeight="bold" fontSize={{ base: "sm", sm: "sm" }}>
                {text.thai} /<span> {text.eng}</span>
              </Text>
              {draftEdit[text.topics] != "" ? (
                <Icon as={FaCheckCircle} color="green.500" mx="5px" />
              ) : (
                <Icon as={FaExclamationCircle} color="red.500" mx="5px" />
              )}
            </Flex>
          </GridItem>
          <GridItem w="100%" colSpan={3}>
            <HStack spacing={10} justifyContent="center">
              <RadioGroup
                onChange={(value) => updateisSTD(text.isDetail, value)}
                defaultValue={draftEdit[text.isDetail].toString()}
              >
                <Stack direction="row">
                  <Radio
                    name={text.topics}
                    value={"false"}
                    px="1rem"
                    onChange={(e) => handleQuest(text.topics, e.target.value)}
                  >
                    ไม่มี
                  </Radio>
                  <Radio
                    value={"true"}
                    name={text.topics}
                    onChange={(e) => handleQuest(text.topics, e.target.value)}
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
                  onChange={(e) => onChangePDF(text.topics, e)}
                  isDisabled={text.accept == "stdPacking" ? !std : !moq}
                  type="file"
                  accept=".pdf"
                  variant="unstyled"
                  size="sm"
                  bgColor={
                    draftEdit[text.isDetail] != "" ? "green.100" : "white"
                  }
                />
              </Stack>
            </HStack>
          </GridItem>
        </React.Fragment>
      ))}
    </>
  );
};

export default ActionpolicyDraft;

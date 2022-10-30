import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  Flex,
  InputGroup,
  InputLeftAddon,
  Text,
  Box,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { Pending } from "../Home";

const Home = () => {
  return (
    <>
      <Box h="83vh">
        <Text fontSize={"2xl"} fontWeight={"bold"} px="1rem" pt="1rem">
          รายการลงทะเบียนผู้ขาย
        </Text>
        <Tabs py="1rem" px="1rem" variant="enclosed">
          <TabList>
            <Flex w="100%" justifyContent={"space-between"}>
              <Flex>
                <Tab fontSize={"sm"} color={"black"}>
                  รอดำเนินการ
                </Tab>
                <Tab fontSize={"sm"} color={"black"}>
                  ดำเนินการสำเร็จ
                </Tab>
                <Tab fontSize={"sm"} color={"black"}>
                  ประวัติการทำรายการ
                </Tab>
              </Flex>
              <Flex>
                <InputGroup py="5px" size={"md"}>
                  <InputLeftAddon>
                    <BiSearch />
                  </InputLeftAddon>
                  <Input type="text" placeholder="ค้นหา" />
                </InputGroup>
              </Flex>
            </Flex>
          </TabList>
          <TabPanels overflow={"auto"}>
            <TabPanel>
              <Pending />
            </TabPanel>
            <TabPanel>
              <Pending />
            </TabPanel>
            <TabPanel>
              <Pending />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default Home;

import React, { useState } from "react";
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
import { Pending, AllTable } from "../Home";

const Home = () => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

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
                  รายการทั้งหมด
                </Tab>
              </Flex>
              <Flex>
                <InputGroup py="5px" size={"sm"} rounded={"md"}>
                  <InputLeftAddon>
                    <BiSearch />
                  </InputLeftAddon>
                  <Input
                    type="text"
                    placeholder="ค้นหา"
                    onChange={onChangeSearch}
                  />
                </InputGroup>
              </Flex>
            </Flex>
          </TabList>
          <TabPanels overflow={"auto"}>
            <TabPanel>
              <Pending onChangeSearch={search} />
            </TabPanel>
            <TabPanel>
              <AllTable onChangeSearch={search} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default Home;

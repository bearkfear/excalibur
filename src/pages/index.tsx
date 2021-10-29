import type { NextPage } from "next";
import {
  Container,
  HStack,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import { Appbar } from "../components/Appbar";
import { Editor } from "../components/Editor";
import { Result } from "../components/Result";
import { Formulas } from "../components/Formulas";
import React from "react";
const Home: NextPage = () => {
  return (
    <Stack bg="Menu" flex={1}>
      <Container
        maxW="full"
        minH="100vh"
        maxH="100vh"
        h="100vh"
        overflow="hidden"
      >
        {/* <Appbar /> */}
        <HStack flex={1}>
          <Tabs bg="white" rounded="md" my="10" flex={1} variant="enclosed">
            <TabList>
              <Tab>Formulas</Tab>
              <Tab>Variaveis</Tab>
            </TabList>

            <TabPanels flex={1}>
              <TabPanel maxH="85vh" overflowY="auto">
                <Formulas />
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <VStack flex={2}>
            <Editor />
            <Result resultado={"Oi"} />
          </VStack>
        </HStack>
      </Container>
    </Stack>
  );
};

export default Home;

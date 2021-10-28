import type { NextPage } from "next";
import { Container, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Appbar } from "../components/Appbar";
import { Editor } from "../components/Editor";
import { Result } from "../components/Result";
import { Formulas } from "../components/Formulas";
import React from "react";
const Home: NextPage = () => {
  return (
    <Stack bg="Menu" flex={1}>
      <Container maxW="container.xl" minH="100vh" maxH="100vh" h="100vh" overflow="hidden">
        <Appbar />
        <Editor />
        <Result resultado={"Oi"} />
        <Tabs bg="white" rounded="md" my="10" flex={1}>
          <TabList>
            <Tab>Formulas</Tab>
            <Tab>Variaveis</Tab>
          </TabList>

          <TabPanels flex={1}>
            <TabPanel maxH="full" overflowY="auto">
              <Formulas />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>

      </Container>
    </Stack>
  );
};

export default Home;

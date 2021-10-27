import type { NextPage } from "next";
import { Container, Stack } from "@chakra-ui/react";
import { Appbar } from "../components/Appbar";
import { Editor } from "../components/Editor";
const Home: NextPage = () => {
  return (
    <Stack bg="Menu">
      <Container maxW="container.xl" minH="100vh">
        <Appbar />
        <Editor />
      </Container>
    </Stack>
  );
};

export default Home;

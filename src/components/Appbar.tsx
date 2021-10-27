import { Flex, Heading } from "@chakra-ui/react";

export function Appbar() {
  return (
    <header>
      <Flex
        bg={`white`}
        shadow="sm"
        p="6"
        rounded="md"
        justifyContent="space-between"
        my="10"
      >
        <Heading size="md" textShadow="md">
          Excalibur⚔️
        </Heading>
      </Flex>
    </header>
  );
}

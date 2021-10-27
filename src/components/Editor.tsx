import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React, { useCallback } from "react";

export function Editor() {
  const handlePressKeyDown = useCallback((event: React.KeyboardEvent) => {
    console.log(event);
    if (event.code === "Space" && event.ctrlKey) {
      event.preventDefault();
      alert("CTRL + SPACE");
    }
  }, []);
  return (
    <Stack
      bg="white"
      shadow="sm"
      p="6"
      rounded="md"
      justifyContent="space-between"
      my="10"
    >
      <FormControl>
        <FormLabel>Formula</FormLabel>
        <Textarea
          placeholder="Digite uma formula"
          fontFamily="monospace"
          onKeyDown={(e) => handlePressKeyDown(e)}
        />
        <FormHelperText>Escreva uma formula</FormHelperText>
      </FormControl>
      <Flex>
        <Button colorScheme="messenger" onClick={() => true}>
          Executar
        </Button>
      </Flex>
    </Stack>
  );
}

import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
// @ts-ignore
import * as formulajs from "@formulajs/formulajs";
export function Formulas() {
  return (
    <Stack overflowY="auto" p="2">
      {Object.keys(formulajs).map((key) => {
        return (
          <Button key={key} justifyContent="space-between">
            {key}
          </Button>
        );
      })}
    </Stack>
  );
}

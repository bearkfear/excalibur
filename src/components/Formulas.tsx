import { Stack } from "@chakra-ui/layout"
// @ts-ignore
import * as formulajs from "@formulajs/formulajs"
export function Formulas() {
    return <Stack overflowY="auto">
        {Object.keys(formulajs).map(key => {
            return (
                <p key={key}>{key}</p>
            )
        })}
    </Stack>
}
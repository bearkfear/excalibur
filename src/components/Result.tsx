import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/alert";
import React from "react";

export interface ResultProps {
    resultado?: string;
}
export function Result({ resultado }: ResultProps = { resultado: "oi"}) {
    if (!resultado) {
        return null;
    }
    return (
        <Alert> 
            <AlertTitle mr={2}>
                Resultado
            </AlertTitle>
            <AlertDescription>{resultado}</AlertDescription>
        </Alert>
    )
}
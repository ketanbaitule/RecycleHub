"use client";

import { 
    Heading,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    InputRightElement,
    Button,
    InputGroup,
    Input,
    Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { useFormStatus } from 'react-dom'

export default function SearchByNamee(){
    const { pending } = useFormStatus()
    return(
        <>
            <div className="flex flex-row items-end gap-2">
                <FormControl>
                    <FormLabel>Name of Business</FormLabel>
                    <Input type='text' name="name" placeholder="Enter name/ id of business" />
                </FormControl>
                <div>
                    <Button isLoading={pending} type="submit" px={6} py={2} >Search Business</Button>
                </div>
            </div>
            <div className="mt-4">
                Want your business to be listed, Contact us now using the following <ChakraLink as={Link} color="teal.500" href={"mailto:contact@localhost"}>Link</ChakraLink>
            </div>
        </>
    )
}
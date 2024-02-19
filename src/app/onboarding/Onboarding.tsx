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
    Select,
    Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { useFormStatus } from 'react-dom'

export default function Onboarding(){
    const { pending } = useFormStatus()
    return(
        <>
            <div>
                <Heading>Profile Details</Heading>
            </div>

            <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type='text' name="name" placeholder="John Smith" required />
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Designation</FormLabel>
                <Input type='text' name="name" placeholder="Student of GCOEN" required />
            </FormControl>

            <FormControl>
                <FormLabel>Upload Profile Picture</FormLabel>
                <Input type='file' name="profile" />
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Account Type</FormLabel>
                <Select name="account_type" required>
                    <option key={"citizen"} selected >Citizen</option>
                    <option key={"collector"}>Collector</option>
                    <option key={"processors"}>Processors</option>
                    <option key={"startups"}>Startups</option>
                </Select>
            </FormControl>
            
            <div>
                <Button isLoading={pending} type="submit" px={6} py={2} >Save</Button>
            </div>
        </>
    )
}
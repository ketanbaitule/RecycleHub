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
                <Input type='text' name="designation" placeholder="Student of GCOEN" required />
            </FormControl>

            <FormControl>
                <FormLabel>Upload Profile Picture</FormLabel>
                <Input type='file' name="avatar" />
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Account Type</FormLabel>
                <Select defaultValue={"citizen"} name="account_type" required>
                    <option value={"citizen"}>Citizen</option>
                    <option value={"collector"}>Collector</option>
                    <option value={"processors"}>Processors</option>
                    <option value={"startups"}>Startups</option>
                </Select>
            </FormControl>
            
            <div>
                <Button isLoading={pending} type="submit" px={6} py={2} >Save</Button>
            </div>
        </>
    )
}
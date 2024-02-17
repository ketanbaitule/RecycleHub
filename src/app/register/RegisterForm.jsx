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

export default function RegisterForm(){
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const { pending } = useFormStatus()
    return(
        <>
            <div>
                <Heading>Register</Heading>
                <Text fontSize='xl'>
                    Join us in an amazing journey!!
                </Text>
            </div>

            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type='email' name="email" placeholder="Enter Email" />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type='password' name="password" placeholder="Enter Password" />
            </FormControl>
            <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Confirm Password'
                        name="confirm-password"
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <div>
                <Button isLoading={pending} type="submit" px={6} py={2} >Register</Button>
            </div>
            <div>
                Already have an account yet? <ChakraLink as={Link} color="teal.500" href={"login"}>Login now</ChakraLink>
            </div>
        </>
    )
}
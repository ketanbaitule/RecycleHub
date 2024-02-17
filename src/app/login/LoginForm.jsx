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

export default function LoginForm(){
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const { pending } = useFormStatus()
    return(
        <>
            <div>
                <Heading>Log in</Heading>
                <Text fontSize='xl'>
                    Welcome Back!!
                </Text>
            </div>

            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type='email' name="email" placeholder="Enter Email" />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        name="password"
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <div>
                <Button isLoading={pending} type="submit" px={6} py={2} >Login</Button>
            </div>
            <div>
                Don&apos;t have an account yet? <ChakraLink as={Link} color="teal.500" href={"register"}>Register now</ChakraLink>
            </div>
        </>
    )
}
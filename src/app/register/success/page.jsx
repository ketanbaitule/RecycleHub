"use client";

import Link from "next/link";

import { Heading, Text, Link as ChakraLink } from "@chakra-ui/react";

export default function RegisterSuccess(){
    return (
        <>
            <div className="max-w-2xl mx-auto">
                <Heading>Registration Success..</Heading>
                <Text>
                    Kindly <ChakraLink color="teal.500" as={Link} href="/login"> Login</ChakraLink> to your account.
                </Text>
            </div>
        </>
    )
}
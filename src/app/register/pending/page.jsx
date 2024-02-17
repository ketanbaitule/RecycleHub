"use client";
import { Heading, Text} from "@chakra-ui/react";

export default function RegisterSuccess(){
    return (
        <>
            <div className="max-w-2xl mx-auto">
                <Heading>Registration Pending..</Heading>
                <Text>
                    Please check your email to confirm signup.
                </Text>
            </div>
        </>
    )
}
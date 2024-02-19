"use client";
import {Card, CardBody, Text, LinkBox, LinkOverlay } from "@chakra-ui/react"
import Link from "next/link";

export default function CategoryCard({category}){
    return(
        <LinkBox as={Card} bg={"brand"} align={"center"} height={"10rem"} width={"20rem"} size={"md"}>
            <CardBody className="flex flex-col items-center justify-center text-center">
            <LinkOverlay as={Link} href={`/nearby/${category}`}>
            <Text className="text-4xl font-semibold uppercase">{category}</Text>
            </LinkOverlay>
            </CardBody>
        </LinkBox>
    )
}
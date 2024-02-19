"use client"

import { Heading } from "@chakra-ui/react"
import Categories from "./Categories"
import SearchByName from "./SearchByName"

export default function NearbyPage(){
    return(
        <>
            <Heading>Nearby <span className="p-2 bg-brand">Collection Centers</span> </Heading>

            <div>
                <Heading size={"md"}>Search By Category</Heading>
                <div>
                    <Categories />
                </div>
            </div>

            <div>
                <Heading size={"md"}>Search By Name / Unique Identifier</Heading>
                <form>
                    <SearchByName />
                </form>
            </div>
        </>
    )
}
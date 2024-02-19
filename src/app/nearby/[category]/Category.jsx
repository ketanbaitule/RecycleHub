"use client"
import { Heading, Stack, Box, StackDivider, Text, Button, ButtonGroup } from "@chakra-ui/react"
import CollectionCenter from './CollectionCenter';

export default function Category({name, collection_centers}){
    const collection_center = collection_centers[0]
    return(
        <>
            <div className="flex flex-col gap-5">
                <Heading className="uppercase"> Nearby Collection Center for <span className="bg-brand p-2"> {name} </span> </Heading>
                <Stack divider={<StackDivider />} spacing='4'>
                    {
                        collection_centers.map((collection_center, index)=>{
                            return(
                                <CollectionCenter key={index} collection_center={collection_center} />
                            )
                        })
                    }
                </Stack>
            </div>
        </>
    )
}
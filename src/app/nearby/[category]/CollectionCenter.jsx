"use client"
import { Heading, Stack, Box, StackDivider, Text, Button, ButtonGroup } from "@chakra-ui/react"
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
export default function CollectionCenter({collection_center}){
    return(
        <Box>
            <Heading size='md' textTransform='uppercase'>
            {collection_center.name}
            </Heading>
            <div className="flex flex-col text-gray-600 text-md gap-y-3">
                <div className="flex flex-row gap-2 items-baseline">
                    <FaMapMarkerAlt />
                    {collection_center.location}
                </div>
                <div>
                <ButtonGroup spacing='2'>
                    <Link href={`https://www.google.com/maps/search/?query=${encodeURIComponent(collection_center.location)}`}>
                        <Button variant='solid'>
                            Get Direction
                        </Button>
                    </Link>
                    <Link href={`tel:${collection_center.contact_no}`}>
                        <Button variant='ghost'>
                            Call
                        </Button>
                    </Link>
                </ButtonGroup>                              
                </div>
            </div>
        </Box>
    )
}
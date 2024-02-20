"use client"
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, Button } from "@chakra-ui/react"
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function EventCard({event_id, date, event_name, event_location, image}){
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const event_date =  new Date(date)
    let day = event_date.getDate()
    let month = months[event_date.getMonth()]

    const ButtonLink = (props)=>(
        <Link href={"/event/"+event_id} {...props} />
    )

    return(
        <Card maxW='sm'>
            <CardBody>
                <div className=" relative ">
                    <Image
                    src={image}
                    alt='Green double couch with wooden legs '
                    borderRadius='lg'
                    className=" h-[276px]  "
                    />
                    <div className=" flex flex-col items-center justify-center w-20 py-2 rounded-xl px-3 font-bold absolute top-3 left-3 bg-[#FFF6F2] text-[#F0635A] ">
                        <div className="text-3xl">{day}</div>
                        <div>{month}</div>
                    </div>
                </div>
                <Stack mt='6' spacing='3'>
                <Heading size='md'>{event_name}</Heading>
                <Text color='gray.600' fontSize='sm' className="flex items-center gap-2">
                    <FaMapMarkerAlt /> {event_location}
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Button as={ButtonLink} variant='ghost' colorScheme='blue'>
                    Get More Details
                </Button>
            </CardFooter>
        </Card>
    )
}
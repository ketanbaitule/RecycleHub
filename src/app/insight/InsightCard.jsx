"use client"
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Box, Heading, Text, IconButton, Image, Button } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';
import { Document } from 'react-pdf'


export default function InsightCard({ name, designation, content, avatar, type, data }) {

    let add_data = ""
    if(type=="image"){
        add_data = (
            <Image
                objectFit='cover'
                src={data.src}
                alt={data.alt} />
        )
    }else if(type=="pdf"){
        add_data = (
            <>
                <Document file={data.src} />
            </>
        )
    }

    return(
        <Card maxW='md'>
            <CardHeader>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name={name} src={avatar} />
                        <Box>
                            <Heading size='sm'>{name}</Heading>
                            <Text>{designation}</Text>
                        </Box>
                    </Flex>
                    {/* <IconButton
                        variant='ghost'
                        colorScheme='gray'
                        aria-label='See menu'
                        icon={<BsThreeDotsVertical />}
                        /> */}
                </Flex>
            </CardHeader>
            <CardBody pt={0}>
                <Text>
                    {content}
                </Text>
            </CardBody>
            
            {add_data}

            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                    '& > button': {
                        minW: '136px',
                    },
                }}
            >
                <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
                    Like
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                    Comment
                </Button>
                <Button flex='1' variant="ghost" leftIcon={<BiShare />}>
                    Share
                </Button>
            </CardFooter>
        </Card>
    )
}
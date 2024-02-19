"use client"
import { Card, CardHeader, CardBody, Text, CardFooter, Heading, Button } from "@chakra-ui/react"
export default function MissionCard({mission_objective, karma_points}){
    return (
        
            <Card bg={"#9DD549"} className="w-80 shrink-0">
                <CardBody>
                    <div className="flex flex-col py-2 gap-y-2 justify-between">
                        <Text as='i' textColor={"white"} size={"md"}>
                            {mission_objective}
                        </Text>
                        <Heading className="my-auto" textColor={"white"}>Earn {karma_points} karma points</Heading>
                    </div>
                </CardBody>
                <CardFooter>
                    <Button bg="white" textColor={"#8FB37B"} colorScheme="white" >Earn Now</Button>
                </CardFooter>
            </Card>
        
    )
}
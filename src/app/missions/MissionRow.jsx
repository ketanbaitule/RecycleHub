import { Heading } from "@chakra-ui/react"
import MissionCard from "./MissionCard"
import { Suspense } from "react";

export default function Mission({missions}){
    return(
        <div className="flex flex-col gap-4">
            <Heading size={"md"}>Mission</Heading>
            <div className="overflow-x-auto flex flex-nowrap items-stretch gap-4">
                <Suspense fallback={
                    <>
                        <MissionCard suspense={true} />
                        <MissionCard suspense={true} />
                        <MissionCard suspense={true} />
                    </>
                } >
                    {
                        missions.map((mission, index)=>{
                            return (
                                <MissionCard key={index} mission_objective={mission.mission_objective} karma_points={mission.karma_points} />
                            )
                        })
                    }
                </Suspense>
            </div>
        </div>
    )
}
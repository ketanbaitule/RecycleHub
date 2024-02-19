"use client"

import { Heading, Spacer, Text } from "@chakra-ui/react"
import demo_mission from "@/app/missions/demo_mission.json"
import demo_events from "@/app/event/demo-events.json"
import MissionRow from '@/app/missions/MissionRow'
import EventRow from "@/app/event/EventRow"
import { createClient } from "@/utils/supabase/client"
import { useUser } from "@/hooks/useUser"
import { useEffect, useMemo, useState } from "react"

export default function Discover(){
    const supabase = createClient()
    const [user, setUser] = useState("")

    const missions = demo_mission;
    const events = demo_events;

    useMemo(()=>{
        supabase.auth.getUser().then((_user, error)=>{
            setUser(_user.data.user)
        })
    }, [user?.email])
    return(
        <>
            <div className="serif max-w-5xl mx-auto my-8 flex flex-col gap-y-10 ">
                <div className="">
                    <Heading>Hi, <span className="text-green-500">{user?.email}!</span></Heading>
                    <Text className="text-gray-600">Let&apos;s contribute to our earth.</Text>
                </div>
                <MissionRow missions={missions} />

                <EventRow events={events} />
            </div>
        </>
    )
}
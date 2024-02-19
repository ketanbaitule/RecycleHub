"use client";

import { Heading } from "@chakra-ui/react";
import { Suspense } from "react";
import EventCard from "./EventCard";
export default function EventRow({events}){
    return(
        <section>
            <div className="flex flex-col gap-4">
                <Heading size={"md"}>Events</Heading>
                <div className="flex flex-wrap items-stretch justify-center gap-4">
                    <Suspense fallback={
                        <>
                            Loading...
                        </>
                    } >
                        {
                            events.map((event, index)=>{
                                return (
                                    <EventCard key={index} event_id={event.event_id} date={event.date} event_name={event.event_name} event_location={event.location} image={event.image} />
                                )
                            })
                        }
                    </Suspense>
                </div>
            </div>
        </section>
    )
}
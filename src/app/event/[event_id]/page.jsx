export default function EventDetails({params}){
    const event_id = params.event_id;
    return (
        <div className=" p-5 serif max-w-5xl mx-auto my-8 flex flex-col gap-y-10 ">
            Hi Event {event_id}
        </div>
    )
}
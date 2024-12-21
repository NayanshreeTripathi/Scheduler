import { getUserEvent } from "@/actions/events";
import EventCard from "@/components/event-card";
import { Suspense } from "react"


export default function EventPage(){
   return(
    <Suspense fallback={<div>Loading Events...</div>}>
       <Events/>
    </Suspense>
   );
}

const Events = async() => {
  const {events , username } = await getUserEvent();
  if(events.length === 0){
    return <p>You haven&apos;t created any events yet.</p>
  }
  return (<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    {events.map((event)=>(
      <EventCard key={event.id} event={event} username={username}/>
    ))}
  </div>)
}



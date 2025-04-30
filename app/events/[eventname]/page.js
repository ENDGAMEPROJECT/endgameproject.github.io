// Components
import EventFull from "@/components/EventFull";

import { events } from "@/constants/events";

const EventPage = async ({ params }) => {   
    const { eventname } = await params;
    return (
        <main className="standard_margin ">
            <EventFull eventname={eventname} />
        </main>
    );        
}

export default EventPage;

export async function generateStaticParams() {
    const paths = events.map((event) => ({
        eventname: event.eventname,
    }));
    console.log("paths", paths);

    return paths;
}
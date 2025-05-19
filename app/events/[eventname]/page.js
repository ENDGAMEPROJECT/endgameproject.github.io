// Components
import EventFull from "@/components/EventFull";
import NewsFull from "@/components/NewsFull";

import { events } from "@/constants/events";

const EventPage = async ({ params }) => {
  const { eventname } = await params;

  // Recuperar evento
  const event = events.find((e) => e.eventname === eventname);
  // Recuperar el tipo de evento para luego cargar una página u otra
  console.log(event.type);

  if (event.type === "Event") {
    return (
      <main className="standard_margin ">
        <EventFull eventname={eventname} />
      </main>
    );
  } else {
    return (
      <main className="standard_margin ">
        <NewsFull eventname={eventname} />
      </main>
    );
  }
};

export default EventPage;

export async function generateStaticParams() {
  const paths = events.map((event) => ({
    eventname: event.eventname,
  }));
  console.log("paths", paths);

  return paths;
}

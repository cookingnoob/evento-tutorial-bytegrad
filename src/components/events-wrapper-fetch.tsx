import { EventoEvent } from "@/lib/types";
import EventsList from "./events-list";
import { getEvents } from "@/lib/utils";

type EventsWrapperFetchProps = {
  city: string;
};

export default async function EventsWrapperFetch({
  city,
}: EventsWrapperFetchProps) {
  const events = await getEvents(city);

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

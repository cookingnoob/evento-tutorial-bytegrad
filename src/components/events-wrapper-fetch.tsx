import { EventoEvent } from "@/lib/types";
import EventsList from "./events-list";

type EventsWrapperFetchProps = {
  city: string;
};

export default async function EventsWrapperFetch({
  city,
}: EventsWrapperFetchProps) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/?city=${city}`,
    {
      next: {
        revalidate: 500,
      },
    }
  );

  const events: EventoEvent[] = await response.json();

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

import { EventoEvent } from "@prisma/client";
import EventCard from "./event-card";
import PaginationButtons from "./pagination-buttons";

type EventsListProps = {
  events: EventoEvent[];
  prevPath: string;
  nextPath: string;
};
export default async function EventsList({
  events,
  prevPath,
  nextPath,
}: EventsListProps) {
  return (
    <section className="flex flex-wrap gap-10 justify-center">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <PaginationButtons prevPath={prevPath} nextPath={nextPath} />
    </section>
  );
}

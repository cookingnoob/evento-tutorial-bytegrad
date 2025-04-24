import EventsList from "./events-list";
import { getEvents } from "@/lib/utils";

type EventsWrapperFetchProps = {
  city: string;
  page?: number;
};

export default async function EventsWrapperFetch({
  city,
  page = 1,
}: EventsWrapperFetchProps) {
  const { events, totalCount } = await getEvents(city, page);

  const prevPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";
  return (
    <>
      <EventsList events={events} prevPath={prevPath} nextPath={nextPath} />
    </>
  );
}

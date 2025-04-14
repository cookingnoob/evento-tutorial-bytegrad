import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { EventoEvent } from "@/lib/types";

type EventCityPagePros = {
  params: {
    city: string;
  };
};

export default async function EventsCityPage({ params }: EventCityPagePros) {
  const city = params.city;
  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events/?city=austin"
  );

  const events: EventoEvent[] = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      {city === "all" && <H1>All Events</H1>}
      {city !== "all" && (
        <H1>Events in {city.charAt(0).toLocaleUpperCase() + city.slice(1)}</H1>
      )}
      <EventsList events={events} />
    </main>
  );
}

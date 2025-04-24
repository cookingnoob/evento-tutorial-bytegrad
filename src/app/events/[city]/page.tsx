import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "./loading";
import EventsWrapperFetch from "@/components/events-wrapper-fetch";
import { capitalizeFirstChar } from "@/lib/utils";
import { Metadata } from "next";

type Props = {
  params: {
    city: string;
  };
};

type EventsCityPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;
  const cityCapitalized = capitalizeFirstChar(city);
  return {
    title: city === "all" ? `All events` : `Events in ${cityCapitalized}`,
  };
}

export default async function EventsCityPage({
  params,
  searchParams,
}: EventsCityPageProps) {
  const city = params.city;
  const page = searchParams.page ?? 1;

  const cityCapitalized = capitalizeFirstChar(city);

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className={"mb-20"}>
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${cityCapitalized}`}
      </H1>
      <Suspense fallback={<Loading />}>
        <EventsWrapperFetch city={city} page={+page} />
      </Suspense>
    </main>
  );
}

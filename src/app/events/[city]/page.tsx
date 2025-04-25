import H1 from "@/components/header-one";
import { Suspense } from "react";
import Loading from "./loading";
import EventsWrapperFetch from "@/components/events-wrapper-fetch";
import { capitalizeFirstChar } from "@/lib/utils";
import { Metadata } from "next";
import { z } from "zod";

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

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsCityPage({
  params,
  searchParams,
}: EventsCityPageProps) {
  const city = params.city;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

  const cityCapitalized = capitalizeFirstChar(city);

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className={"mb-20"}>
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${cityCapitalized}`}
      </H1>
      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventsWrapperFetch city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}

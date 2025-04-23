import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EventoEvent } from "@prisma/client";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const capitalizeFirstChar = (string: string): string => {
  return string.charAt(0).toLocaleUpperCase() + string.slice(1);
};

export const getEvents = async (city: string) => {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/?city=${city}`,
    {
      next: {
        revalidate: 500,
      },
    }
  );
  const events: EventoEvent[] = await response.json();
  return events;
};

export async function getEvent(slug: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event: EventoEvent = await response.json();
  return event;
}

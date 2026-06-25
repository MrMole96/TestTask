import { Event, EventStatus } from "../api/types";

export const filterByStatus = (
  events: Event[],
  status: EventStatus,
): Event[] => {
  return events.filter((event) => event.status === status);
};

export const filterByText = (event: Event, text: string): boolean => {
  return (
    event.type.toLowerCase().includes(text) ||
    event.zone.name.toLowerCase().includes(text) ||
    event.zone.city.name.toLowerCase().includes(text)
  );
};

export const sortEventsByDate = (a: Event, b: Event) =>
  new Date(a.date).getTime() - new Date(b.date).getTime();

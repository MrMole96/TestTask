import { Event } from "../api/types";

export const getUpcomingNumberOfEvents = (events: Event[]): number => {
  return events.filter((event) => event.status === "upcoming").length;
};

export const getLiveNumberOfEvents = (events: Event[]): number => {
  return events.filter((event) => event.status === "live").length;
};

export const getPastNumberOfEvents = (events: Event[]): number => {
  return events.filter((event) => event.status === "past").length;
};

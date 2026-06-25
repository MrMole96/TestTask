import { Event } from "./types";

export const fetchEventsQuery = async (): Promise<Event[]> => {
  return fetch("https://cdn.timeleft.com/frontend-tech-test/events.json").then(
    (data) => data.json(),
  );
};

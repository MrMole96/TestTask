import { Event } from "../api/types";

export const events: Event[] = [
  {
    id: "1",
    type: "Concert",
    date: "2026-07-10T18:00:00Z",
    booked: 20,
    capacity: 100,
    status: "upcoming",
    zone: {
      id: 1,
      name: "Central Zone",
      city: {
        id: 1,
        name: "Warsaw",
        country: {
          id: 1,
          name: "Poland",
        },
      },
    },
  },
  {
    id: "2",
    type: "Conference",
    date: "2026-08-12T10:00:00Z",
    booked: 50,
    capacity: 80,
    status: "live",
    zone: {
      id: 2,
      name: "North Zone",
      city: {
        id: 2,
        name: "Berlin",
        country: {
          id: 2,
          name: "Germany",
        },
      },
    },
  },
];

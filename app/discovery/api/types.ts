export type EventStatus = "upcoming" | "live" | "past";

export enum EventStatusEnum {
  UPCOMING = "upcoming",
  LIVE = "live",
  PAST = "past",
}

export type Event = {
  id: string;
  type: string;
  date: string;
  zone: {
    id: number;
    name: string;
    city: {
      id: number;
      name: string;
      country: {
        id: number;
        name: string;
      };
    };
  };
  booked: number;
  capacity: number;
  status: EventStatus;
};

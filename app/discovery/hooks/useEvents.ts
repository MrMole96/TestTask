import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchEventsQuery } from "../api/queries";
import { Event } from "../api/types";
import { filterByText, sortEventsByDate } from "../utils/events";

export const useEvents = () => {
  const {
    data = [],
    isLoading,
    isFetching,
    refetch,
  } = useQuery<Event[]>({ queryKey: ["events"], queryFn: fetchEventsQuery });
  const cities = new Set(data.map((event) => event.zone.city.name)) || [];
  const countries =
    new Set(data.map((event) => event.zone.city.country.name)) || [];
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [search, setSearch] = useState("");

  const filteredData = data
    .filter((event) => {
      const matchesCity =
        selectedCity === "all" || event.zone.city.name === selectedCity;
      const matchesCountry =
        selectedCountry === "all" ||
        event.zone.city.country.name === selectedCountry;
      const matchesText = filterByText(event, search.toLowerCase());
      return matchesCity && matchesCountry && matchesText;
    })
    .sort(sortEventsByDate);

  console.log("filteredData", filteredData);
  console.log("isFetching", isFetching);
  console.log("isLoading", isLoading);

  return {
    filteredData,
    isLoading,
    isFetching,
    refetch,
    cities,
    countries,
    selectedCity,
    setSelectedCity,
    selectedCountry,
    setSelectedCountry,
    search,
    setSearch,
  };
};

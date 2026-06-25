import { queryClient } from "@/app/_layout";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { Event } from "../api/types";

export default function EventScreen() {
  const { eventId } = useLocalSearchParams<{ eventId: string }>();
  const events = queryClient.getQueryData<Event[]>(["events"]) ?? [];
  const event = events.find((item) => item.id === eventId);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Event Details
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>{event?.id}</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>Type: {event?.type}</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>Status: {event?.status}</Text>
        </View>
         <View style={{ marginBottom: 10 }}>
          <Text>Booked: {event?.booked}</Text>
        </View>
         <View style={{ marginBottom: 10 }}>
          <Text>Capacity: {event?.capacity}</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>Country: {event?.zone.city.country.name}</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>City: {event?.zone.city.name}</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>Zone: {event?.zone.name}</Text>
        </View>
      </View>
    </View>
  );
}

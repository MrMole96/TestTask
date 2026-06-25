import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Event } from "../api/types";

interface EventItemProps {
  event: Event;
  onPress: () => void;
}

export const EventItem = ({ event, onPress }: EventItemProps) => {
  const borderColor =
    event.status === "live"
      ? "green"
      : event.status === "upcoming"
        ? "red"
        : "gray";

  return (
    <TouchableOpacity
      style={[styles.container, { borderColor }]}
      onPress={onPress}
    >
      <View>
        <Text>{new Date(event.date).toLocaleString()}</Text>
        <Text>
          Booked {event.booked} of {event.capacity}
        </Text>
      </View>
      <View>
        <Text>{event.type}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});

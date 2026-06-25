import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Event, EventStatusEnum } from "../api/types";

interface EventItemProps {
  event: Event;
  onPress: () => void;
}

export const EventItem = ({ event, onPress }: EventItemProps) => {
  const borderColor =
    event.status === EventStatusEnum.LIVE
      ? "green"
      : event.status === EventStatusEnum.UPCOMING
        ? "red"
        : "gray";

  const availabilityColor =
    event.booked < event.capacity - 5
      ? "green"
      : event.booked < event.capacity
        ? "orange"
        : "red";

  return (
    <TouchableOpacity
      style={[styles.container, { borderColor }]}
      onPress={onPress}
    >
      <View>
        <Text>{new Date(event.date).toLocaleString()}</Text>
        <View style={styles.textContainer}>
          <Text>
            Booked {event.booked} of {event.capacity}
          </Text>
          <View
            style={[
              styles.availibilityDot,
              { backgroundColor: availabilityColor },
            ]}
          />
        </View>
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
  textContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  availibilityDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
});

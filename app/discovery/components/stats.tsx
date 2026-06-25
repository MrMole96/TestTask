import { StyleSheet, Text, View } from "react-native";

// Currently, endpoint returns only array of events, so i would expect to get these props in separate query
export const Stats = ({
  upcoming,
  live,
  past,
}: {
  upcoming: number;
  live: number;
  past: number;
}) => {
  return (
    <View style={styles.statsContainer}>
      <Text style={[styles.statsText, { color: "red" }]}>
        Upcoming: {upcoming}
      </Text>
      <Text style={[styles.statsText, { color: "green" }]}>Live: {live}</Text>
      <Text style={[styles.statsText, { color: "gray" }]}>Past: {past}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    gap: 10,
  },
  statsText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

import { StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import { DiscoveryScreen } from "../discovery/discoveryScreen";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <DiscoveryScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import { router } from "expo-router";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { EventItem } from "./components/EventItem";
import { FilterPicker } from "./components/FilterPicker";
import { Stats } from "./components/Stats";
import { useEvents } from "./hooks/useEvents";
import {
  getLiveNumberOfEvents,
  getPastNumberOfEvents,
  getUpcomingNumberOfEvents,
} from "./utils/stats";

export const DiscoveryScreen = () => {
  const {
    filteredData,
    isLoading,
    cities,
    countries,
    selectedCity,
    setSelectedCity,
    selectedCountry,
    setSelectedCountry,
    search,
    setSearch,
    refetch,
    isFetching,
  } = useEvents();

  const onRefresh = async () => {
    await refetch();
  };

  if (isLoading) {
    //Show sceleton or loading indicator
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>Discovery Screen</Text>
      <FilterPicker
        label="City"
        selectedValue={selectedCity}
        onSelectValue={setSelectedCity}
        list={Array.from(cities)}
      />
      <FilterPicker
        label="Country"
        selectedValue={selectedCountry}
        onSelectValue={setSelectedCountry}
        list={Array.from(countries)}
      />

      <TextInput
        style={{ width: 200, height: 40, borderWidth: 1 }}
        value={search}
        onChangeText={setSearch}
        placeholder="Search..."
      />
      <Stats
        upcoming={getUpcomingNumberOfEvents(filteredData)}
        live={getLiveNumberOfEvents(filteredData)}
        past={getPastNumberOfEvents(filteredData)}
      />
      <FlatList
        data={filteredData}
        refreshing={isFetching}
        onRefresh={onRefresh}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventItem
            event={item}
            onPress={() =>
              router.push({
                pathname: "/discovery/modals/eventModal",
                params: { eventId: item.id },
              })
            }
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        //Add
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

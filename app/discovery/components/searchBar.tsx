import { StyleSheet, TextInput, View } from "react-native";

interface SearchInputProps {
  search: string;
  placeholder?: string;
  setSearch: (value: string) => void;
}

export const SearchInput = ({
  search,
  placeholder = "Search...",
  setSearch,
}: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={search}
        onChangeText={setSearch}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
  },
});

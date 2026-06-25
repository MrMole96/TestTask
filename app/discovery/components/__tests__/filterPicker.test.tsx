import { fireEvent, render, screen } from "@testing-library/react-native";
import { FilterPicker } from "../filterPicker";

jest.mock("@expo/ui", () => {
  const React = require("react");
  const { Pressable, Text, View } = require("react-native");

  const Picker = ({
    children,
    onValueChange,
  }: {
    children: React.ReactNode;
    onValueChange: (value: string) => void;
  }) => (
    <Pressable testID="picker" onPress={() => onValueChange("Warsaw")}>
      {children}
    </Pressable>
  );

  Picker.Item = ({ label }: { label: string }) => <Text>{label}</Text>;

  return {
    Host: View,
    Row: View,
    Spacer: View,
    Text,
    Picker,
  };
});

describe("FilterPicker", () => {
  it("displays the label and available values", () => {
    render(
      <FilterPicker
        label="City"
        selectedValue="all"
        onSelectValue={jest.fn()}
        list={["Warsaw", "Berlin"]}
      />,
    );

    expect(screen.getByText("City:")).toBeTruthy();
    expect(screen.getByText("all")).toBeTruthy();
    expect(screen.getByText("Warsaw")).toBeTruthy();
    expect(screen.getByText("Berlin")).toBeTruthy();
  });

  it("passes the selected value to its callback", () => {
    const onSelectValue = jest.fn();

    render(
      <FilterPicker
        label="City"
        selectedValue="all"
        onSelectValue={onSelectValue}
        list={["Warsaw"]}
      />,
    );

    fireEvent.press(screen.getByTestId("picker"));

    expect(onSelectValue).toHaveBeenCalledWith("Warsaw");
  });
});

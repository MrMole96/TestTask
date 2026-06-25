import { Host, Picker, Row, Spacer, Text } from "@expo/ui";

interface FilterPickerProps {
  label: string;
  selectedValue: string;
  onSelectValue: (value: string) => void;
  list: string[];
}

export const FilterPicker = ({
  label,
  selectedValue,
  onSelectValue,
  list,
}: FilterPickerProps) => {
  const listWithAll = ["all", ...list];

  return (
    <Host matchContents style={{ width: "100%" }}>
      <Row
        alignment="center"
        spacing={12}
        style={{ padding: 16, width: "100%" }}
      >
        <Text>{`${label}:`}</Text>
        <Spacer flexible />

        <Picker selectedValue={selectedValue} onValueChange={onSelectValue}>
          {listWithAll.map((item) => (
            <Picker.Item key={item} label={item} value={item} />
          ))}
        </Picker>
      </Row>
    </Host>
  );
};

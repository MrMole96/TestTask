import { render, screen } from "@testing-library/react-native";
import { DiscoveryScreen } from "../discoveryScreen";
import { events } from "./fixtures";

jest.mock("../hooks/useEvents");

jest.mock("../components/FilterPicker", () => ({
  FilterPicker: () => null,
}));

const useEventsMock = jest.requireMock("../hooks/useEvents").useEvents;

describe("DiscoveryScreen", () => {
  it("displays events returned by useEvents", () => {
    useEventsMock.mockReturnValue({
      filteredData: events,
      isLoading: false,
      isFetching: false,
      refetch: jest.fn(),
      cities: new Set(["Warsaw", "Berlin"]),
      countries: new Set(["Poland", "Germany"]),
      selectedCity: "all",
      setSelectedCity: jest.fn(),
      selectedCountry: "all",
      setSelectedCountry: jest.fn(),
      search: "",
      setSearch: jest.fn(),
    });

    render(<DiscoveryScreen />);

    expect(screen.getByText("Concert")).toBeTruthy();
    expect(screen.getByText("Conference")).toBeTruthy();
    expect(screen.getByText("Booked 20 of 100")).toBeTruthy();
    expect(screen.getByText("Booked 50 of 80")).toBeTruthy();
  });

  it("displays the loading state", () => {
    useEventsMock.mockReturnValue({
      filteredData: [],
      isLoading: true,
    });

    render(<DiscoveryScreen />);

    expect(screen.getByText("Loading...")).toBeTruthy();
  });
});

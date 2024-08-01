import { render, screen } from "@testing-library/react";
import RestaurentCrad from "../RestaurentCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should render RestaurentCard component with props Data", () => {
  render(<RestaurentCrad resData={MOCK_DATA} />);

  const name = screen.getByText("Burger King");

  expect(name).toBeInTheDocument();
});

import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurentMenu from "../RestaurentMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should load Restarurent Menu Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurentMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Recommended(20)");
  fireEvent.click(accordionHeader);
  const Items = screen.getAllByTestId("foodItems");

  expect(Items.length).toBe(20);
  expect(screen.getByText("Cart (0 Items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1 Items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart (2 Items)")).toBeInTheDocument();
});

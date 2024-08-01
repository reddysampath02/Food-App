import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../Utils/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render Header Component with a login button", () => {
  //render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // Querying
  const loginButton = screen.getByRole("button", { name: "Login" });

  // Assertion
  expect(loginButton).toBeInTheDocument();
});

test("Should render Header Component with a login button", () => {
  //render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // Querying
  const loginButton = screen.getByText("Login");

  // Assertion
  expect(loginButton).toBeInTheDocument();
});

test("Should render Header Component with Cart items 0", () => {
  //render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // Querying
  const cartItems = screen.getByText("Cart (0 Items)");

  // Assertion
  expect(cartItems).toBeInTheDocument();
});

test("Should render Header Component with Cart item", () => {
  //render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // Querying
  const cart = screen.getByText(/Cart/); // also pass regex whwn where using getByText

  // Assertion
  expect(cart).toBeInTheDocument();
});

test("Should Change Login Button to LogOut on click Header", () => {
  //render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // Querying
  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });
  // Assertion
  expect(logoutButton).toBeInTheDocument();
});

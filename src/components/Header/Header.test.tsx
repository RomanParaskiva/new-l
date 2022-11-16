import React from "react";
import {
  render,
  screen,
  renderHook,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Header";

render(
  <Provider store={store}>
    <Router>
      <Header />
    </Router>
  </Provider>
);

describe("test Header", () => {
  test("renders Header component", async () => {
    expect(await screen.findByText(/Game of Life/)).toBeInTheDocument();
  });
});

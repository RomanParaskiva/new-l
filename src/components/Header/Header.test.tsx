import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";

import { AuthProvider } from "../../hooks/auth.hook";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Header";

describe("test Header", () => {
  test("renders Header component", async () => {
    render(
      <Provider store={store}>
        <Router>
          <AuthProvider>
            <Header />
          </AuthProvider>
        </Router>
      </Provider>
    );

    expect(await screen.findByText(/Game of Life/)).toBeInTheDocument();
  });
});

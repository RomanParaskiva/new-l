import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { AuthProvider } from "../../hooks/auth.hook";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Header";

describe("test Header", () => {
  test("renders Header component", async () => {
    render(
      <Router>
        <AuthProvider>
          <Header />
        </AuthProvider>
      </Router>
    );

    expect(await screen.findByText(/Game of Life/)).toBeInTheDocument();
  });
});

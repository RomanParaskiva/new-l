import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Header } from "./Header";

describe("test Header", () => {
  test("renders Header component", async () => {
    render(<Header />);

    expect(await screen.findByText(/Game of Life/)).toBeInTheDocument();

    expect(render(<Header />)).toMatchSnapshot();
  });
});

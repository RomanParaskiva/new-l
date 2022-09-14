import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Sidebar } from "./Sidebar";

describe("Sidebar tests", () => {
  test("renders Sidebar component and get snapshot", () => {
    expect(render(<Sidebar />)).toMatchSnapshot();
  });

  test("render UI elements", async () => {
    render(<Sidebar />);

    expect(await screen.findByText(/Старт/)).toBeInTheDocument();

    expect(await screen.findByText(/Сброс/)).toBeInTheDocument();

    expect(await screen.findByText("1")).toBeInTheDocument();

    expect(await screen.findByText("1.5")).toBeInTheDocument();

    expect(await screen.findByText("2")).toBeInTheDocument();

    expect(await screen.findByText("50/50")).toBeInTheDocument();
  });

  test("chane range Input", () => {
    render(<Sidebar />);

    const input = screen.getByTestId("rangeInput");
    const label = screen.getByTestId("rangeLabel");

    fireEvent.change(input, { target: { value: 60 } });

    expect(label).toHaveTextContent("60 %");
  });
});

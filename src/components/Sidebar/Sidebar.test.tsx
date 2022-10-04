import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { useGrid } from "../../hooks/grid.hook";
import { renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Sidebar } from "./Sidebar";

describe("Sidebar tests", () => {
  test("render UI elements", async () => {
    render(<Sidebar />);

    expect(await screen.findByText(/Старт/)).toBeInTheDocument();

    expect(await screen.findByText(/Сброс/)).toBeInTheDocument();

    expect(await screen.findByText("1")).toBeInTheDocument();

    expect(await screen.findByText("1.5")).toBeInTheDocument();

    expect(await screen.findByText("2")).toBeInTheDocument();

    expect(await screen.findByText("50/50")).toBeInTheDocument();
  });

  test("change range Input", async () => {
    render(<Sidebar />);

    const input = screen.getByTestId("rangeInput");
    const label = screen.getByTestId("rangeLabel");
    const clear = await screen.findByText(/Сброс/);

    fireEvent.change(input, { target: { value: 60 } });

    expect(label).toHaveTextContent("60 %");

    fireEvent.click(clear);

    expect(label).toHaveTextContent("0 %");
  });

});

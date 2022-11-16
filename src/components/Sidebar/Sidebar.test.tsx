import React from "react";
import {
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";

import { Sidebar } from "./Sidebar";
import { GridProvider, useGrid } from "../../hooks/grid.hook";

const wrapper = ({ children }: { children: JSX.Element }) => {
  return <GridProvider>{children}</GridProvider>;
};

describe("Sidebar tests", () => {
  test("render UI elements", async () => {
    render(
      <GridProvider>
        <Sidebar />
      </GridProvider>
    );

    expect(await screen.findByText(/Старт/)).toBeInTheDocument();

    expect(await screen.findByText(/Сброс/)).toBeInTheDocument();

    expect(await screen.findByText("1")).toBeInTheDocument();

    expect(await screen.findByText("1.5")).toBeInTheDocument();

    expect(await screen.findByText("2")).toBeInTheDocument();

    expect(await screen.findByText("50/50")).toBeInTheDocument();
  });

  test("change range Input", async () => {
    render(
      <GridProvider>
        <Sidebar />
      </GridProvider>
    );

    const input = screen.getByTestId("rangeInput");
    const label = screen.getByTestId("rangeLabel");
    const clear = await screen.findByText(/Сброс/);

    fireEvent.change(input, { target: { value: 60 } });

    expect(label).toHaveTextContent("60 %");

    fireEvent.click(clear);

    expect(label).toHaveTextContent("0 %");
  });

  test("test change speed btns click and hook logic", async () => {
    const { result } = renderHook(() => useGrid(), { wrapper });

    render(
      <GridProvider>
        <Sidebar />
      </GridProvider>
    );

    expect(result.current.speed).toBe(1000);

    fireEvent.click(await screen.findByText("2"));

    waitFor(() => {
      expect(result.current.speed).toBe(200);
    });

    fireEvent.click(await screen.findByText("1.5"));

    waitFor(() => {
      expect(result.current.speed).toBe(500);
    });

    fireEvent.click(await screen.findByText("1"));

    waitFor(() => {
      expect(result.current.speed).toBe(1000);
    });
  });

  test("test size btns clicks and hook logic", async () => {
    const { result } = renderHook(() => useGrid(), { wrapper });

    render(
      <GridProvider>
        <Sidebar />
      </GridProvider>
    );

    expect(result.current.size).toEqual([50, 50]);

    fireEvent.click(await screen.findByText("30/30"));

    waitFor(() => {
      expect(result.current.size).toEqual([30, 30]);
    });

    fireEvent.click(await screen.findByText("100/100"));

    waitFor(() => {
      expect(result.current.size).toEqual([100, 100]);
    });

    fireEvent.click(await screen.findByText("50/50"));

    waitFor(() => {
      expect(result.current.size).toEqual([50, 50]);
    });
  });


  test("  ", async () => {
    const { result } = renderHook(() => useGrid(), { wrapper });

   const { container } = render(
      <GridProvider>
        <Sidebar />
      </GridProvider>
    );

    fireEvent.click(await screen.findByText(/Старт/));

    waitFor(() => {
      expect(screen.findByText(/Старт/)).toHaveClass("bg-red-300");
    })

  })
});

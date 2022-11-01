import React from "react";
import { renderHook, act, waitFor, fireEvent } from "@testing-library/react";
import { useGrid } from "./grid.hook";
import { GridProvider } from "./grid.hook";

describe("testing useGrid hook", () => {
  const wrapper = ({ children }: { children: JSX.Element }) => (
    <GridProvider>{children}</GridProvider>
  );

  const { result, rerender } = renderHook(() => useGrid(), {
    wrapper,
  });

  test("should initial state", () => {
    expect(result.current.size).toEqual([50, 50]);
    expect(result.current.speed).toEqual(1000);
    expect(result.current.running).toBeFalsy();
  });

  test("change grid size", async () => {
    result.current.setGridSize(30, 30);

    waitFor(() => {
      expect(result.current.size).toEqual([30, 30]);
    });

    result.current.setGridSize(100, 100);

    waitFor(() => {
      expect(result.current.size).toEqual([100, 100]);
    });
  });

  test("test start & stop simulation", async () => {
    const { result, rerender } = renderHook(() => useGrid(), {
      wrapper,
    });
    result.current.fillRandomCells(80);

    waitFor(() => {
      result.current.start();
    });

    waitFor(() => {
      expect(result.current.running).toBeTruthy();
    });

    rerender();

    result.current.start();

    waitFor(() => {
      expect(result.current.running).toBeFalsy();
    });
  });

  test("test handleItemClick function", () => {
    const { result } = renderHook(() => useGrid(), {
      wrapper,
    });

    result.current.handleItemClick(1, 1);

    waitFor(() => {
      expect(result.current.grid[1][1]).toEqual(1);
    });
  });
});

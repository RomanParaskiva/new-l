import React from "react";
import { renderHook } from "@testing-library/react-hooks/dom";
import { useGrid } from "./grid.hook";
import { GridProvider } from "./grid.hook";

describe("testing useGrid hook", () => {
  const wrapper = ({ children }: { children: JSX.Element }) => (
    <GridProvider>{children}</GridProvider>
  );

  test("should initial state", () => {
    const { result } = renderHook(() => useGrid(), {
      wrapper,
    });
    expect(result.current.size).toEqual([50, 50]);
    expect(result.current.speed).toEqual(1000);
    expect(result.current.running).toBeFalsy();
  });

  // test("change grid size", async () => {
  //   const { result, waitForNextUpdate } = renderHook(() => useGrid(), {
  //     wrapper,
  //   });
  //   act(() => {
  //     result.current.setGridSize(30, 30);
  //     result.current.regenerateGrid();
  //   });

  //   await waitForNextUpdate();
  //   expect(result.current.size).toEqual([30, 30]);
  // });

  // test("run simulation", async () => {
  //   const { result, waitForNextUpdate } = renderHook(() => useGrid(), {
  //     wrapper,
  //   });

  //   result.current.start();
  //   await waitForNextUpdate();
  //   expect(result.current.running).toBeTruthy();
  // });
});

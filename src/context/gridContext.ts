import { createContext } from "react";

export type GridContext = {
  grid?: number[][];
  running?: boolean;
  start: () => void;
  handleItemClick: (i: number, k: number) => void;
  clear: () => void;
  changeSpeed: (v: number) => void;
  setGridSize: (x: number, y: number) => void;
  fillRandomCells: (x: number) => void;
  size: number[];
};

const grid: number[][] = [];
const start = () => {
  // do nothing
};
const handleItemClick = () => {
  // do nothing
};
const clear = () => {
  // do nothing
};
const changeSpeed = () => {
  // do nothing
};
const setGridSize = () => {
  // do nothing
};

const fillRandomCells = () => {
  // do nothing
};
const size = [50, 50];

export const gridContext = createContext<GridContext>({
  grid,
  start,
  handleItemClick,
  clear,
  size,
  changeSpeed,
  setGridSize,
  fillRandomCells,
});

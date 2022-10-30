import produce from "immer";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { operations, generateGrid } from "../utils/utils";

export interface GridContextType {
  grid: number[][];
  running?: boolean;
  start: () => void;
  handleItemClick: (i: number, k: number) => void;
  clear: () => void;
  changeSpeed: (v: number) => void;
  setGridSize: (x: number, y: number) => void;
  fillRandomCells: (x: number) => void;
  regenerateGrid: () => void;
  size: number[];
  speed: number;
}

export const GridContext = createContext<GridContextType>(null!);

export const GridProvider = ({ children }: { children: JSX.Element }) => {
  const [size, setSize] = useState([50, 50]);
  const [speed, setSpeed] = useState(1000);

  const [grid, setGrid] = useState(() => generateGrid(size[0], size[1]));

  const [running, setRunning] = useState(false);

  const generateEmptyGrid = useCallback(
    () => setGrid(() => generateGrid(size[0], size[1])),
    [size]
  );

  const regenerateGrid = useCallback(() => {
    setGrid((g) =>
      produce(g, (newGrid) => {
        for (let i = 0; i < size[0]; i++) {
          for (let k = 0; k < size[1]; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < size[0] && newK >= 0 && newK < size[1]) {
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              newGrid[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              newGrid[i][k] = 1;
            }
          }
        }
      })
    );
  }, [size]);

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const fillRandomCells = useCallback(
    (percent: number) => {
      const cells = Math.pow(size[0], 2);
      const getFreeRandomCell = (length: number, grid: number[][]) => {
        const col = getRandomInt(length);
        const row = getRandomInt(length);

        if (grid[row][col] === 1) {
          getFreeRandomCell(length, grid);
        }

        grid[row][col] = 1;
      };

      const requiredCellsAmount = (cells / 100) * percent;
      generateEmptyGrid();
      setGrid((g) =>
        produce(g, (newGrid) => {
          for (let i = 0; i < requiredCellsAmount; i++) {
            getFreeRandomCell(size[0], newGrid);
          }
        })
      );
    },
    [generateEmptyGrid, size]
  );

  const runningRef = useRef(running);

  const speedRef = useRef(speed);

  speedRef.current = speed;

  runningRef.current = running;

  const start = useCallback(() => {
    const runSimulation = () => {
      if (!runningRef.current) return;
      regenerateGrid();
      setTimeout(runSimulation, speedRef.current);
    };
    if (!running) {
      setRunning(() => true);
      runningRef.current = true;
      runSimulation();
    } else {
      setRunning(() => false);
      runningRef.current = false;
    }
  }, [running, regenerateGrid]);

  const clear = useCallback(() => {
    setRunning(() => false);
    runningRef.current = false;
    generateEmptyGrid();
  }, [generateEmptyGrid]);

  const changeSpeed = useCallback((v: number) => {
    setSpeed(() => v);
    speedRef.current = v;
  }, []);

  const handleItemClick = useCallback(
    (i: number, k: number) => {
      const newGrid = produce(grid, (gridCopy) => {
        gridCopy[i][k] = grid[i][k] ? 0 : 1;
      });
      setGrid(newGrid);
    },
    [grid]
  );

  const setGridSize = useCallback(
    (x: number, y: number) => {
      setSize(() => [x, y]);
      let newGrid: number[][] = [];
      if (x <= size[0]) {
        newGrid = produce(grid, (gCopy) => {
          gCopy = grid.slice(0, x);
          for (let i = 0; i < x; i++) {
            if (gCopy[i].length <= y) {
              for (let k = gCopy[i].length; k < y; k++) {
                gCopy[i].push(0);
              }
            } else {
              gCopy[i] = gCopy[i].slice(0, y);
            }
          }
          return gCopy;
        });
      } else {
        newGrid = produce(grid, (gCopy) => {
          gCopy = [];
          for (let i = 0; i < x; i++) {
            if (i < grid.length) {
              const col = produce(grid[i], (newRow) => {
                newRow = [
                  ...grid[i],
                  ...Array.from(Array(y - grid[i].length), () => 0),
                ];
                return newRow;
              });
              gCopy[i] = col;
            } else {
              const col = Array.from(Array(y), () => 0);
              gCopy.push(col);
            }
          }
          return gCopy;
        });
      }
      setGrid(() => newGrid);
    },
    [grid, size, setSize, setGrid]
  );

  const value = useMemo(
    () => ({
      clear,
      grid,
      setGridSize,
      start,
      running,
      handleItemClick,
      size,
      changeSpeed,
      fillRandomCells,
      regenerateGrid,
      speed,
    }),
    [
      clear,
      grid,
      setGridSize,
      start,
      running,
      handleItemClick,
      size,
      changeSpeed,
      fillRandomCells,
      regenerateGrid,
      speed,
    ]
  );

  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
};

export const useGrid = () => {
  return useContext(GridContext);
};

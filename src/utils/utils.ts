export const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

export const generateGrid = (numRows: number, numCols: number) => {
  const rows: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    const col: number[] = Array.from(Array(numCols), () => 0);
    rows.push(col);
  }
  return rows;
};

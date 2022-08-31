import { createContext } from 'react'

export type GridContext = {
    grid?: number[][],
    running?: boolean,
    start: () => void,
    handleItemClick: (i:number, k:number) => void,
    clear: () => void,
    numRows: number,
    numCols: number,
    changeSpeed: (v: number) => void,
    setSize: (x:number, y:number) => void
    }

const grid:number[][] = []
const start = () => {}
const handleItemClick = () => {}
const clear = () => {}
const changeSpeed = () => {}
const setSize = () => {}

export const gridContext = createContext<GridContext>({grid, start, handleItemClick, clear, numRows: 50, numCols: 50, changeSpeed, setSize })
import { createContext } from 'react'

export type GridContext = {
    grid?: number[][],
    running?: boolean,
    start: () => void,
    handleItemClick: (i:number, k:number) => void,
    clear: () => void,
    changeSpeed: (v: number) => void,
    setGridSize: (x:number, y:number) => void,
    size: number[]
    }

const grid:number[][] = []
const start = () => {}
const handleItemClick = () => {}
const clear = () => {}
const changeSpeed = () => {}
const setGridSize = () => {}
const size = [50, 50]

export const gridContext = createContext<GridContext>({grid, start, handleItemClick, clear, size, changeSpeed, setGridSize })
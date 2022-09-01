import produce from "immer"
import { useCallback, useRef, useState } from "react"

const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0]
]

const generateGrid = (numRows: number, numCols: number) => {
    const rows: number[][] = []
    for (let i = 0; i < numRows; i++) {
        const col: number[] = Array.from(Array(numCols), () => 0)
        rows.push(col)
    }
    return rows
}

const useGrid = () => {
    const [numCols, setNumCols] = useState(50)
    const [numRows, setNumRows] = useState(50)
    const [size, setSize] = useState([50, 50])
    const [speed, setSpeed] = useState(1000)

    const [grid, setGrid] = useState(() => generateGrid(size[0], size[1]))

    const [running, setRunning] = useState(false)

    const generateEmptyGrid = () => setGrid(() => generateGrid(size[0], size[1]))

    const regenerateGrid = () => {

        setGrid(g => produce(g, newGrid => {
            console.log(size);

            for (let i = 0; i < size[0]; i++) {
                for (let k = 0; k < size[1]; k++) {
                    let neighbors = 0
                    operations.forEach(([x, y]) => {
                        const newI = i + x
                        const newK = k + y
                        if (newI >= 0 && newI < size[0] && newK >= 0 && newK < size[1]) {
                            neighbors += g[newI][newK]
                        }
                    })

                    if (neighbors < 2 || neighbors > 3) {
                        newGrid[i][k] = 0
                    } else if (g[i][k] === 0 && neighbors === 3) {
                        newGrid[i][k] = 1
                    }
                }
            }
        }))
    }


    const runningRef = useRef(running)

    const speedRef = useRef(speed)

    speedRef.current = speed

    runningRef.current = running

    const runSimulation = () => {
        if (!runningRef.current) return
        regenerateGrid()
        setTimeout(runSimulation, speedRef.current)
    }

    const start = () => {
        setRunning(prev => !prev)
        if (!running) {
            runningRef.current = true
            runSimulation()
        }
    }

    const clear = () => {
        setRunning(false)
        runningRef.current = false
        generateEmptyGrid()
    }

    const changeSpeed = (v: number) => {
        setSpeed(v)
        speedRef.current = v
    }

    const handleItemClick = (i: number, k: number) => {
        const newGrid = produce(grid, gridCopy => {
            gridCopy[i][k] = grid[i][k] ? 0 : 1
        })
        setGrid(newGrid)
    }

    const setGridSize = (x: number, y: number) => {
        setSize((prev) => [x, y])
        let newGrid: number[][] = []
        if (x <= size[0]) {
            newGrid = produce(grid, gCopy => {
                gCopy = grid.slice(0, x)
                for (let i = 0; i < x; i++) {
                    if (gCopy[i].length <= y) {
                        for (let k = gCopy[i].length; k < y; k++) {
                            gCopy[i].push(0)
                        }
                    } else {
                        gCopy[i] = gCopy[i].slice(0, y)
                    }
                }
                return gCopy
            })
        } else {
            newGrid = produce(grid, gCopy => {
                gCopy = []
                for (let i = 0; i < x; i++) {
                    if (i < grid.length) {
                        const col = produce(grid[i], newRow => {
                            newRow = [...grid[i], ...Array.from(Array(y - grid[i].length), () => 0)]
                            return newRow
                        })
                        gCopy[i] = col
                    } else {
                        const col = Array.from(Array(y), () => 0)
                        gCopy.push(col)
                    }
                }
                return gCopy
            })
        }
        setGrid(newGrid)
    }


    return { clear, grid, setGridSize, start, running, handleItemClick, size, changeSpeed }
}

export default useGrid
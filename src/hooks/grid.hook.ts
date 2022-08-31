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
    const [speed, setSpeed] = useState(1000)

    const [grid, setGrid] = useState(() => generateGrid(numRows, numCols))

    const [running, setRunning] = useState(false)

    const generateEmptyGrid = () => setGrid(() => generateGrid(numRows, numCols))


    const runningRef = useRef(running)

    const speedRef = useRef(speed)

    speedRef.current = speed

    runningRef.current = running

    const runSimulation = () => {

        if (!runningRef.current) return

        setGrid(g => produce(g, newGrid => {
            for (let i = 0; i < numRows; i++) {
                for (let k = 0; k < numCols; k++) {
                    let neighbors = 0
                    operations.forEach(([x, y]) => {
                        const newI = i + x
                        const newK = k + y
                        if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
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

    const setSize = (x: number, y: number) => {
        setNumRows(x)
        setNumCols(y)
    }


    return { clear, grid, setSize, start, running, handleItemClick, numRows, numCols, changeSpeed }
}

export default useGrid
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

const useGrid = () => {
    const [numCols, setNumCols] = useState(50)
    const [numRows, setNumRows] = useState(50)
    const [speed, setSpeed] = useState(1000)

    const [grid, setGrid] = useState(() => {
        const rows = []
        for (let i = 0; i < numRows; i++) {
            rows.push(Array.from(Array(numCols), () => 0))
        }
        return rows
    })

    const [running, setRunning] = useState(false)

    const generateEmptyGrid = () => {        
        const rows = []
        for (let i = 0; i < numRows; i++) {
            rows.push(Array.from(Array(numCols), () => 0))
        }
        setGrid(rows)
    }  
   

    const runningRef = useRef(running)

    runningRef.current = running

    const runSimulation = useCallback((speed:number) => {

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

        setTimeout(runSimulation, speed)
    }, [numRows, numCols])

    const start = () => {
        setRunning(prev => !prev)
        if (!running) {
            runningRef.current = true
            runSimulation(speed)
        }
    }

    const clear = () => {
        setRunning(false)
        runningRef.current = false
        generateEmptyGrid()
    }

    const changeSpeed = (v:number) => {
        setSpeed(() => v)
        console.log(speed);
        
    }

    const handleItemClick = (i: number, k: number) => {
        const newGrid = produce(grid, gridCopy => {
            gridCopy[i][k] = grid[i][k] ? 0 : 1
        })
        setGrid(newGrid)
    }


    return { clear, grid, start, running, handleItemClick, numRows, numCols, changeSpeed }
}

export default useGrid
import produce from 'immer'
import React, { useCallback, useRef, useState } from 'react'
import styled from 'styled-components'
import FieldItem from '../FieldItem/FieldItem'

const numRows = 50
const numCols = 50

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

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(${numCols}, 20px);
    grid-template-rows: repeat(${numRows}, 20px);
`

const Field: React.FC = () => {
    const [grid, setGrid] = useState(() => {
        const rows = []

        for (let i = 0; i < numRows; i++) {
            rows.push(Array.from(Array(numCols), () => 0))
        }
        return rows
    })

    const [running, setRunning] = useState(false)

    const runningRef = useRef(running)

    runningRef.current = running

    const runSimulation = useCallback(() => {
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

        setTimeout(runSimulation, 1000)
    }, [])

    return (
        <>
            <button
                onClick={() => {
                    setRunning(prev => !prev)
                    if (!running) {
                        runningRef.current = true
                        runSimulation()
                    }
                }}
            >{running ? 'stop' : 'start'}</button>
            <Grid>
                {grid.map((rows, i) =>
                    rows.map((col, k) => (
                        <FieldItem
                            key={`${i}-${k}`}
                            handleClick={() => {
                                const newGrid = produce(grid, gridCopy => {
                                    gridCopy[i][k] = grid[i][k] ? 0 : 1
                                })
                                setGrid(newGrid)
                            }}
                            itemValue={grid[i][k]}                           
                            itemWidth={20}
                        />
                    ))
                )}
            </Grid>
        </>
    )
}

export default Field
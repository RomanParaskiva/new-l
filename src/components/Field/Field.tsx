import { useContext } from 'react'
import styled from 'styled-components'
import FieldItem from '../FieldItem/FieldItem'
import { gridContext } from '../../context/gridContext'
import React from 'react'

type Props = {
    numCols: number
    numRows: number
}

const Grid =  styled.div<Props>`
        display: grid;
        grid-template-columns: repeat(${props => props.numCols}, 20px);
        grid-template-rows: repeat(${props => props.numRows}, 20px);
    `

const Field = () => {
    const { grid, numCols, numRows, handleItemClick } = useContext(gridContext)

    let props = {numCols, numRows}
    return (
        <>
            <Grid {...props}>
                {grid?.map((rows, i) =>
                    rows.map((col, k) => (
                        <FieldItem
                            key={`${i}-${k}`}
                            handleClick={() => {
                                handleItemClick(i, k)
                            }}
                            itemValue={grid[i][k]}
                        />
                    ))
                )}
            </Grid>
        </>
    )
}

export default Field

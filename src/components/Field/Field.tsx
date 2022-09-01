import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import FieldItem from '../FieldItem/FieldItem'
import { gridContext } from '../../context/gridContext'
import React from 'react'

type Props = {
    numCols: number
    numRows: number
}

const Grid = styled.div<Props>`
        display: grid;
        grid-template-columns: repeat(${props => props.numCols}, 15px);
        grid-template-rows: repeat(${props => props.numRows}, 15px);
    `

const Field = () => {
    const { grid, size, handleItemClick } = useContext(gridContext)

    let props = {
        numRows: size[0],
        numCols: size[1]
    }

    return (
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
    )
}

export default Field

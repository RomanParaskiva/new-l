import { useContext } from 'react'
import styled from 'styled-components'
import FieldItem from '../FieldItem/FieldItem'
import { gridContext } from '../../context/gridContext'



const Field = () => {
    const { grid, numCols, numRows, handleItemClick } = useContext(gridContext)

    const Grid = styled.div`
        display: grid;
        grid-template-columns: repeat(${numCols}, 20px);
        grid-template-rows: repeat(${numRows}, 20px);
    `
    return (
        <>
            <Grid>
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

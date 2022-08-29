import React from 'react'
import styled from 'styled-components'



const FieldItem = ({ handleClick, grid, i, k }:
    {
        handleClick: () => void, 
        grid: number[][],
        i: number,
        k: number
    }) => {

        const styledDiv =  styled.div()`
    width: 20px;
    height: 20px;
    background-color: ${grid[i][k]} ? 'violet' : undefined;
    border: 1px solid black;
`
    return (
        <styledDiv
            onClick={() => {
                handleClick()
            }}
            style={{
               
            }}>

        </styledDiv>
    )
}

export default FieldItem
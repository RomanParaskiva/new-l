import React, { useContext } from "react";
import styled from "styled-components";
import { FieldItem } from "../FieldItem/FieldItem";
import { gridContext } from "../../context/gridContext";

type Props = {
  numCols: number;
  numRows: number;
};

const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.numCols}, 15px);
  grid-template-rows: repeat(${(props) => props.numRows}, 15px);
`;

export const Field = () => {
  const { grid, size, handleItemClick } = useContext(gridContext);

  const props = {
    numRows: size[0],
    numCols: size[1],
  };

  return (
    <Grid {...props}>
      {grid?.map((rows, i) =>
        rows.map((col, k) => (
          <FieldItem
            key={`${i}-${k}`}
            handleClick={() => {
              handleItemClick(i, k);
            }}
            itemValue={grid[i][k]}
          />
        ))
      )}
    </Grid>
  );
};

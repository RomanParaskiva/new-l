import React from "react";
import classNames from "classnames";

export interface IProps {
  handleClick: () => void;
  itemValue: number;
}

export const FieldItem = ({ handleClick, itemValue }: IProps) => {
  const itemStyles = classNames(
    `d-flex w-[15px] h-[15px] border border-solid`,
    itemValue ? "bg-pink-300" : ""
  );

  return (
    <div
      data-testid="field-item"
      className={itemStyles}
      onClick={handleClick}
    />
  );
};

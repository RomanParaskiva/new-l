import React from "react";
import { render, screen, act } from "@testing-library/react";
import { FieldItem } from "./FieldItem";
import userEvent from "@testing-library/user-event";

describe("tests FieldItem component", () => {
  test("click on FieldItem component", async () => {
    const handleClick = jest.fn();

    render(<FieldItem handleClick={handleClick} itemValue={0} />);

    await userEvent.click(screen.getByTestId("field-item"));

    expect(handleClick).toBeCalled();
  });
});

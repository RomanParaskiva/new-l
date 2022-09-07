import React from "react";
import { render, screen, act } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import { FieldItem } from "./FieldItem";

describe("tests FieldItem component", () => {
  test("click on FieldItem component", async () => {
    const handleClick = jest.fn();

    render(<FieldItem handleClick={handleClick} itemValue={0} />);

    fireEvent.click(screen.getByTestId("field-item"));

    expect(handleClick).toBeCalled();
  });

  test("snapshot FieldItem component", () => {
    act(() => {
      const handleClick = jest.fn();

      const { container } = render(
        <FieldItem handleClick={handleClick} itemValue={0} />
      );

      expect(container).toMatchSnapshot();
    });
  });
});

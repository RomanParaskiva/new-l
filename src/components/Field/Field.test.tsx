import React from "react";
import { render } from "@testing-library/react";
import { GridProvider } from "../../hooks/grid.hook";
import "@testing-library/jest-dom";

import { Field } from "./Field";

describe("test Field component", () => {
  test("renders Field component", () => {
    const { getByTestId } = render(<GridProvider><Field /></GridProvider>);

    expect(getByTestId("grid")).toBeInTheDocument();
  });
});

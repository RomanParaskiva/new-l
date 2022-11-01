import React from "react";
import { render } from "@testing-library/react";
import { GridProvider } from "../../hooks/grid.hook";
import "@testing-library/jest-dom";
import { Field } from "./Field";

const { getByTestId } = render(
  <GridProvider>
    <Field />
  </GridProvider>
);

describe("test Field component", () => {
  test("render Field component", () => {
    expect(getByTestId("grid")).toBeInTheDocument();
  });
});

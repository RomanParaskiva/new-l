import React from "react";
import { render } from "@testing-library/react";

import { Field } from "./Field";

describe("test Field component", () => {
  test("renders Field component", () => {
    const { container } = render(<Field />);

    expect(container).toMatchSnapshot();
  });
});

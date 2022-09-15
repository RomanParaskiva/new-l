import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Page } from "./Page";

describe("test Page component", () => {
  test("renders Page component", () => {
    const { container } = render(
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    );

    expect(container.getElementsByTagName("header")[0]).toBeInTheDocument();
  });
});

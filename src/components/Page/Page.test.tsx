import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Page } from "./Page";
import { AuthProvider } from "../../hooks/auth.hook";

describe("test Page component", () => {
  test("renders Page component", () => {
    const { container } = render(
      <Router>
        <AuthProvider>
          <Page />
        </AuthProvider>
      </Router>
    );

    expect(container.getElementsByTagName("header")[0]).toBeInTheDocument();
  });
});

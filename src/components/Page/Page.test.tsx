import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Page } from "./Page";
import { AuthProvider } from "../../hooks/auth.hook";
import { GridProvider } from "../../hooks/grid.hook";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("test Page component", () => {
  test("renders Page component", () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <AuthProvider>
            <GridProvider>
              <Page />
            </GridProvider>
          </AuthProvider>
        </Router>
      </Provider>
    );

    expect(container.getElementsByTagName("header")[0]).toBeInTheDocument();
  });
});

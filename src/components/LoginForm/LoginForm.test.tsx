import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { renderHook } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../store/store";

import { LoginForm } from "./LoginForm";
import { BrowserRouter as Router } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux.hook";

describe("test LoginForm", () => {
  const wrapper = ({ children }: { children: JSX.Element }) => (
    <Provider store={store}>{children}</Provider>
  );
  test("renders LoginForm component", async () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <LoginForm />
        </Router>
      </Provider>
    );

    await waitFor(() =>
      expect(container.querySelector("button")).toBeInTheDocument()
    );
  });

  test("input change", () => {
    render(
      <Provider store={store}>
        <Router>
          <LoginForm />
        </Router>
      </Provider>
    );

    const input = screen.getByTestId("userName");

    userEvent.type(input, "Roman");

    waitFor(() => expect(input).toHaveValue("Roman"));
  });

  test("login", () => {
    const { result } = renderHook(() => useAppSelector((state) => state.auth), {
      wrapper,
    });

    render(
      <Provider store={store}>
        <Router>
          <LoginForm />
        </Router>
      </Provider>
    );

    const input = screen.getByTestId("userName");

    userEvent.type(input, "Roman");

    waitFor(() => userEvent.click(screen.getByText(/start/)));

    waitFor(() => expect(result.current.authed).toBeTruthy());
  });
});

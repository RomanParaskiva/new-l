import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks/dom";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { useAuth } from "../../hooks/auth.hook";

import { LoginForm } from "./LoginForm";

describe("test LoginForm", () => {

  test("renders LoginForm component", async () => {
    render(<LoginForm />);

    expect(await screen.findByText(/start/)).toBeInTheDocument();
  });

  test("input change", async () => {
    render(<LoginForm />);

    const input = screen.getByTestId("userName");

    userEvent.type(input, "Roman");

    waitFor(() => expect(input).toHaveValue("Roman"));
  });

  test("login", async () => {
    const { result } = renderHook(() => useAuth());

    render(<LoginForm />);

    const input = screen.getByTestId("userName");

    userEvent.type(input, "Roman");

    waitFor(() => userEvent.click(screen.getByText(/start/)));

    waitFor(() => expect(result.current.authed).toBeTruthy());
  });
});

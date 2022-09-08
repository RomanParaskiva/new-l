import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import { LoginForm } from "./LoginForm";

describe("test LoginForm", () => {
  test("renders LoginForm component", async () => {
    render(<LoginForm />);

    expect(await screen.findByText(/start/)).toBeInTheDocument();
  });

  test("LoginForm snapshot", () => {
    const { container } = render(<LoginForm />);

    expect(container).toMatchSnapshot();
  });

  test("input change", async () => {
    render(<LoginForm />);

    const input = screen.getByTestId("userName");

    await userEvent.type(input, "Roman");

    await waitFor(() => expect(input).toHaveDisplayValue("Roman"));
  });
});

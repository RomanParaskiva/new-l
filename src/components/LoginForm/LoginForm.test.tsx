import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { LoginForm } from "./LoginForm";

describe("test LoginForm", () => {
  test("renders LoginForm component", async () => {
    render(<LoginForm />);

    expect(await screen.findByText(/start/)).not.toBeNull();
  });

  test("LoginForm snapshot", () => {
    const { container } = render(<LoginForm />);

    expect(container).toMatchSnapshot();
  });

  test("input change", async () => {
    render(<LoginForm />);

    const input = screen.getByTestId("userName");

    await fireEvent.input(input, { target: { value: "Roman" } });

    await waitFor(() => expect(input).toHaveDisplayValue("Roman"));
  });
});

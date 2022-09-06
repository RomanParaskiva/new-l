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
    })

    const setup = () => {
        const utils = render(<LoginForm />)
        const input = utils.getByLabelText('userName')
        return {
          input,
          ...utils,
        }
      }

    test("test input change", async () => {
        render(<LoginForm />);

        const input = screen.getByTestId("userName");

        await fireEvent.input(input, { target: { value: "Roman" }});

        await waitFor(() => expect( input ).toHaveDisplayValue("Roman"))
        
    })
});
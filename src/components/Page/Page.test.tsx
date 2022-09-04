import { render } from "@testing-library/react";

import { Page } from "./Page";

describe("test Page component", () => {
  test("renders Page component", () => {
    const { container } = render(<Page />);

    expect(container).toMatchSnapshot();
  });

});

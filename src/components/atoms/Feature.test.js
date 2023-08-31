import React from "react";
import Feature from "./Feature";
import { render } from "test-utils";

test("renders the title", () => {
  const { getByText } = render(<Feature title="My title" />);
  expect(getByText("My title")).toBeInTheDocument();
});

test("renders the children", () => {
  const { getByText } = render(<Feature>My children</Feature>);
  expect(getByText("My children")).toBeInTheDocument();
});

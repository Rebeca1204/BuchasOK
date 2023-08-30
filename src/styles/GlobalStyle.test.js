import React from "react";
import GlobalStyle from "./GlobalStyle";
import { render } from "../test-utils";

test("match snapshot", () => {
  render(<GlobalStyle />);
  expect(document.head).toMatchSnapshot();
});

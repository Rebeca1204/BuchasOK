import React from "react";
import GlobalStyle from "./GlobalStyle";
import { render } from "../components/test-utils";

test("match snapshot", () => {
  render(<GlobalStyle />);
  expect(document.head).toMatchSnapshot();
});

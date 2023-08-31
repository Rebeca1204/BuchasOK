import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders call to action", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Conheça/i);
  expect(linkElement).toBeInTheDocument();
});

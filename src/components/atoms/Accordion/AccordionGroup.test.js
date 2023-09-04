import React from "react";
import AccordionGroup from "./AccordionGroup";
import { fireEvent, render, screen } from "test-utils";
import Accordion from "./Accordion";

const renderGroup = (n) => {
  const accordions = [];
  for (let i = 0; i < n; i++) {
    accordions.push(
      <Accordion key={i} title={`Title ${i}`}>
        Child {i}
      </Accordion>,
    );
  }
  return render(<AccordionGroup>{accordions}</AccordionGroup>);
};

test("renders with children", () => {
  render(
    <AccordionGroup>
      <Accordion title="Título" />
    </AccordionGroup>,
  );

  expect(screen.getByText("Título")).toBeInTheDocument();
});

test("renders with 3 children", () => {
  render(
    <AccordionGroup>
      <Accordion title="Título" />
      <Accordion title="Título" />
      <Accordion title="Título" />
    </AccordionGroup>,
  );

  expect(screen.getAllByText("Título")).toHaveLength(3);
});

test("renders with all accordions closed", () => {
  renderGroup(3);

  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();
});

test("open accordion with click", () => {
  renderGroup(5);
  fireEvent.click(screen.getByText("Title 4"));
  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 3")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 4")).toBeInTheDocument();
});

test("closes accordion with click", () => {
  renderGroup(3);
  fireEvent.click(screen.getByText("Title 1"));
  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();

  fireEvent.click(screen.getByText("Title 1"));
  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();
});

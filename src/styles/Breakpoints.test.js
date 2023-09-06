import { BreakAt, BreakpointSize } from "./Breakpoints";
test.each([
  [BreakpointSize.sm],
  [BreakpointSize.md],
  [BreakpointSize.lg],
  [BreakpointSize.xl],
])("break at %ipx", (size) => {
  expect(BreakAt(size)).toEqual(`@media (min-width: ${size}px)`);
});

/** @type { import('@storybook/react').Preview } */
import React from "react";
import GlobalStyle from "../src/styles/GlobalStyle";
import ThemeProvider from "../src/styles/ThemeProvider";

export const decorators = [
  (StoryFn) => (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <StoryFn />
      </ThemeProvider>
    </>
  ),
];
const viewports = {
  extraSmall: {
    name: "Portrait Phone (default)",
    styles: {
      width: "360px",
      height: "640px",
    },
  },
  small: {
    name: "Landscape Phone (sm)",
    styles: {
      width: "640px",
      height: "360px",
    },
  },
  medium: {
    name: "Tablet (md)",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  large: {
    name: "Desktop (lg)",
    styles: {
      width: "1024px",
      height: "1366px",
    },
  },
  extraLarge: {
    name: "Large Desktop (xl)",
    styles: {
      width: "1280px",
      height: "800px",
    },
  },
};
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  viewport: {
    viewports,
  },
};

export const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

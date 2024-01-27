// theme.js

import { extendTheme } from "@chakra-ui/react";
//import the css file from the fonts folder

export const theme = extendTheme({
  config: {
    initialColorMode: "dark", // Set to 'light' or 'dark' as needed
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1981px",
  },

  body: {
    margin: 0,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen'",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    minWidth: "620px",
  },

  html: {
    backgroundColor: "#18181b",
  },

  code: {
    fontFamily:
      "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
  },
});

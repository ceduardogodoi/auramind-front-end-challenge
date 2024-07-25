import { type ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  colors: {
    gray: {
      100: "#7b7b7b",
      200: "#6e6e6e",
      700: "#2a2a2a",
      800: "#222222",
      900: "#191919",
    },
  },
  config,
  fonts: {
    heading: "var(--font-inter)",
    body: "var(--font-inter)",
  },
});

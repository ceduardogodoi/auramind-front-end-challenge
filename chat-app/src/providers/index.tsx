"use client";

import { type PropsWithChildren } from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "@/theme/theme";

export function Providers({ children }: Readonly<PropsWithChildren>) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      {children}
    </ChakraProvider>
  );
}

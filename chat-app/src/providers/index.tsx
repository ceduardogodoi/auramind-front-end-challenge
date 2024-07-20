"use client";

import type { PropsWithChildren } from "react";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: PropsWithChildren) {
  return <ChakraProvider>{children}</ChakraProvider>;
}

"use client";

import type { PropsWithChildren } from "react";
import { Box, IconButton, Text } from "@chakra-ui/react";

import MenuIcon from "@/assets/icons/menu.svg";

export function Header({ children }: Readonly<PropsWithChildren>) {
  return (
    <Box as="header" gridArea="header">
      <Box display="flex">
        <IconButton aria-label="Menu" icon={<MenuIcon />} bgColor="gray.800" />

        <Text as="p">Seu assistente corporativo, multimodelo e seguro</Text>
      </Box>

      {children}
    </Box>
  );
}

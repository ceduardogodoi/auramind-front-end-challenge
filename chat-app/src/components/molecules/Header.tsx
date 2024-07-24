"use client";

import { Box, HStack, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { HeaderModelSelect } from "@/components/atoms/HeaderModelSelect";

import MenuIcon from "@/assets/icons/menu.svg";
import NewChatIcon from "@/assets/icons/new-chat.svg";

export function Header() {
  return (
    <Box as="header" gridArea="header" p={4}>
      <HStack gap={4}>
        <IconButton aria-label="Menu" icon={<MenuIcon />} bgColor="gray.800" />

        <Tooltip hasArrow placement="top" label="Nova conversa">
          <IconButton
            aria-label="Nova conversa"
            icon={<NewChatIcon />}
            bgColor="gray.800"
          />
        </Tooltip>

        <HeaderModelSelect />

        <Text as="p" color="gray.100">Seu assistente corporativo, multimodelo e seguro</Text>
      </HStack>
    </Box>
  );
}

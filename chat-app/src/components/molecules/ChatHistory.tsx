"use client";

import {
  Box,
  FormControl,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { ChatItem } from "../atoms/ChatItem";
import { useId } from "react";

export function ChatHistory() {
  const chatsId = useId();

  return (
    <Box as="form" mt={4}>
      <FormControl as="label" htmlFor={`chat-${chatsId}`} fontSize={12}>
        Conversas
      </FormControl>
      <Input
        id={`chat-${chatsId}`}
        size="sm"
        rounded={4}
        mt={1}
        bgColor="gray.800"
        placeholder="Buscar..."
      />

      <UnorderedList styleType="none" ms="unset" mt={4}>
        {["JSON Array of Pets"].map((chat, index) => (
          <ChatItem key={index} title={chat} />
        ))}
      </UnorderedList>
    </Box>
  );
}

"use client";

import { FormEvent } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { Prompt } from "@/components/atoms/Prompt";
import { useChatRepository } from "@/hooks/useChatRepository";
import { chatPayloadSchema } from "@/models/Chat";

export function ChatContent() {
  const { chats, save } = useChatRepository();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    const payload = chatPayloadSchema.parse(data);
    save(payload);
  }

  return (
    <VStack w="100%" mt="auto">
      <Box as="form" onSubmit={handleSubmit} w="100%">
        <Prompt name="text" placeholder="Escreva sua mensagem aqui..." />
      </Box>

      <Box as="footer">
        <Text as="p" fontSize={10} color="gray.200">
          Mr.AI pode cometer erros. Considere verificar informações importantes.
        </Text>
      </Box>
    </VStack>
  );
}

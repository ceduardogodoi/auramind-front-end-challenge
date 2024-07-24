"use client";

import { FormEvent } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { Textarea } from "@/components/atoms/Textarea";
import { useChatRepository } from "@/hooks/useChatRepository";
import { chatPayloadSchema } from "@/models/Chat";

export function Chat() {
  const { chats, save } = useChatRepository();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    const payload = chatPayloadSchema.parse(data);
    save(payload);
  }

  return (
    <Box>
      <Box>
        <Text as="output">{JSON.stringify(chats, null, 2)}</Text>
      </Box>

      <form onSubmit={handleSubmit}>
        <Textarea name="text" />

        <Button type="submit">Send</Button>
      </form>
    </Box>
  );
}

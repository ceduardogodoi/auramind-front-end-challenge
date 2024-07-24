import { Box, FormControl, Input, ListItem, Text, UnorderedList } from "@chakra-ui/react";

export function ChatHistory() {
  return (
    <Box as="form" mt={4}>
      <FormControl as="label" htmlFor="chats" fontSize={12}>Conversas</FormControl>
      <Input id="chats" size="sm" rounded={4} mt={1} bgColor="gray.800" placeholder="Buscar..." />

      <UnorderedList styleType="none" ms="unset" mt={4}>
        {["JSON Array of Pets"].map((chat, index) => (
          <ListItem key={index}>{chat}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}

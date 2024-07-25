import { type InputProps, HStack, IconButton, Input } from "@chakra-ui/react";

import SendIcon from "@/assets/icons/send.svg";

export function Prompt({ ...props }: InputProps) {
  return (
    <HStack position="relative">
      <Input
        minH={54}
        rounded={27}
        bgColor="gray.700"
        border="transparent"
        size="md"
        display="flex"
        position="relative"
        pe={16}
        {...props}
      />

      <IconButton
        position="absolute"
        insetInlineEnd={4}
        aria-label="Enviar"
        rounded="100%"
        bgColor="inherit"
        zIndex={1}
        icon={<SendIcon />}
      />
    </HStack>
  );
}

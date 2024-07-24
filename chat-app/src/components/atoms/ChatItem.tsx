import { Button, IconButton, ListItem, Tooltip } from "@chakra-ui/react";

import TrashIcon from "@/assets/icons/trash.svg";

type ChatItemProps = {
  title: string;
};

export function ChatItem({ title }: ChatItemProps) {
  return (
    <ListItem
      bgColor="gray.900"
      display="flex"
      alignItems="stretch"
      rounded={4}
      _hover={{
        bgColor: "gray.800",
      }}
    >
      <Button
        bgColor="inherit"
        fontWeight="normal"
        size="sm"
        pe="unset"
        ps={2}
        display="block"
        textAlign="start"
        w="100%"
        _hover={{
          bgColor: "inherit",
        }}
      >
        {title}
      </Button>

      <Tooltip hasArrow label="Deletar conversa" placement="top">
        <IconButton
          bgColor="inherit"
          aria-label="Botão lixeira"
          size="sm"
          _hover={{
            bgColor: "inherit",
          }}
          icon={<TrashIcon />}
        />
      </Tooltip>
    </ListItem>
  );
}

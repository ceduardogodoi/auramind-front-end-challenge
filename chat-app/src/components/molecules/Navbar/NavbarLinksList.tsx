"use client";

import { usePathname } from "next/navigation";
import { ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { NavLink } from "@/components/atoms/NavLink";
import { Routes } from "@/routes";

import ChatIcon from "@/assets/icons/chat.svg";
import DocIcon from "@/assets/icons/doc.svg";
import ExploreIcon from "@/assets/icons/explore.svg";

export function NavbarLinksList() {
  const pathname = usePathname();

  return (
    <UnorderedList
      styleType="none"
      ms="unset"
      display="flex"
      flexDir="column"
      gap={1}
    >
      <ListItem>
        <NavLink isActive={pathname === Routes.HOME} href={Routes.HOME}>
          <ChatIcon />

          <Text as="span">Mr. Ai</Text>
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink isActive={pathname === Routes.MR_DOC} href={Routes.MR_DOC}>
          <DocIcon />

          <Text as="span">Mr. Doc</Text>
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink isActive={pathname === Routes.EXPLORE} href={Routes.EXPLORE}>
          <ExploreIcon />

          <Text as="span">Explorar</Text>
        </NavLink>
      </ListItem>
    </UnorderedList>
  );
}

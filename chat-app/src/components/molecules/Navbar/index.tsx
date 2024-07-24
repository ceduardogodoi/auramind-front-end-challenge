import Link from "next/link";
import Image from "next/image";
import { Routes } from "@/routes";
import { Box } from "@chakra-ui/react";
import { NavbarLinksList } from "./NavbarLinksList";
import { ChatHistory } from "../ChatHistory";

export function Navbar() {
  return (
    <Box as="nav" bgColor="gray.900" gridArea="nav" px={6} py={2}>
      <Link href={Routes.HOME}>
        <Image
          src="https://auramind.ai/logo.png"
          width={150}
          height={64}
          alt="Logo da Auramind"
        />
      </Link>

      <NavbarLinksList />

      <ChatHistory />
    </Box>
  );
}

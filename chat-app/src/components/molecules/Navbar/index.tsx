import Link from "next/link";
import Image from "next/image";
import { Input } from "@chakra-ui/react";
import { Routes } from "@/routes";
import { NavbarLinksList } from "./NavbarLinksList";

export function Navbar() {
  return (
    <nav className="page-navbar">
      <Link href={Routes.HOME}>
        <Image
          src="https://auramind.ai/logo.png"
          width={150}
          height={64}
          alt="Logo da Auramind"
        />
      </Link>

      <NavbarLinksList />

      <div>
        <span>Conversas</span>

        <Input placeholder="Buscar..." />
      </div>

      <ul>
        {["JSON Array of Pets"].map((chat, index) => (
          <li key={index}>{chat}</li>
        ))}
      </ul>
    </nav>
  );
}

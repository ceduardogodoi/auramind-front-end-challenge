"use client";

import { usePathname } from "next/navigation";
import { NavLink } from "@/components/atoms/NavLink";
import { Routes } from "@/routes";

import ChatIcon from "@/assets/icons/chat.svg";
import DocIcon from "@/assets/icons/doc.svg";
import ExploreIcon from "@/assets/icons/explore.svg";

export function NavbarLinksList() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-1">
    <li>
      <NavLink isActive={pathname === Routes.HOME} href={Routes.HOME}>
        <ChatIcon />

        <span>Mr. Ai</span>
      </NavLink>
    </li>
    <li>
      <NavLink isActive={pathname === Routes.MR_DOC} href={Routes.MR_DOC}>
        <DocIcon />

        <span>Mr. Doc</span>
      </NavLink>
    </li>
    <li>
      <NavLink isActive={pathname === Routes.EXPLORE} href={Routes.EXPLORE}>
        <ExploreIcon />

        <span>Explorar</span>
      </NavLink>
    </li>
  </ul>
  );
}

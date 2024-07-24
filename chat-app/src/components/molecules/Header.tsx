"use client"

import type { PropsWithChildren } from "react";
import { Button } from "@/components/atoms/Button";

export function Header({ children }: Readonly<PropsWithChildren>) {
  return (
    <header className="page-header">
      <div>
        <Button>Menu hamburger</Button>
      </div>

      {children}
    </header>
  );
}

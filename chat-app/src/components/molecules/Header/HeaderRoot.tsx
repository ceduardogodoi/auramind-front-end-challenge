"use client"

import type { PropsWithChildren } from "react";
import { Button } from "@/components/atoms/Button";

export function HeaderRoot({ children }: PropsWithChildren) {
  return (
    <header>
      <div>
        <Button>Menu hamburger</Button>
      </div>

      {children}
    </header>
  );
}

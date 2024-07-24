"use client"

import type { PropsWithChildren } from "react"

export function Button({ children }: Readonly<PropsWithChildren>) {
  return <button>{children}</button>
}

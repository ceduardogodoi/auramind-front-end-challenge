import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

type NavLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  isActive?: boolean;
};

export function NavLink({ children, isActive = false, ...rest }: NavLinkProps) {
  return (
    <Link
      {...rest}
      data-active={isActive}
      className="flex gap-2 items-center px-4 py-2 rounded data-[active=true]:bg-[var(--chakra-colors-gray-800)] hover:bg-[var(--chakra-colors-gray-800)]"
    >
      {children}
    </Link>
  );
}

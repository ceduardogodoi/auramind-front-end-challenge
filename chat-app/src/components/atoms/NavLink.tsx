import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/next-js";

type NavLinkProps = ComponentPropsWithoutRef<typeof ChakraLink> & {
  isActive?: boolean;
};

export function NavLink({ children, isActive = false, ...rest }: NavLinkProps) {
  return (
    <ChakraLink
      {...rest}
      data-active={isActive || undefined}
      display="flex"
      gap={2}
      alignItems="center"
      px={4}
      py={2}
      rounded={4}
      _hover={{
        bgColor: "gray.800",
      }}
      _active={{
        bgColor: "gray.800",
      }}
    >
      {children}
    </ChakraLink>
  );
}

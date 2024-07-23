import Link from "next/link";
import { Routes } from "@/routes";

export function Navbar() {
  return (
    <div>
      <span>Logo</span>

      <nav>
        <ul>
          <li>
            <Link href={Routes.HOME}>Mr. Ai</Link>
          </li>
          <li>
            <Link href={Routes.MR_DOC}>Mr. Doc</Link>
          </li>
          <li>
            <Link href={Routes.EXPLORE}>Explorar</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

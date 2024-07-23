import { HeaderRoot } from "@/components/molecules/Header/HeaderRoot";
import { HeaderModelSelect } from "@/components/atoms/HeaderModelSelect";

export default function HomePage() {
  return (
    <>
      <HeaderRoot>
        <HeaderModelSelect />
      </HeaderRoot>

      <main>
        <h1>Home page</h1>
      </main>
    </>
  );
}

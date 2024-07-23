import { Header } from "@/components/molecules/Header";
import { HeaderModelSelect } from "@/components/atoms/HeaderModelSelect";
import { Chat } from "@/components/organisms/Chat";

export default function HomePage() {
  return (
    <>
      <Header>
        <HeaderModelSelect />
      </Header>

      <main>
        <h1>Home page</h1>

        <Chat />
      </main>
    </>
  );
}

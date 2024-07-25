import { Header } from "@/components/molecules/Header";
import { ChatContent } from "@/components/organisms/ChatContent";
import { VStack } from "@chakra-ui/react";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Header />

      <VStack
        as="main"
        className="page-content"
        w={792}
        mx="auto"
        paddingBlockEnd={4}
      >
        <Image
          src="https://auramind.ai/logo.png"
          width={150}
          height={64}
          alt="Logo da Auramind"
          priority
        />

        <ChatContent />
      </VStack>
    </>
  );
}

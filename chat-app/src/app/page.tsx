import { Header } from "@/components/molecules/Header";
import { HeaderModelSelect } from "@/components/atoms/HeaderModelSelect";
import { Chat } from "@/components/organisms/Chat";
import { Box, Heading } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <>
      <Header>
        <HeaderModelSelect />
      </Header>

      <Box as="main" className="page-content">
        <Heading as="h1">Home page</Heading>

        <Chat />
      </Box>
    </>
  );
}

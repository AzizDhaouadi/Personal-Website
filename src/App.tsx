import { Heading, Text, Box, VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import SectionCollection from "./components/SectionCollection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <VStack
          gap="1rem"
          align="center"
          py={{ base: "1rem", md: "2rem" }}
          px="1rem"
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="medium"
            letterSpacing="widest"
            textTransform="uppercase"
            color="#6A8D92"
          >
            Hello, I am a professional working in Canada
          </Text>

          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
            fontWeight="bold"
            lineHeight="0.95"
            letterSpacing="tight"
            color="#2C3E50"
            textAlign="center"
          >
            Aziz Dhaouadi
          </Heading>

          <Box h="3px" w="64px" bg="#6A8D92" borderRadius="full" mt="0.5rem" />

          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            fontWeight="medium"
            color="#5A6B70"
            textAlign="center"
          >
            Analyst, Developer & Entrepreneur
          </Text>
        </VStack>
        <SectionCollection></SectionCollection>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;

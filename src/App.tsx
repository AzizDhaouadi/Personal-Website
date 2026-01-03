import { Heading, Text, Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import SectionCollection from "./components/SectionCollection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Container my={"5rem"}>
          <Box>
            <Text>Hello, I am a professional working in Canada.</Text>
            <Heading>Aziz Dhaouadi</Heading>
            <Text>Analyst, Developer & Entrepreneur</Text>
          </Box>
        </Container>
        <SectionCollection></SectionCollection>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;

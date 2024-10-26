// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Heading, Text, Container, Box } from '@chakra-ui/react'
import Header from './components/Header'
import SectionCollection from './components/SectionCollection'
import Footer from './components/Footer'
import './App.css'


function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Container my={"5rem"}>
          <Box>
            <Text>Hello, I am a professional working in Canada.</Text>
            <Heading>Aziz Dhaouadi</Heading>
            <Text>Digital Creator (Analyst, Developer, Entrepreneur)</Text>
          </Box>
        </Container>
        <Container>
          <SectionCollection></SectionCollection>
        </Container>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )

};

export default App

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Heading, Text, Container, Box } from '@chakra-ui/react'
import Header from './components/Header'
import SectionCollection from './components/SectionCollection'
import './App.css'


function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <Box>
          <Text>Hello, I am a professional working in Canada.</Text>
        </Box>
        <Heading>Aziz Dhaouadi</Heading>
        <Text>Digital Creator (Analyst, Developer, Entrepreneur)</Text>
      </Container>
      <Container>
        <SectionCollection></SectionCollection>
      </Container>
    </>
  )

};

export default App

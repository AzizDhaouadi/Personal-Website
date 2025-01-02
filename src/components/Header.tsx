import { Flex, Link, Center, Container } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'

function Header() {
    return (
        <header className="header-styles">
            <nav>
                <Container>
                    <Flex align="center" justify="space-between" wrap="wrap">
                        <Center>
                            <Link>Home</Link>
                        </Center>
                        <Center>
                            <Link href="https://datajournal.datakyu.co/" isExternal>Blog <ExternalLinkIcon mx='2px' /></Link>
                        </Center>
                        <Center>
                            <Link href="https://www.linkedin.com/in/aziz-dhaouadi/" isExternal>LinkedIn<ExternalLinkIcon mx='2px' /></Link>
                        </Center>
                        <Center>
                            <Link href="https://github.com/AzizDhaouadi" isExternal>Github<ExternalLinkIcon mx='2px' /></Link>
                        </Center>
                    </Flex>
                </Container>
            </nav>
        </header>
    )
}

export default Header;
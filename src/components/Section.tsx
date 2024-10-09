import { Heading, Text, Container } from "@chakra-ui/react";
import { ReactNode } from "react";

type SectionProps = {
    title: string,
    id: string
    children: ReactNode
}


function Section({ title, id, children }: SectionProps) {

    return (
        <Container id={id} maxW="container.md" py={8}>
            <Heading as="h2" mb={4}>{title}</Heading>
            <Text mb={4}>
                {children}
            </Text>
        </Container>
    )

}

export default Section;
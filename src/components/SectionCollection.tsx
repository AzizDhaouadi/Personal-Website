import { VStack, StackDivider, Text } from "@chakra-ui/react";
import Section from "./Section";

function SectionCollection() {
    return (
        <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
        >

            <Section title="work" id="work">
                <Text>
                    This section sums up the work
                </Text>
            </Section>

            <Section title="timeline" id="timeline">
                <Text>
                    This section discribes experiences and education
                </Text>
            </Section>

            <Section title="socialLinks" id="SocialLinks">
                <Text>
                    This section has the social links
                </Text>
            </Section>

        </VStack>
    )
}

export default SectionCollection;
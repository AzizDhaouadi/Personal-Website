import { VStack, StackDivider, Text } from "@chakra-ui/react";
import Section from "./Section";

function SectionCollection() {
    return (
        <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
        >

            <Section title="Work" id="work">
                <Text>
                    Aziz is an entrepreneur and enthusiast developer based in Montreal with a passion for creating innovative digital solutions.
                    He is passionate about building and launching products, with expertise ranging from data analytics and development to web design and solving complex business problems through code.
                    When he's not immersed in tech, Aziz enjoys learning new languages and exploring various topics from AI to history.
                    Currently, he runs Datakyu, where he publishes valuable content on data analysis and digital marketing.
                </Text>
            </Section>

            <Section title="Bio" id="bio">
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
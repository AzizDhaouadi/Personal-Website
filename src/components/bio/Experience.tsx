import { Card, CardBody, Heading, Text, Flex, Box, Divider, ListItem, UnorderedList } from "@chakra-ui/react";

type ExperienceDescriptionType = {
    description: string
}

type ExperienceSectionProps = {
    job_title: string,
    company: string,
    start_date: string,
    end_date: string
    highlights: ExperienceDescriptionType[]
}

function Experience(exDetails: ExperienceSectionProps) {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='elevated'
            size={"lg"}
        >
            <CardBody>
                <Flex flexDirection={"column"} gap={".5rem"}>
                    <Box>
                        <Flex flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} gap={"2rem"}>
                            <Heading size={"md"}>{exDetails.company}</Heading>
                            <Text py='2'>
                                {`${exDetails.start_date} / ${exDetails.end_date}`}
                            </Text>
                        </Flex>
                    </Box>
                    <Divider></Divider>
                    <Box>
                        <Flex flexDirection={"column"} alignItems={"self-start"} gap={".5rem"}>
                            <Text as={"i"}>{exDetails.job_title}</Text>
                            <Box>
                                <UnorderedList>
                                    {exDetails.highlights.map((highlight, index) => {
                                        return (
                                            <ListItem textAlign={"start"} mb={".5rem"} key={index}>{highlight.description}</ListItem>
                                        );
                                    })}
                                </UnorderedList>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </CardBody>
        </Card>
    )
}


export default Experience;
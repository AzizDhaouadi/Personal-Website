import { Card, CardBody, Heading, Text, Flex, Box, Divider } from "@chakra-ui/react";

type CertificationSectionProp = {
    title: string,
    issuing_institution: string,
    issue_date: string
}

function Certifications(certDetails: CertificationSectionProp) {

    return (
        <Card
            overflow='hidden'
            variant='elevated'
            size={"lg"}
            height={"150px"}
            bgColor={"inherit"}
            borderColor={"gray.400"}
        >
            <CardBody>
                <Flex flexDirection={"column"} gap={".5rem"}>
                    <Box>
                        <Flex flex={"row"} justifyContent={"space-between"} alignItems={"center"} gap={"2rem"}>
                            <Heading as={"h4"} textAlign={"start"} size='md'>{certDetails.title}</Heading>
                        </Flex>
                    </Box>
                    <Divider></Divider>
                    <Box>
                        <Flex>
                            <Text>{certDetails.issuing_institution}</Text>
                        </Flex>
                    </Box>
                </Flex>
            </CardBody>
        </Card>
    )
}


export default Certifications;
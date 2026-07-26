import { Card, Heading, Text, Flex, Box, Separator } from "@chakra-ui/react";

type EducationSectionProp = {
  institution: string;
  degree: string;
  field_of_study: string;
  start_date: string;
  end_date: string;
  location: string;
};

function Education(edDetails: EducationSectionProp) {
  return (
    <Card.Root
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant={"outline"}
      size={"lg"}
      height={"200px"}
      bgColor={"inherit"}
      borderColor={"gray.400"}
    >
      <Card.Body>
        <Flex flexDirection={"column"} gap={".5rem"}>
          <Box>
            <Flex
              flex={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"2rem"}
            >
              <Heading size="md" as={"h3"}>
                {edDetails.institution}
              </Heading>
              <Text py="2">
                {`${edDetails.start_date} / ${edDetails.end_date}`}
              </Text>
            </Flex>
          </Box>
          <Separator colorPalette={"whiteAlpha"}></Separator>
          <Box>
            <Flex
              flexDirection={"column"}
              alignItems={"self-start"}
              gap={".5rem"}
            >
              {edDetails.degree ? <Text>{edDetails.degree}</Text> : <></>}
              <Text>{edDetails.field_of_study}</Text>
              <Text>{edDetails.location}</Text>
            </Flex>
          </Box>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
}

export default Education;

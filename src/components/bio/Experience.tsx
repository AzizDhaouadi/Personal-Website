import {
  Card,
  Heading,
  Text,
  Flex,
  Box,
  Separator,
  List,
} from "@chakra-ui/react";

type ExperienceDescriptionType = {
  description: string;
};

type ExperienceSectionProps = {
  job_title: string;
  company: string;
  start_date: string;
  end_date: string;
  highlights: ExperienceDescriptionType[];
};

function Experience(exDetails: ExperienceSectionProps) {
  return (
    <Card.Root
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      w={{ sm: "100%", md: "100%", lg: "40%" }}
      size="lg"
      bgColor="inherit"
      borderColor="gray.300"
      borderRadius="xl"
      borderLeftWidth="4px"
      borderLeftColor="#6A8D92"
      transition="all 0.2s ease"
      _hover={{
        borderColor: "gray.300",
        borderLeftColor: "#2C3E50",
        boxShadow: "md",
        transform: "translateY(-2px)",
      }}
    >
      <Card.Body py="1.5rem" px="1.75rem">
        <Flex flexDirection="column" gap="1rem">
          <Flex
            flexDirection={{ base: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ base: "flex-start", sm: "center" }}
            gap={{ base: "0.25rem", sm: "2rem" }}
          >
            <Box>
              <Heading as="h3" size="md" color="#2C3E50" lineHeight="1.2">
                {exDetails.company}
              </Heading>
              <Text
                fontStyle="italic"
                fontSize="sm"
                color="#6A8D92"
                fontWeight="medium"
                mt="0.15rem"
              >
                {exDetails.job_title}
              </Text>
            </Box>

            <Text
              fontSize="xs"
              fontWeight="semibold"
              letterSpacing="wide"
              textTransform="uppercase"
              color="gray.500"
              whiteSpace="nowrap"
              flexShrink={0}
            >
              {`${exDetails.start_date} — ${exDetails.end_date}`}
            </Text>
          </Flex>

          <Separator borderColor="gray.200" />

          <List.Root as="ul" listStyleType="none" ml="0" spaceY="0.6rem">
            {exDetails.highlights.map((highlight, index) => (
              <List.Item
                key={index}
                textAlign="start"
                display="flex"
                alignItems="flex-start"
                gap="0.6rem"
                color="#4A5568"
                lineHeight="1.6"
              >
                <Box
                  as="span"
                  mt="0.5rem"
                  w="6px"
                  h="6px"
                  borderRadius="full"
                  bg="#6A8D92"
                  flexShrink={0}
                />
                <Text as="span">{highlight.description}</Text>
              </List.Item>
            ))}
          </List.Root>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
}

export default Experience;

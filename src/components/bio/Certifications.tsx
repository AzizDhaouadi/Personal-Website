import { Card, Heading, Text, Flex, Separator } from "@chakra-ui/react";

type CertificationSectionProp = {
  title: string;
  issuing_institution: string;
};

function Certifications(certDetails: CertificationSectionProp) {
  return (
    <Card.Root
      overflow="hidden"
      variant="outline"
      w="320px"
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
          <Heading as="h3" size="md" color="#2C3E50" lineHeight="1.2">
            {certDetails.title}
          </Heading>

          <Separator borderColor="gray.200" />

          <Text
            fontStyle="italic"
            fontSize="sm"
            color="#6A8D92"
            fontWeight="medium"
          >
            {certDetails.issuing_institution}
          </Text>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
}

export default Certifications;

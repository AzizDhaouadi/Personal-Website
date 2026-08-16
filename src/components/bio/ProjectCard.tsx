import {
  Card,
  Heading,
  Text,
  Flex,
  Box,
  Badge,
  Image,
  For,
  HStack,
  Link,
} from "@chakra-ui/react";

type ProjectDetail = {
  title: string;
  description: string;
  tech_stack: string[];
  thumbnail_url: string;
  live_url: string;
  github_url?: string;
};

function ProjectCard({ projectDetail }: { projectDetail: ProjectDetail }) {
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
                {projectDetail.title}
              </Heading>
              <Flex m={4} wrap="wrap" gap="0.5rem">
                <For each={projectDetail.tech_stack}>
                  {(tech, index) => (
                    <Badge
                      key={index}
                      px="0.6rem"
                      py="0.25rem"
                      borderRadius="full"
                      bg="rgba(106, 141, 146, 0.1)"
                      color="#4A6B70"
                      border="1px solid"
                      borderColor="rgba(106, 141, 146, 0.25)"
                      fontSize="xs"
                      fontWeight="medium"
                      letterSpacing="wide"
                    >
                      {tech}
                    </Badge>
                  )}
                </For>
              </Flex>
              <Box
                m={4}
                overflow="hidden"
                borderRadius="lg"
                border="1px solid"
                borderColor="gray.200"
                transition="all 0.2s ease"
                _hover={{
                  borderColor: "#6A8D92",
                  transform: "translateY(-2px)",
                }}
              >
                <a
                  href={projectDetail.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={projectDetail.thumbnail_url}
                    alt={projectDetail.title}
                    w="100%"
                    aspectRatio={16 / 9}
                    objectFit="cover"
                    display="block"
                    transition="transform 0.3s ease"
                    _hover={{ transform: "scale(1.03)" }}
                  />
                </a>
              </Box>
              <Text
                fontStyle="italic"
                fontSize="sm"
                color="#6A8D92"
                fontWeight="medium"
                mt="0.15rem"
              >
                {projectDetail.description}
              </Text>
              <HStack gap="0.75rem" justify="center" pt="1.5rem">
                <Link
                  bg="#6A8D92"
                  color="white"
                  px="1.5rem"
                  borderRadius="md"
                  transition="all 0.2s ease"
                  href={projectDetail.live_url}
                  _hover={{ bg: "#2C3E50", transform: "translateY(-2px)" }}
                >
                  Live Demo
                </Link>
                {projectDetail.github_url && (
                  <Link
                    bg="#6A8D92"
                    color="white"
                    px="1.5rem"
                    borderRadius="md"
                    transition="all 0.2s ease"
                    href={projectDetail.github_url}
                    _hover={{ bg: "#2C3E50", transform: "translateY(-2px)" }}
                  >
                    GitHub
                  </Link>
                )}
              </HStack>
            </Box>
          </Flex>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
}

export default ProjectCard;

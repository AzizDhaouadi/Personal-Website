import { Box, Text, Center } from "@chakra-ui/react";

function Footer() {
  return (
    <Box my={"1rem"}>
      <Center>
        <Text>
          © {new Date().getFullYear()} Aziz Dhaouadi. All Rights Reserved.
        </Text>
      </Center>
    </Box>
  );
}

export default Footer;

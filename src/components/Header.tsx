import { Flex, Link, Center, Icon } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";

function Header() {
  return (
    <header className="header-styles">
      <nav>
        <Flex gap={"1rem"} align="center" justify="space-evenly" wrap="wrap">
          <Center>
            <Link color="#6A8D92">Home</Link>
          </Center>
          <Center>
            <Link
              href="https://datajournal.datakyu.co/"
              target="_blank"
              rel="noopener noreferrer"
              color="#6A8D92"
            >
              Blog
              <Icon mx="2px" asChild>
                <LuExternalLink />
              </Icon>
            </Link>
          </Center>
          <Center>
            <Link
              href="https://www.linkedin.com/in/aziz-dhaouadi/"
              target="_blank"
              rel="noopener noreferrer"
              color="#6A8D92"
            >
              LinkedIn
              <Icon mx="2px" asChild>
                <LuExternalLink />
              </Icon>
            </Link>
          </Center>
          <Center>
            <Link
              href="https://github.com/AzizDhaouadi"
              target="_blank"
              rel="noopener noreferrer"
              color="#6A8D92"
            >
              Github
              <Icon mx="2px" asChild>
                <LuExternalLink />
              </Icon>
            </Link>
          </Center>
        </Flex>
      </nav>
    </header>
  );
}

export default Header;

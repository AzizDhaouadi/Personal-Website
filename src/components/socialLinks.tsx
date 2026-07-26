import { List, Link, Flex, Icon } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { LuExternalLink } from "react-icons/lu";

function SocialLinks() {
  return (
    <List.Root gap={"3"} textAlign={"left"}>
      <Flex direction={"row"} gap={"2rem"}>
        <List.Item>
          <Link
            href="https://datajournal.datakyu.co/"
            fontSize={"2xl"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon boxSize={6} as={ImBlog} mx={"1rem"} asChild>
              <LuExternalLink />
            </Icon>
            Blog
          </Link>
        </List.Item>
        <List.Item>
          <Link
            href="https://www.linkedin.com/in/aziz-dhaouadi/"
            fontSize={"2xl"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon boxSize={6} as={FaLinkedin} mx={"1rem"} asChild>
              <LuExternalLink />
            </Icon>
            LinkedIn
          </Link>
        </List.Item>
        <List.Item>
          <Link
            href="https://github.com/AzizDhaouadi"
            fontSize={"2xl"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon boxSize={6} as={FaGithub} mx={"1rem"} asChild>
              <LuExternalLink />
            </Icon>
            Github
          </Link>
        </List.Item>
      </Flex>
    </List.Root>
  );
}

export default SocialLinks;

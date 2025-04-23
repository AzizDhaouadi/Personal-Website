import { List, ListItem, Link, Flex } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImBlog } from "react-icons/im";


function SocialLinks() {
    return (
        <List spacing={"3"} textAlign={"left"}>
            <Flex direction={"row"} gap={"2rem"}>
                <ListItem>
                    <Link href="https://datajournal.datakyu.co/" fontSize={"2xl"} isExternal>
                        <ExternalLinkIcon boxSize={6} as={ImBlog} mx={"1rem"} />
                        Blog
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.linkedin.com/in/aziz-dhaouadi/" fontSize={"2xl"} isExternal>
                        <ExternalLinkIcon boxSize={6} as={FaLinkedin} mx={"1rem"} />
                        LinkedIn
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://github.com/AzizDhaouadi" fontSize={"2xl"} isExternal>
                        <ExternalLinkIcon boxSize={6} as={FaGithub} mx={"1rem"} />
                        Github
                    </Link>
                </ListItem>
            </Flex>
        </List>
    )
}


export default SocialLinks;
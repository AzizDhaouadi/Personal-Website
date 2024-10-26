import { VStack, StackDivider, Text, Heading, Box, Flex } from "@chakra-ui/react";
import Section from "./Section";
import Education from "./bio/Education";
import Experience from "./bio/Experience";
import { ReactNode, useEffect, useState } from "react";
import data from "../assets/data/data.json";
import Certifications from "./bio/Certifications";
import SocialLinks from "./socialLinks";

type EducationType = {
    institution: string,
    degree: string,
    field_of_study: string,
    start_date: string,
    end_date: string,
    location: string
}

type HighlighDescriptionType = {
    description: string
}

type ExperienceType = {
    job_title: string,
    company: string,
    start_date: string,
    end_date: string,
    highlights: HighlighDescriptionType[]
}

type CertificationsType = {
    title: string,
    issuing_institution: string,
    issue_date: string
}

type UserDetailsType = {
    bio: {
        education: EducationType[],
        experience: ExperienceType[],
        certifications: CertificationsType[]
    }
}

type BioSectionType = ReactNode | null;
type UserDataType = UserDetailsType | {};

function SectionCollection() {

    const [userData, setUserData] = useState<UserDataType>({});
    const [bioSection, setBioSection] = useState<BioSectionType>(null);

    function handleBioSectionContent(userDetails: UserDetailsType | any) {
        if (userDetails && userDetails.bio) {
            setBioSection(
                <>
                    <Heading as={"h2"} size={"lg"} textAlign={"start"} textDecoration={"underline"} mb={"3rem"}>Education</Heading>
                    <VStack align='stretch'>
                        {userDetails.bio.education.map((educationDetails: EducationType) => {
                            return (
                                <Box key={educationDetails.institution}>
                                    <Education
                                        institution={educationDetails.institution}
                                        degree={educationDetails.degree}
                                        field_of_study={educationDetails.field_of_study}
                                        start_date={educationDetails.start_date}
                                        end_date={educationDetails.end_date}
                                        location={educationDetails.location}
                                    ></Education>
                                </Box>
                            )
                        })}
                    </VStack>
                    <Heading as={"h2"} size={"lg"} textAlign={"start"} textDecoration={"underline"} my={"3rem"}>Experience</Heading>
                    <VStack align='stretch'>
                        {userDetails.bio.experiences.map((experienceDetails: ExperienceType, index: number) => {
                            return (
                                <Box key={experienceDetails.company + index}>
                                    <Experience
                                        job_title={experienceDetails.job_title}
                                        company={experienceDetails.company}
                                        start_date={experienceDetails.start_date}
                                        end_date={experienceDetails.end_date}
                                        highlights={experienceDetails.highlights}
                                    ></Experience>
                                </Box>
                            )
                        })}
                    </VStack>
                    <Heading as={"h2"} size={"lg"} textAlign={"start"} textDecoration={"underline"} my={"3rem"}>Certifications</Heading>
                    <Flex direction={"row"} flexWrap={"wrap"} gap={".5rem"}>
                        {userDetails.bio.certifications.map((certificationDetails: CertificationsType, index: number) => {
                            return (
                                <Box key={index} height={"170px"} width={"250px"}>
                                    <Certifications
                                        title={certificationDetails.title}
                                        issuing_institution={certificationDetails.issuing_institution}
                                        issue_date={certificationDetails.issue_date}
                                    >
                                    </Certifications>
                                </Box>
                            )
                        })}
                    </Flex>
                </>
            )
        } else {
            setBioSection(
                <>
                    <Text>Looks like I have been up to nothing all these years.</Text>
                </>
            )
        }
    }

    useEffect(() => {
        const fetchData = () => {
            let fetchedData = userData;
            fetchedData = data.schema; // Assuming this returns the right structure
            setUserData(fetchedData);
            handleBioSectionContent(fetchedData);
        };

        fetchData();
    }, []); // Run once on mount

    return (
        <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
        >

            <Section title="Work" id="work">
                <Text textAlign={"start"}>
                    Aziz, an entrepreneur and self-taught developer in Montreal, has a talent for crafting digital solutions in data analytics, web development, and coding-driven business problem-solving. He currently runs Datakyu, where he shares insights on data and digital marketing. Beyond tech, Aziz enjoys learning languages and exploring subjects like AI and history.
                </Text>
            </Section>

            <Section title="Bio" id="bio">
                {bioSection}
            </Section>

            <Section title="On the web" id="SocialLinks">
                <SocialLinks></SocialLinks>
            </Section>

        </VStack>
    )
}

export default SectionCollection;
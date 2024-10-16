import { VStack, StackDivider, Text, Heading, Box, Flex } from "@chakra-ui/react";
import Section from "./Section";
import Education from "./bio/Education";
import Experience from "./bio/Experience";
import { ReactNode, useEffect, useState } from "react";
import data from "../assets/data/data.json";
import Certifications from "./bio/Certifications";


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
                    <Heading as={"h3"} size='lg'>Education</Heading>
                    {userDetails.bio.education.map((educationDetails: EducationType) => {
                        return (
                            <Box my={"2rem"} key={educationDetails.institution}>
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
                    <Heading as={"h3"} size='lg'>Experience</Heading>
                    {userDetails.bio.experiences.map((experienceDetails: ExperienceType, index: number) => {
                        return (
                            <Box my={"2rem"} key={experienceDetails.company + index}>
                                <Experience
                                    job_title={experienceDetails.job_title}
                                    company={experienceDetails.company}
                                    start_date={experienceDetails.job_title}
                                    end_date={experienceDetails.end_date}
                                    highlights={experienceDetails.highlights}
                                ></Experience>
                            </Box>
                        )
                    })}
                    <Heading as={"h3"} size='lg'>Certifications</Heading>
                    <Flex direction={"row"} flexWrap={"wrap"} gap={".5rem"}>
                        {userDetails.bio.certifications.map((certificationDetails: CertificationsType, index: number) => {
                            return (
                                <Box my={"1rem"} key={index} height={"170px"} width={"250px"}>
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
            const fetchedData = data.schema; // Assuming this returns the right structure
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
                Aziz is an entrepreneur and enthusiast developer based in Montreal with a passion for creating innovative digital solutions.
                He is passionate about building and launching products, with expertise ranging from data analytics and development to web design and solving complex business problems through code.
                When he's not immersed in tech, Aziz enjoys learning new languages and exploring various topics from AI to history.
                Currently, he runs Datakyu, where he publishes valuable content on data analysis and digital marketing.
            </Section>

            <Section title="Bio" id="bio">
                {bioSection}
            </Section>

            <Section title="socialLinks" id="SocialLinks">
                This section has the social links
            </Section>

        </VStack>
    )
}

export default SectionCollection;
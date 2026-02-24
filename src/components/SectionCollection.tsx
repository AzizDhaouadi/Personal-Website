import {
  VStack,
  Text,
  Heading,
  Box,
  Flex,
  HStack,
  Button,
  Image,
} from "@chakra-ui/react";
import Section from "./Section";
import Experience from "./bio/Experience";
import { ReactNode, useEffect, useState } from "react";
import data from "../assets/data/data.json";
import Certifications from "./bio/Certifications";
import SocialLinks from "./socialLinks";
import { vemetric } from "@vemetric/react";

type EducationType = {
  institution: string;
  degree: string;
  field_of_study: string;
  start_date: string;
  end_date: string;
  location: string;
};

type HighlighDescriptionType = {
  description: string;
};

type ExperienceType = {
  job_title: string;
  company: string;
  start_date: string;
  end_date: string;
  highlights: HighlighDescriptionType[];
};

type CertificationsType = {
  title: string;
  issuing_institution: string;
  issue_date: string;
};

type UserDetailsType = {
  bio: {
    education: EducationType[];
    experience: ExperienceType[];
    certifications: CertificationsType[];
  };
};

type BioSectionType = ReactNode | null;

function SectionCollection() {
  const [bioSection, setBioSection] = useState<BioSectionType>(null);

  function handleDownloadButton() {
    const resumeLink = document.createElement("a");
    resumeLink.href = "/src/assets/data/MAziz_Dhaouadi_Resume.pdf";
    resumeLink.download = "/src/assets/data/MAziz_Dhaouadi_Resume.pdf";
    resumeLink.click();
  }

  function handleLoggingToAnalyticsQueue() {
    (window as any).analyticsQueue = (window as any).analyticsQueue || [];
    (window as any).analyticsQueue.push({
      event: "download_resume",
    });
  }

  function handleBioSectionContent(userDetails: UserDetailsType | any) {
    if (userDetails && userDetails.bio) {
      setBioSection(
        <>
          <Heading
            as={"h2"}
            size={"lg"}
            textAlign={"start"}
            textDecoration={"underline"}
            my={"3rem"}
          >
            Current Position
          </Heading>
          <Flex>
            <Button
              id="downloadResume"
              variant={"outline"}
              backgroundColor={"#6A8D92"}
              color={"#fff"}
              _hover={{}}
              onClick={() => {
                handleDownloadButton();
                vemetric.trackEvent("download_resume");
                handleLoggingToAnalyticsQueue();
              }}
            >
              Download Resume
            </Button>
          </Flex>
          <HStack align="stretch" wrap="wrap" mt={"2rem"}>
            {userDetails.bio.experiences.map(
              (experienceDetails: ExperienceType, index: number) => {
                if (index === 0) {
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
                  );
                }
              }
            )}
          </HStack>
          <Heading
            as={"h2"}
            size={"lg"}
            textAlign={"start"}
            textDecoration={"underline"}
            my={"3rem"}
          >
            Certifications
          </Heading>
          <Flex
            gap={"20px"}
            direction={"row"}
            justify={"center"}
            align={"center"}
            wrap={"wrap"}
          >
            {userDetails.bio.certifications.map(
              (certificationDetails: CertificationsType, index: number) => {
                return (
                  <Box key={index} height={"170px"} width={"250px"}>
                    <Certifications
                      title={certificationDetails.title}
                      issuing_institution={
                        certificationDetails.issuing_institution
                      }
                    ></Certifications>
                  </Box>
                );
              }
            )}
          </Flex>
        </>
      );
    } else {
      setBioSection(
        <>
          <Text>Looks like I have been up to nothing all these years.</Text>
        </>
      );
    }
  }

  useEffect(() => {
    const fetchData = () => {
      const fetchedData = data.schema;
      handleBioSectionContent(fetchedData);
    };

    fetchData();
  }, []); // Run once on mount

  return (
    <VStack spacing={2}>
      <Section title="Summary" id="work">
        <Text textAlign={"start"}>
          Aziz Dhaouadi is a self-taught developer and entrepreneur based in
          Montreal, specializing in data analytics, web development, and digital
          strategy. He leads Datakyu, a marketing analytics agency focused on
          turning complex data into actionable insights.
        </Text>
      </Section>

      <Section title="My Tech Stack" id="tech-stack">
        <Flex
          direction={"row"}
          justifyContent={"center"}
          gap={"1rem"}
          wrap={"wrap"}
        >
          <Image
            maxW="100%"
            src="https://skillicons.dev/icons?i=git,html,css,tailwind,js,ts,react,astro,nextjs,vercel,postgres,prisma,py,postman,github"
            alt="Aziz Dhaouadi Technology Stack"
          ></Image>
        </Flex>
      </Section>

      <Section title="Bio" id="bio">
        {bioSection}
      </Section>

      <Section title="On the web" id="SocialLinks">
        <SocialLinks></SocialLinks>
      </Section>
    </VStack>
  );
}

export default SectionCollection;

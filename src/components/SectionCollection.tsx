import { VStack, Text, Heading, Flex, Image, Tabs } from "@chakra-ui/react";
import Section from "./Section";
import Experience from "./bio/Experience";
import { useEffect, useState } from "react";
import data from "../assets/data/data.json";
import Certifications from "./bio/Certifications";
import projects from "../assets/data/projects.json";
import ProjectCard from "./bio/ProjectCard";

type EducationType = {
  institution: string;
  degree?: string;
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
  education: EducationType[];
  experiences: ExperienceType[];
  certifications: CertificationsType[];
};

type AllUserDetailsType = {
  schema: {
    bio: {
      education: EducationType[];
      experiences: ExperienceType[];
      certifications: CertificationsType[];
    };
  };
};

type ProjectDetail = {
  title: string;
  description: string;
  tech_stack: string[];
  thumbnail_url: string;
  live_url: string;
  github_url?: string;
};

function SectionCollection() {
  const [userBio, setUserBio] = useState<UserDetailsType>();
  const [userProjects, setUserProjects] = useState<ProjectDetail[] | null>(
    null,
  );
  const [activeInstitution, setActiveInstitution] = useState<string | null>(
    "Google",
  );

  // function handleDownloadButton() {
  //   const resumeLink = document.createElement("a");
  //   resumeLink.href = "/MAziz_Dhaouadi_Resume.pdf";
  //   resumeLink.download = "MAziz_Dhaouadi_Resume.pdf";
  //   resumeLink.click();
  // }

  // function handleLoggingToAnalyticsQueue() {
  //   (window as any).analyticsQueue = (window as any).analyticsQueue || [];
  //   (window as any).analyticsQueue.push({
  //     event: "download_resume",
  //   });
  // }

  function handleBioSectionContent(userDetails: AllUserDetailsType) {
    if (userDetails) {
      return userDetails.schema.bio;
    }
  }

  useEffect(() => {
    const fetchData = () => {
      const fetchedData = data;
      const userDetails = handleBioSectionContent(fetchedData);
      setUserBio(userDetails);
    };

    const fetchProjectData = () => {
      const projectData = projects;
      const projectDetails = projectData?.projects;
      setUserProjects(projectDetails);
    };

    fetchData();
    fetchProjectData();
  }, []); // Run once on mount

  const certificationInstitutions = userBio?.certifications.map(
    (el: CertificationsType) => el["issuing_institution"],
  );
  const institutions = [...new Set(certificationInstitutions)];

  return (
    <VStack>
      <Section title="Summary" id="work">
        <Text textAlign={"start"}>
          Hi, I am Aziz! I am an analytics engineer based in Montreal, with a
          full stack development experience. I work at the intersection of data
          engineering (modelling and architecture with dbt and Snowflake),
          analysis (Python, Streamlit, Sigma Computing), web application
          development (React and Next.js), and web analytics (GA4, Amplitude,
          and the rest of the event-based crowd). My day to day is writing code
          until the sun sets. When it does, I become Batman. Really. Outside of
          work I read a lot of manga and fantasy, and I play video games
          (Pokémon above all), card games, and tennis.
          <br />
          よろしく!
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
        <>
          <Heading
            as="h2"
            size={"3xl"}
            textAlign={"start"}
            textDecoration={"underline"}
            my={"2rem"}
          >
            Projects
          </Heading>
          <Flex
            align="stretch"
            wrap="wrap"
            mt={"2rem"}
            flexDirection={{ sm: "column", md: "column", lg: "row" }}
            gap={"2rem"}
            alignItems={"start"}
            justifyContent={"center"}
          >
            {userProjects?.map((project: ProjectDetail) => {
              return <ProjectCard projectDetail={project} />;
            })}
          </Flex>

          <Heading
            as="h2"
            size={"3xl"}
            textAlign={"start"}
            textDecoration={"underline"}
            my={"2rem"}
          >
            Experiences
          </Heading>
          <Flex
            align="stretch"
            wrap="wrap"
            mt={"2rem"}
            flexDirection={{ sm: "column", md: "column", lg: "row" }}
            gap={"2rem"}
            alignItems={"start"}
            justifyContent={"center"}
          >
            {userBio?.experiences.map(
              (experienceDetails: ExperienceType, index: number) => {
                return (
                  <Experience
                    key={index}
                    job_title={experienceDetails.job_title}
                    company={experienceDetails.company}
                    start_date={experienceDetails.start_date}
                    end_date={experienceDetails.end_date}
                    highlights={experienceDetails.highlights}
                  ></Experience>
                );
              },
            )}
          </Flex>
          <Heading
            as="h2"
            size={"3xl"}
            textAlign={"start"}
            textDecoration={"underline"}
            my={"2rem"}
          >
            Certifications
          </Heading>
          <Tabs.Root
            variant={"plain"}
            value={activeInstitution}
            onValueChange={(e) => setActiveInstitution(e.value)}
          >
            <Tabs.List flexWrap={"wrap"} gap={"1rem"}>
              {institutions.map((el) => {
                return (
                  <Tabs.Trigger value={el as string}>
                    {el as string}
                  </Tabs.Trigger>
                );
              })}
            </Tabs.List>
            <Tabs.Content value={activeInstitution as string}>
              <Flex wrap="wrap" gap="1rem" justify="center" py="1.5rem">
                {userBio?.certifications
                  .filter(
                    (cert: CertificationsType) =>
                      cert["issuing_institution"] == activeInstitution,
                  )
                  .map((el: CertificationsType) => (
                    <Flex key={el.title}>
                      <Certifications
                        title={el.title}
                        issuing_institution={el.issuing_institution}
                      />
                    </Flex>
                  ))}
              </Flex>
            </Tabs.Content>
          </Tabs.Root>
        </>
      </Section>
    </VStack>
  );
}

export default SectionCollection;

import { useEffect } from 'react'
import { Heading, Text, Container, Box } from '@chakra-ui/react'
import Header from './components/Header'
import SectionCollection from './components/SectionCollection'
import Footer from './components/Footer'
import './App.css'


function App() {
  useEffect(() => {
    const structuredDataScript = document.createElement("script");
    structuredDataScript.type = "application/ld+json";
    structuredDataScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://dhaziz.me",
      "name": "Aziz Dhaouadi",
      "url": "https://dhaziz.me",
      "description": "Driven Web Analyst excels in privacy compliance, web analytics tools, showcasing a blend of technical expertise and innovative problem-solving. Proven leader with notable achievements in web analytics and consent management, demonstrating a strong commitment to advancing online privacy standards and data-driven decision-making.",
      "jobTitle": "Senior Web Traffic & Compliance Analyst",
      "mainEntity": {
        "@type": "Person",
        "@id": "https://dhaziz.me",
        "name": "Aziz Dhaouadi",
        "url": "https://dhaziz.me",
        "description": "Driven Web Analyst excels in privacy compliance, web analytics tools, showcasing a blend of technical expertise and innovative problem-solving. Proven leader with notable achievements in web analytics and consent management, demonstrating a strong commitment to advancing online privacy standards and data-driven decision-making.",
        "jobTitle": "Senior Web Traffic & Compliance Analyst",
        "affiliation": [
          {
            "@type": "Organization",
            "@id": "https://www.datakyu.co/",
            "name": "Datakyu",
            "url": "https://www.datakyu.co/"
          },
          {
            "@type": "Organization",
            "@id": "https://www.coveo.com/en",
            "url": "https://www.coveo.com/en",
            "name": "Coveo"
          }
        ],
        "subjectOf": {
          "@type": "WebPage",
          "@id": "https://dhaziz.me",
          "url": "https://dhaziz.me/",
          "name": "Aziz Dhaouadi's personal website",
          "relatedLink": "https://datajournal.datakyu.co/author/aziz/",
          "mainContentOfPage": {
            "@type": "WebPageElement",
            "name": "Aziz Dhaouadi's online resume",
            "description": "The educational background, professional background, skills and certifications of Aziz Dhaouadi"
          }
        }
      },
      "hasOccupation": {
        "@type": "Occupation",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "lastReviewed": "2024-10-26T14:20:00-05:00"
        },
        "name": "Senior Web Traffic & Compliance Analyst",
        "description": "Senior Web traffic and compliance analyst",
        "estimatedSalary": {
          "@type": "MonetaryAmountDistribution",
          "name": "base",
          "duration": "P1Y",
          "currency": "CAD",
          "minValue": 65000,
          "maxValue": 100000,
        },
        "occupationLocation": {
          "@type": "City",
          "name": "Montreal"
        },
        "experienceRequirements": {
          "@type": "OccupationalExperienceRequirements",
          "monthsOfExperience": 36
        },
        "skills": [
          "Google Analytics 4",
          "Google Search Console",
          "Google Tag Manager",
          "Looker Studio",
          "Google Ads",
          "Data visualization",
          "Data analysis",
          "Web analytics",
          "Search engine marketing",
          "Search engine optimization",
          "Front-end web development"
        ]
      },
      "worksFor": {
        "@type": "Organization",
        "url": "https://www.coveo.com",
        "name": "Coveo",
        "logo": "https://www.coveo.com/-/media/library/Images/Logos/Coveo/coveo.svg"
      },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Certificate",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Google"
        },
        "name": "Fundamentals of digital marketing",
        "description": "Master the basics of digital marketing with our free course accredited by Interactive Advertising Bureau Europe and The Open University.",
        "url": "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing"
      },
      "sameAs": [
        "https://datajournal.datakyu.co/author/aziz/",
        "https://www.linkedin.com/in/aziz-dhaouadi/",
        "https://vocal.media/authors/aziz-dhaouadi-1",
        "https://github.com/AzizDhaouadi",
        "https://marketplace.visualstudio.com/items?itemName=AzizDhaouadi.hashira-dark-theme"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Tunis Business School",
        "url": "https://en.wikipedia.org/wiki/Tunis_Business_School"
      },
      "knowsAbout": [
        {
          "@type": "DefinedTerm",
          "name": "Google Analytics 4",
          "sameAs": "https://en.wikipedia.org/wiki/Google_Analytics"
        },
        {
          "@type": "DefinedTerm",
          "name": "Google Search Console",
          "sameAs": "https://en.wikipedia.org/wiki/Google_Search_Console"
        },
        {
          "@type": "DefinedTerm",
          "name": "Google Tag Manager",
          "sameAs": "https://analytics.googleblog.com/2012/10/google-tag-manager.html"
        },
        {
          "@type": "DefinedTerm",
          "name": "Looker Studio",
          "sameAs": "https://en.wikipedia.org/wiki/Looker_Studio"
        },
        {
          "@type": "DefinedTerm",
          "name": "Google Ads",
          "sameAs": "https://en.wikipedia.org/wiki/Google_Ads"
        },
        {
          "@type": "DefinedTerm",
          "name": "Data visualization",
          "sameAs": "https://en.wikipedia.org/wiki/Scientific_visualization"
        },
        {
          "@type": "DefinedTerm",
          "name": "Data analysis",
          "sameAs": "https://en.wikipedia.org/wiki/Data_analysis"
        },
        {
          "@type": "DefinedTerm",
          "name": "Web analytics",
          "sameAs": "https://en.wikipedia.org/wiki/Web_analytics"
        },
        {
          "@type": "DefinedTerm",
          "name": "Search engine marketing",
          "sameAs": "https://en.wikipedia.org/wiki/Search_engine_marketing"
        },
        {
          "@type": "DefinedTerm",
          "name": "Search engine optimization",
          "sameAs": "https://en.wikipedia.org/wiki/Search_engine_optimization"
        },
        {
          "@type": "DefinedTerm",
          "name": "Front-end web development",
          "sameAs": "https://en.wikipedia.org/wiki/Front-end_web_development"
        }
      ],
      "knowsLanguage": [
        {
          "@type": "Language",
          "name": "Arabic",
          "alternateName": "ar"
        },
        {
          "@type": "Language",
          "name": "French",
          "alternateName": "fr"
        },
        {
          "@type": "Language",
          "name": "English",
          "alternateName": "eng"
        }
      ]
    });
    document.head.appendChild(structuredDataScript);
  }, []);
  return (
    <>
      <Header></Header>
      <main>
        <Container my={"5rem"}>
          <Box>
            <Text>Hello, I am a professional working in Canada.</Text>
            <Heading>Aziz Dhaouadi</Heading>
            <Text>Digital Creator (Analyst, Developer, Entrepreneur)</Text>
          </Box>
        </Container>
        <Container>
          <SectionCollection></SectionCollection>
        </Container>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )

};

export default App

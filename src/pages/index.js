import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Button from "components/_ui/Button"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"
import Projects from "../utils/data/Project.json"
import PartnerMarquee from "../components/_ui/PartnerMarquee"

const Hero = styled("div")`
  padding-top: 2.5em;
  padding-bottom: 1em;
  margin-bottom: 2em;
  max-width: 830px;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 3em;
  }

  h1 {
    margin-bottom: 1em;

    a {
      text-decoration: none;
      transition: all 100ms ease-in-out;

      &:nth-of-type(1) {
        color: ${colors.blue500};
      }
      &:nth-of-type(2) {
        color: ${colors.orange500};
      }
      &:nth-of-type(3) {
        color: ${colors.purple500};
      }
      &:nth-of-type(4) {
        color: ${colors.green500};
      }
      &:nth-of-type(5) {
        color: ${colors.teal500};
      }

      &:hover {
        cursor: pointer;
        transition: all 100ms ease-in-out;

        &:nth-of-type(1) {
          color: ${colors.blue600};
          background-color: ${colors.blue200};
        }
        &:nth-of-type(2) {
          color: ${colors.orange600};
          background-color: ${colors.orange200};
        }
        &:nth-of-type(3) {
          color: ${colors.purple600};
          background-color: ${colors.purple200};
        }
        &:nth-of-type(4) {
          color: ${colors.green600};
          background-color: ${colors.green200};
        }
        &:nth-of-type(5) {
          color: ${colors.teal600};
          background-color: ${colors.teal200};
        }
      }
    }
  }
`

const Section = styled("div")`
  margin-bottom: 10em;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 4em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

const RenderBody = () => (
  <>
    <Helmet
      title={"RISTEK Open Source"}
      meta={[
        {
          name: `description`,
          content:
            "RISTEK Open Source is the world's largest student-led and product-centered open source organization, a part of RISTEK Fasilkom UI and is the creator of SusunJadwal, RISTEK.Link, and more.",
        },
        {
          property: `og:title`,
          content: "RISTEK Open Source",
        },
        {
          property: `og:description`,
          content:
            "RISTEK Open Source is the world's largest student-led and product-centered open source organization, a part of RISTEK Fasilkom UI and is the creator of SusunJadwal, RISTEK.Link, and more.",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "ristekoss",
        },
        {
          name: `twitter:title`,
          content: "RISTEK Open Source",
        },
        {
          name: `twitter:description`,
          content:
            "RISTEK Open Source is the world's largest student-led and product-centered open source organization, a part of RISTEK Fasilkom UI and is the creator of SusunJadwal, RISTEK.Link, and more.",
        },
      ]}
    />
    <Hero>
      <h1>
        We are the world's largest <a>student-led</a> and{" "}
        <a>product-centered </a> open source organization with
        <a> 2+ million users</a> and 200 community maintainers.
      </h1>
      <a
        href={"https://discord.gg/R5JDWTGfXc"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Chill with Us!</Button>
      </a>
    </Hero>
    {/* Tech Partners Section */}
    <Section>
      <PartnerMarquee />
    </Section>
    {/* Projects Section */}
    <Section>
      <h3>Explore our products</h3>
      {Projects.map((project, id) => (
        <ProjectCard
          key={id}
          category={project.category}
          title={project.title}
          description={project.description}
          uid={id}
          url={project.url}
        />
      ))}
      <span>and more...</span>
    </Section>
  </>
)

export default () => {
  return (
    <Layout>
      <RenderBody />
    </Layout>
  )
}

RenderBody.propTypes = {
  home: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
}

import React from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"

const FooterContainer = styled("div")`
  padding-top: 3.75em;
  padding-bottom: 3em;
  width:'100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FooterAuthor = styled("a")`
  font-size: 0.75em;
  color: ${colors.grey700};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin-top: 1.5em;
  text-align: center;

  &:hover {
    color: ${colors.blue900};

    .FooterSpooch {
      animation-name: rotate;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const FooterSocials = styled("div")`
  display: grid;
  grid-template-columns: 1fr 4fr;
`

const SocialLink = styled("a")`
  text-decoration: none;
  color: black;
`

const Footer = () => (
  <FooterContainer>
    <FooterSocials>
      <strong>Socials</strong>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <SocialLink href="https://twitter.com/ristekoss" target="_blank">
          Twitter
        </SocialLink>
        <SocialLink href="https://github.com/ristekoss" target="_blank">
          Github
        </SocialLink>
        <SocialLink href="https://discord.gg/NVCnCRxNvf" target="_blank">
          Discord
        </SocialLink>
        <SocialLink href="https://instagram.com/ristek.csui" target="_blank">
          Instagram
        </SocialLink>
        <SocialLink href="https://medium.com/@ristek.csui" target="_blank">
          Medium
        </SocialLink>
        <SocialLink
          href="https://open.spotify.com/show/2IQDS8iLNADm0iBBe9G4di"
          target="_blank"
        >
          Spotify
        </SocialLink>
        <SocialLink href="https://ristek.cs.ui.ac.id" target="_blank">
          What is RISTEK?
        </SocialLink>
      </div>
    </FooterSocials>
    <FooterAuthor
      href="https://www.marguerite.io/?utm_source=prist&utm_medium=footer&utm_campaign=prist_starter"
      target="_blank"
    >
      © Original Theme by Marguerite Roth
    </FooterAuthor>
    <FooterAuthor href="https://ristek.cs.ui.ac.id" target="_blank">
      RISTEK Open Source is a subsidiary of RISTEK, a United States of America
      fiscally sponsored 501(c)(3) non-profit organization established by
      students from Faculty of Computer Science, Universitas Indonesia.
    </FooterAuthor>
  </FooterContainer>
)

export default Footer

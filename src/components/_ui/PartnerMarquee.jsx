import React, { useRef } from "react"
import Image from "gatsby-image/withIEPolyfill"
import useFixedPartnerLogos from "../../utils/queries/useFixedPartnerLogos"
import Partners from "../../utils/data/Partners.json"
import Ticker from "react-ticker"
import styled from "@emotion/styled"

const PartnerLogo = ({ partner, urls }) => {
  const { images } = useFixedPartnerLogos()
  console.log(images)
  const logoFile = images.edges.find(
    (img) => img.node.name === partner.toLowerCase()
  )
  const source = logoFile.node.childImageSharp.fixed

  const LogoContainer = styled("div")`
    width: full;
    margin-left: 1em;
    margin-right: 1em;
  `

  return (
    <LogoContainer className={`w-full mx-3 mt-2 mb-3`}>
      <a href={urls}>
        <Image
          className={`ticker`}
          fixed={source}
          objectFit="contain"
          objectPosition="center"
          alt={`${partner} icon`}
        />
      </a>
    </LogoContainer>
  )
}

const TickerContainer = styled("div")`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
`

const LeftFog = styled("div")`
  position: absolute;
  top: 0;
  left: -1px;
  bottom: 0;
  width: 47px;
  background: linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0));
`

const RightFog = styled("div")`
  position: absolute;
  top: 0;
  right: -1px;
  bottom: 0;
  width: 47px;
  background: linear-gradient(270deg, #fff, hsla(0, 0%, 100%, 0));
`

const PartnerMarqueeContainer = styled("div")`
  position: relative;
  text-align: center;
`

const PartnerMarquee = ({ partner }) => {
  const partners = useRef(Partners)

  return (
    <PartnerMarqueeContainer>
      <h3>Educational Partners</h3>
      <Ticker>
        {() => (
          <TickerContainer>
            {partners.current.map((partner, index) => (
              <PartnerLogo
                partner={partner.partner}
                urls={partner.url}
                key={index}
              />
            ))}
          </TickerContainer>
        )}
      </Ticker>
      <RightFog />
      <LeftFog />
    </PartnerMarqueeContainer>
  )
}

export default PartnerMarquee

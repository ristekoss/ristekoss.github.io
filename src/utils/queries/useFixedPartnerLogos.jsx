import { graphql, useStaticQuery } from "gatsby"

const useFixedPartnerLogos = () => {
  return useStaticQuery(graphql`
    query GetFixedPartnerLogos {
      images: allFile(filter: { relativeDirectory: { eq: "partners-logo" } }) {
        edges {
          node {
            name
            childImageSharp {
              fixed(
                height: 28
                quality: 100
                fit: CONTAIN
                background: "rgba(0,0,0,0)"
              ) {
                base64
                width
                height
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)
}

export default useFixedPartnerLogos

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './AboutImage.scss'

const AboutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: { eq: "about.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div
      class='about-image'
      data-aos='fade-right'
      data-aos-easing='ease-out-quad'
      data-aos-duration='500'
      data-aos-delay='300'>
      <Img fluid={data.aboutImage.childImageSharp.fluid} />
    </div>
  )
}

export default AboutImage

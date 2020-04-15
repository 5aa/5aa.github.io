//import { Link } from 'gatsby'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <footer>
      © {new Date().getFullYear()}, Built by {data.site.siteMetadata.title}
    </footer>
  )
}

export default Footer

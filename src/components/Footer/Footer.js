//import { Link } from 'gatsby'
import React from 'react'
import useSiteMetadata from '../../hooks/use-site-metadata'

const Footer = () => {
  const { title } = useSiteMetadata()

  return (
    <footer>
      © {new Date().getFullYear()}, Built by {title}
    </footer>
  )
}

export default Footer

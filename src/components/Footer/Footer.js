import { Link } from 'gatsby'
import React from 'react'
import useSiteMetadata from '../../hooks/use-site-metadata'
import './Footer.scss'

const Footer = () => {
  const { title } = useSiteMetadata()

  return (
    <footer class="footer">
      © {new Date().getFullYear()} <Link to="/">{title}</Link>
    </footer>
  )
}

export default Footer

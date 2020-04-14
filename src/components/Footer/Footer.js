//import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Footer = ({ siteTitle }) => (
  <footer>
    © {new Date().getFullYear()}, Built by {siteTitle}
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

export default Footer

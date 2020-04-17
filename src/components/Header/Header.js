import { Link } from 'gatsby'
import React from 'react'
import useSiteMetadata from '../../hooks/use-site-metadata'
import './Header.scss'

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <header class="header">
      <h3 class="logo">
        <Link to="/">{title}</Link>
      </h3>
      <div class="main-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  )
}

export default Header

import { Link } from 'gatsby'
import React from 'react'
import useSiteMetadata from '../../hooks/use-site-metadata'

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <header
      style={{
        background: `grey`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to='/'
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
            {title}
          </Link>
        </h1>
      </div>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to='/about'>About</Link>
      </div>
    </header>
  )
}

export default Header

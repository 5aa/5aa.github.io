import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
            {data.site.siteMetadata.title}
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

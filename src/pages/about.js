import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const About = () => (
  <Layout>
    <SEO title='About' />
    <h1>This is the about page</h1>
    <p>Heres some information</p>
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
)

export default About

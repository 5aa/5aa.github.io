import React from 'react'
import { Link } from 'gatsby'

//import Image from '../components/image'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ProjectSection from '../components/ProjectSection'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {/*
    //<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    //  <Image child='placeholderImage' />
    //</div>
    //<Link to='/'>Go Home</Link>
    */}
    <ProjectSection />
  </Layout>
)

export default IndexPage

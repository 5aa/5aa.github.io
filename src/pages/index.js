import React from 'react'
//import { Link } from 'gatsby'
//import Image from '../components/image'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ProjectSection from '../components/ProjectSection'
import BlogSection from '../components/BlogSection'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    {/*
    //<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    //  <Image child='placeholderImage' />
    //</div>
    */}
    <ProjectSection />
    <BlogSection />
  </Layout>
)

export default IndexPage

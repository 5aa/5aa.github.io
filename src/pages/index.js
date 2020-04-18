import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ProjectSection from '../components/ProjectSection'
import BlogSection from '../components/BlogSection'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <ProjectSection />
    <BlogSection />
  </Layout>
)

export default IndexPage

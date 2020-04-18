import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './blog-post.scss'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <h1 
        class='post-title'
				data-aos='fade-up'
        data-aos-easing='ease-out-quad'
        data-aos-duration='800'>{post.frontmatter.title}</h1>
      <div 
				class='post-date'
        data-aos='fade-up'
        data-aos-easing='ease-out-quad'
        data-aos-duration='800'>Published {post.frontmatter.date}</div>
      <div
        class='post-contents' 
        data-aos='fade-up'
        data-aos-easing='ease-out-quad'
        data-aos-duration='500'
        data-aos-delay='300'
        dangerouslySetInnerHTML={{ __html: post.html }} 
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

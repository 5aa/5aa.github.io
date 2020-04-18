import React from 'react'
import useBlogMetadata from '../../hooks/use-blog-metadata'
import BlogEntry from './components/BlogEntry'
import './BlogSection.scss'

const BlogSection = () => {
  const posts = useBlogMetadata()

  return (
    <div class="blog-container">
      <h1
        class="blog-title"
        data-aos="fade-up"
        data-aos-easing="ease-out-quad"
        data-aos-duration="800"
      >
        Blog
      </h1>
      <>
        {posts.map(({ node }) => (
          <BlogEntry
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            link={node.fields.slug}
            key={node.id}
          />
        ))}
      </>
    </div>
  )
}

export default BlogSection

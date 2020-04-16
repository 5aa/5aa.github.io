import React from 'react'
import useBlogMetadata from '../../hooks/use-blog-metadata'
import BlogEntry from './components/BlogEntry'

const BlogSection = () => {
  const posts = useBlogMetadata()

  return (
    <div>
      <h1>Blog</h1>
      <p>This is my blog.</p>
      <div>
        {posts.map(({ node }) => (
          <BlogEntry
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            link={node.fields.slug}
            key={node.id}
          />
        ))}
      </div>
    </div>
  )
}

export default BlogSection

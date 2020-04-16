import { useStaticQuery, graphql } from 'gatsby'

const useBlogMetadata = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query BlogMetadata {
			allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
				edges {
					node {
						frontmatter {
							title
              date(formatString: "MMMM DD, YYYY")
							tags
						}
						fields {
							slug
						}
						id
					}
				}
			}
    }
  `)
	return allMarkdownRemark.edges
}

export default useBlogMetadata

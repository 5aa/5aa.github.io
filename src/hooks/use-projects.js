import { useStaticQuery, graphql } from 'gatsby'

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allJavascriptFrontmatter {
        edges {
          node {
            frontmatter {
              projects {
                title
                description
                source
              }
            }
          }
        }
      }
    }
  `)
	return data.allJavascriptFrontmatter.edges[0].node.frontmatter.projects
}

export default useProjects

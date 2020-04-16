import { useStaticQuery, graphql } from 'gatsby'

const useProjectMetadata = () => {
  const { allProjectsJson } = useStaticQuery(graphql`
    query ProjectMetadata {
      allProjectsJson {
        edges {
          node {
            title
            description
            source
            id
          }
        }
      }
    }
  `)
  return allProjectsJson.edges
}

export default useProjectMetadata

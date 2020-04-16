import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          author
          site_url
        }
      }
    }
  `)
  return site.siteMetadata
}

export default useSiteMetadata

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, keywords, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        { name: 'keywords', content: 'thidasa, pankaja, iampankaja, fullstack, javascript, reactjs, nodejs, c#, web developer, frontend' },
        {
          name: `description`,
          content: `Thidasa Pankaja Paranavitharana.`,
        },
        {
          property: `og:title`,
          content: `Thidasa Pankaja Paranavitharana`,
        },
        {
          property: `og:description`,
          content: `Thidasa Pankaja Paranavitharana.`,
        },
        {
          property: `og:type`,
          content: `Portfolio`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `pankaja92`,
        },
        {
          name: `twitter:title`,
          content: `Thidasa Pankaja Paranavitharana`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: ['javascript', 'reactjs', 'c#','.net', 'nodejs', ],
  keywords: ['thidasa', 'pankaja', 'fullstack', 'javascript', 'reactjs', 'c#','.net', 'nodejs', 'java', 'web developer', 'frontend'],
  description: `Thidasa Pankaja Paranavitharana`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.string),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

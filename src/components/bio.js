/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import bioStyles from "./bio.module.css"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className={bioStyles.bio}>
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className={bioStyles.bioAvatar}
        />
      )}
      <h1 className={bioStyles.bioMainHeading}>{author.name}</h1>
      <h2 className={`h5 ${bioStyles.bioDescription}`}>{author?.summary || null}</h2>
    </div>
  )
}

export default Bio

import React from "react"

import { FaPython, FaJs, FaReact, FaCss3, FaHtml5 } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Resume = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
	return (
		<Layout location={location} title={siteTitle}>
			<SEO title="Resume" />
			<section>
				<h2 className="h4">Skills</h2>
				<div>
					<FaReact size={48} />
					<FaJs size={48} />
					<FaCss3 size={48} />
					<FaHtml5 size={48} />
					<FaPython size={48} />
				</div>
				<h2 className="h4">Work Experience</h2>
				<h3 className="h5">Frontend Developer - ProMazo</h3>
				<ul>
					<li>
						Developed new and improved existing functionality in a React/Redux
						application
					</li>
					<li>
						Participated in comprehensive code reviews and responded to feedback
						from co-developers
					</li>
					<li>Worked in an agile workflow</li>
					<li>Used git and GitHub for version control and code-review</li>
				</ul>
				<h3 className="h5">Web Intern - Gettysburg College</h3>
			</section>
		</Layout>
	)
}

export default Resume

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`

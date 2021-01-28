import React from "react"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"

import footerStyles from "./footer.module.css"

const Footer = () => (
	<footer>
		<div>
			<div class={footerStyles.socials} >
				<a href="http://www.twitter.com/bendurham441" className={footerStyles.icon} >
					<FaTwitter size={32} />
				</a>
				<a href="http://www.github.com/bendurham441" className={footerStyles.icon} >
					<FaGithub size={32} />
				</a>
				<a href="http://www.linkedin.com/in/bendurham441" className={footerStyles.icon} >
					<FaLinkedin size={32} />
				</a>
			</div>
		</div>
		<p className={footerStyles.footerText} >&copy; {new Date().getFullYear()} Ben Durham</p>
	</footer>
)

export default Footer

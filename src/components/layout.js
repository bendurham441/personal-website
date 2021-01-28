import React from "react"
import { Link } from "gatsby"

import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
	const rootPath = `${__PATH_PREFIX__}/`
	const isRootPath = location.pathname === rootPath

	return (
		<div className="global-wrapper" data-is-root-path={isRootPath}>
			<header className="global-header">
				<Navbar title={title} isRootPath={isRootPath} />
			</header>
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout

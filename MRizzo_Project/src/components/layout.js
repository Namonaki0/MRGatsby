import * as React from "react"
import PropTypes from "prop-types"
import Footer from "../pages/footer"
import Nav from "./nav"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

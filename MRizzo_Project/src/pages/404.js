import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="page-not-found-wrapper">
      <div className="logo-background-image"></div>
      <Seo title="404: Not found" />
      <p className="primary-error-message">Oops... something went wrong</p>
      <h1>PAGE NOT FOUND</h1>
      <div className="back-to-links-wrapper">
        {/* <p>return to</p> */}
        <div className="back-to-links">
          <Link to="/" className="back-to-nav-link">
            home
          </Link>
          <Link to="/videos" className="back-to-nav-link">
            videos
          </Link>
          <Link to="/merch" className="back-to-nav-link">
            merch
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

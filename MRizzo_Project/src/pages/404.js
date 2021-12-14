import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>PAGE NOT FOUND</h1>
    <Link to="/">back to Homepage</Link>
  </Layout>
)

export default NotFoundPage

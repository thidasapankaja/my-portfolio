import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./css/404.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="Invalid">
      <span>
        <p>Not Found</p>
      </span>
    </div>
  </Layout>
)

export default NotFoundPage

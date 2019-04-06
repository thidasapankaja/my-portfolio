import React from "react"
import Layout from "../components/layout"
import About from '../components/about'
import SEO from '../components/seo'

import '../components/layout.css'

export default () => (
  <Layout>
    <SEO title="About me" description="Brief description about who am I"/>
    <About />
  </Layout>
)
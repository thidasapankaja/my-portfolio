import React, { lazy, Suspense} from "react"
import Layout from "../components/layout"

import SEO from '../components/seo'

import '../components/layout.css'

const About = lazy(() => import('../components/about'));

export default () => (
  <Layout>
    <SEO title="About me" description="Brief description about who am I"/>
    <Suspense fallback={<span>Loading ...</span>}>
      <About />
    </Suspense>
  </Layout>
)
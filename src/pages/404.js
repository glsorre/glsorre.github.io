import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div class="home grid">
      <div class="unit whole">
        <h1>I am sorry...</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <p>Please <Link to="/">check out</Link> this beautiful site.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

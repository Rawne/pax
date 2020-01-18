import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <div className="content">
      <SEO title="About" />
        <h1>Wie zijn wij?</h1>
        <p></p>
        <Link to="/">Terug naar de homepage</Link>
      </div>
  </Layout>
)

export default SecondPage

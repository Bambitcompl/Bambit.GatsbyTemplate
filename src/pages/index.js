import React from "react"
import { Container } from "react-bootstrap"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container>
      Starter
    </Container>
  </Layout>
)

export default IndexPage

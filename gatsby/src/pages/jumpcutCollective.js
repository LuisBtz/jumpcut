import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import styled from 'styled-components'
import Hero1 from "../components/collective/Hero1"

const IndexPage = () => {
  const indexTrue = false;



  return(
  <Layout >
    <Seo title="Home" />
    <Contenedor>
        <Hero1 />
    </Contenedor>
  </Layout>
  )
}

const Contenedor = styled.div`
/* padding-top: 22vw; */
padding-top: 60px;
@media (max-width: 650px) {
  /* padding-top: 28vw; */
}
`

export default IndexPage

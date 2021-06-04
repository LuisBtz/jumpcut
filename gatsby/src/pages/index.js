import React, { useEffect, useState } from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import styled from 'styled-components'
import Vision from '../components/home/Vision'

const IndexPage = () => {
  const indexTrue = true;

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []); 

  return(
  <Layout scroll={scroll} indexTrue={indexTrue}>
    <Seo title="Home" />
    <Contenedor>
      <Vision />
    </Contenedor>
  </Layout>
  )
}

const Contenedor = styled.div`
padding-top: 22vw;
@media (max-width: 650px) {
  padding-top: 28vw;
}
`

export default IndexPage

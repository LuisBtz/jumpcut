import React, { useEffect, useState } from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import styled from 'styled-components'

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
      <h1>Home</h1>
    </Contenedor>
  </Layout>
  )
}

const Contenedor = styled.div`
height: 200vh;
padding-top: 350px;
`

export default IndexPage

import React, { useEffect, useState } from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import styled from 'styled-components'
import Vision from '../components/home/Vision'
import Wwa from '../components/home/Wwa'
import Team from "../components/home/Team"
import WhoWeWork from "../components/home/WhoWeWork"
import Tech from "../components/home/Tech"
import Newsletter from "../components/layout/newsletter"

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
      <Wwa />
      <Team />
      <WhoWeWork/>
      <Tech />
      <Newsletter />
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

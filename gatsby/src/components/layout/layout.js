import React from "react"
import { Normalizer } from "../style/Normalizer"
import { GlobalStyle } from "../style/GlobalStyle"
import { Typography } from "../style/Typoography"
import styled from 'styled-components'
import Header from './header'
import Footer from "./footer"



function Layout({ children, scroll, indexTrue }) {

  
  return (
    <>
      <Normalizer />
      <Typography />
      <GlobalStyle />
      <Header scroll={scroll} indexTrue={indexTrue}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
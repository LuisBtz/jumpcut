import React from "react"
import { Normalizer } from "../style/Normalizer"
import { GlobalStyle } from "../style/GlobalStyle"
import { Typography } from "../style/Typoography"
import Header from './header'
import Footer from "./footer"



function Layout({ children }) {

  
  return (
    <>
      <Normalizer />
      <Typography />
      <GlobalStyle />
      <Header/>
      <main>{children}</main>
      <Footer />
    </>
  )
}


export default Layout
import * as React from "react"
import Header from "./Header"
import Hero from "./Hero"
import "./layout.css"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  

  return (
    <>
    <GlobalStyle />
      <Header />
      <Hero/>
     
    </>
  )
}



export default Layout

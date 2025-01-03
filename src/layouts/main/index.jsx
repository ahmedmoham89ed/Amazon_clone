import React from 'react'
//components 
import Header from "../../components/header"
import Footer from "../../components/footer"

import { Outlet } from 'react-router'



const Main = () => {
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default Main
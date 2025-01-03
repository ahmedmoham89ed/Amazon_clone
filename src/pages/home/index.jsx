import React from 'react'
//helpers
import Category from "./helpers/category"
import ProductSlider from "./helpers/productslider"
import Slider from "./helpers/slider"
const Home = () => {
  return (
    <>
     <Slider/>
     <Category/>
     <Category/>
     <ProductSlider/>
     <Category/>
     <ProductSlider/>
    </>
    
  )
}

export default Home
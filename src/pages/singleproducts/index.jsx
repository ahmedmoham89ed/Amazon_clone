import React from 'react'
//helpers
import Rating from "./helpers/rating"
import BreadCrumbs from "./helpers/breadcrumbs"
import Details from "./helpers/details"
import Slider from "./helpers/slider"
import Pricing from "./helpers/pricing"
import Comments from "./helpers/comments"

const SingleProduct = () => {
  return (
    <>
    <BreadCrumbs/>
    <Slider/>
    <Details/>
    <Pricing/>
    <Rating/>
    <Comments/>
    </>
  )
}

export default SingleProduct
import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Carousel from '../../Components/Carousel/CarouselEffect'
import Catagory from '../../Components/Catagory/Catagory'
import Product from '../../Components/product/Product'
function Landing() {
  return (
    <Layout>
        <Carousel />
        <Catagory />
        <Product />
    </Layout>
  )
}

export default Landing
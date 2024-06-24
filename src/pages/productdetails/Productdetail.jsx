// import React, { useState } from 'react'
// import React,{useEffect} from 'react'
import React, { useEffect, useState } from 'react';
import classes from './Productdetail.module.css'
import Layout from '../../Components/Layout/Layout'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { productUrl } from '../../Api/Endpoint'
import ProductCard from '../../Components/product/ProductCard'
import Loader from '../../Components/loader/Loader';
function Productdetail() {
 
  const {productid}=useParams()
  const [product,setproduct]=useState({})
  const [Isloading, setIsloading] = useState(false)

  useEffect(() => {
    setIsloading(true)
   axios.get(`${productUrl}/products/${productid}`)
   .then((res)=>{
    console.log(res.data)
    setproduct(res.data)
    setIsloading(false)
   }).catch((err)=>{
    console.log(err)
    setIsloading(false)
   })
  
    
  }, [])
  
  console.log(product)
  return (
<Layout>
  {Isloading?(<Loader/>):(<ProductCard 
product={product}
flex ={true}
renderDesc={true}
renderAdd={true}

/>)}
<ProductCard 
product={product}
/>
</Layout>
  )
}

export default Productdetail
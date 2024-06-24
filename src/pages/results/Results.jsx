import React, { useState } from 'react'
import classes from './results.module.css'
import Layout from '../../Components/Layout/Layout'
import {useParams} from "react-router-dom"
import axios from 'axios'
import Product from '../../Components/product/Product'
import Catagory from '../../Components/Catagory/Catagory'
import { productUrl } from '../../Api/Endpoint'
import { useEffect } from 'react'
import Loader from '../../Components/loader/Loader'
import ProductCard from '../../Components/product/ProductCard'
function Results() {
  const [results,setResults]=useState([]);
  const [Isloading,setIsloading]=useState(false)
  const {catagoryName}=useParams()

 useEffect(() => {
  axios.get(`${productUrl}/products/category/${catagoryName}`)
  .then((res)=>{
    setIsloading(false)
    setResults(res.data)
    console.log(res.data)
  }).catch((err)=>{
    setIsloading(false)
    console.log(err)
  })
 }, [])
 
  // console.log(catagoryName)
  
  return (
    <Layout>
      <section>
        <h1 style={{padding:"30px"}}>Results</h1>
        <p style={{padding:"30px"}}>catagory /{catagoryName}</p>
        <br/>
        {Isloading?(<Loader/>) :(<div className={classes.Products_container}>
          {results?.map((product) => {
            <ProductCard 
            key={Product.id}
            Product={Product}
            renderDesc={false}
            renderAdd={true}
             />
          })}

        </div>
)}
        
      </section>
    </Layout>
  )
}

export default Results
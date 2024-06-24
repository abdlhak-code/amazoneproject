import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from './ProductCard'
import classes from './product.module.css'
import Loader from '../loader/Loader'
function Product() {
    const[Products,setproducts]=useState([])
    const [Isloading, setIsloading] = useState(false)
    useEffect(()=>{
axios.get(`https://fakestoreapi.com/products`)
.then((res)=>{
    setproducts(res.data)
    setIsloading(false)
}).catch((err)=>{
    console.log(err)
    setIsloading(false)
})
    },[])
  return (
    <>
    {
      Isloading?(<Loader/>) : (
        <section className={classes.Product_container}>
        {
            Products?.map((singleproduct)=>{
             return <ProductCard renderAdd={true}product={singleproduct} key={singleproduct.id}   />
          })

        //   {products?.map((singleProduct) => {
        //     return <ProductCard product={singleProduct} key={singleProduct.id} />;
        // })}

        }
      </section> )
    }
   
    </>
  )
}

export default Product
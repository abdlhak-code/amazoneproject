import React, { useContext } from 'react'
import Rating from "@mui/material/Rating"
import Currencyformate from '../Currencyformate/Currencyformate'
import classes from './product.module.css'
import { Link } from 'react-router-dom'
import { DataContext } from '../Dataprovider/DataProvider'
import { Type } from '../../utility/actiontype'
function ProductCard({product,flex,renderDesc}) {
    const {image,title,rating,price,id,description,renderAdd}=product;

    const [state,dispatch]=useContext(DataContext)

// console.log(state)





const Addtocart=()=>{
    dispatch({
        type:Type.ADD_TO_BASKET,
        item:{
            image,title,id,rating,price,description
        }
    })
}

  return (
    
    <div className={`${classes.card_container} ${flex?classes.product_flexed : ''}`}>
        <Link to={`/products/${id}`}>
            <img src={image} alt="" className={classes.img_container} />
        </Link>

        <div>
            <h3>title</h3>
            {renderDesc && <div style={{maxWidth:"750px"}}>{description}</div>}
<div className={classes.rating}>
    
    
{/* rating */}
<Rating value= {rating?.rate} precision={0.1}  /> 
{/* count */}
        <small>
            {rating?.count}
        </small>
    </div>

    <div>
        {/* price */}
        <Currencyformate amount={price}/>
    </div>
    
    <button className={classes.button} onClick={Addtocart}>
        add to Cart
    </button>
    
    
</div>
    </div>
  )
}

export default ProductCard
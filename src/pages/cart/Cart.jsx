import React, { useContext } from 'react'
import Layout from '../../Components/Layout/Layout'
import { DataContext } from '../../Components/Dataprovider/DataProvider'
import  ProductCard from  "../../../src/Components/product/ProductCard"
import Currencyformate from '../../Components/Currencyformate/Currencyformate'
import { Link } from 'react-router-dom'
import classes from "./Cart.module.css"
import { Type } from '../../utility/actiontype'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function Cart() {
  const [{basket,user},dispatch]=useContext(DataContext)
  const total=basket?.reduce((amount,item)=>{
  return  item.price* item.amount+ amount
  },0)
// console.log(basket)
const increament=(item)=>{
  dispatch({
    type:Type.ADD_TO_BASKET,
    item
  })
}
const decreament=(id)=>{
  dispatch({
    type :Type.ADD_TO_BASKET,
    id
  })
}
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>hello</h2>
          <h3>your shopping basket</h3>
          <hr />
          {
            basket?.length==0?(<p>apps ! no item in your Cart</p>):(
              basket?.map((item,i)=>{
                return <section className={classes.cart_product}>

                
                
                <productCard
                key={i}
                product={item}
                renderDesc={true}
                renderAdd={false}
                flex={true}
                
                />
<div  className={classes.btn_container}>
  <button className={classes.btn}  onClick={()=>increament (item)}>
  <IoIosArrowUp size={30} />
  </button>
  <span>{item.amount}</span>
  <button className={classes.btn} onClick={()=>decreament (item.id)}>
    <IoIosArrowDown size={30} />
  </button>
</div>

</section>
              })
            )
          }
        </div>
        {basket?.length !==0&&(
          <div className={classes.subtotal}>
            <div>
<p>subtotal ({basket?.length} items)</p>
<Currencyformate amount={total}/>
            </div>
            <span>
              <input type="checkbox" />
              <small>this order container agift</small>
            </span>
           <Link to="/payments">continue to checkout</Link>
          </div>
        )}
        
      </section>
    </Layout>
  )
}

export default Cart;



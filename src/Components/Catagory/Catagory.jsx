import React from 'react'
import classes from "./catagory.module.css"
import Catagorycard from './Catagorycard'
import { categoryInfos } from "./CatagoryfullInfo"

function Catagory() {
  return (
    <section className={classes.category__container}>
        {
            categoryInfos.map((Info)=> {
             return <Catagorycard data={Info} />
    
            })
        }
    </section>
  )
}

export default Catagory
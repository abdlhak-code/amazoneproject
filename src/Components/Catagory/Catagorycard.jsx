// import React from 'react'
// import {Link} from "react-router-dom"
// import classes from "./catagory.module.css"
// function Catagorycard({data}) {
//   // console.log(data) ={title,imgLink,name:`jewlery`}
//   return (
//     <div className={classes.category}>
//         <Link to={`/category/${data.name}`}>
//             <span>
//                 <h2>{data.title}</h2>
//             </span>
//             <img src={data.imgLink} alt="" />
//             <p>shop now</p>
//         </Link>

//     </div>
//   )
// }

// export default Catagorycard



import React from "react";
import classes from './catagory.module.css'
import { Link } from "react-router-dom";

function CategoryCard({data}) {
    return (
        <section className={classes.category}>
            <Link to={`/category/${data.name}`}>
                <span>
                    <h2>{data.title}</h2>
                </span>
                <img src={data.imgLink} alt="" />
                <p>shop now</p>
            </Link>
        </section>
    );
}
export default CategoryCard;
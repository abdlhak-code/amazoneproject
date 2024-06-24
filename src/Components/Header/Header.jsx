import React, { useContext } from 'react'
import classes from "./Header.module.css"
import { Link } from 'react-router-dom';
// import { LowerHeader } from "./LowerHeader"
import { BsCart } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiSearch } from "react-icons/bi";
import { DataContext } from '../Dataprovider/DataProvider';
function Header() {
	const{basket}=useContext(DataContext);
console.log(basket)
const totalItems=basket?.reduce((amount,item)=>{
	return item.amount + amount
},0)



  return (
	<>
    <section className={classes.fixed}>
    <section>
      <div className={classes.header__container}>
 {/* logo */}
        <div className={classes.logo__container}>
 <Link to="/">                
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
            </Link>
            

            {/* delivery */}
<div className={classes.delivery}>
<span>
               <SlLocationPin />
            </span>
            <div>
            <p>delivered to</p>
                <span>Ethiopia</span>
            </div>
    
</div>
</div>        
          {/* search */}
          <div className={classes.search}>
          <select name="" id="">
                <option value="">ALL</option>
             </select>
             <input type="text" />
             <BiSearch size={25} />
          </div>

 {/* rigth side link */}

 <div className={classes.order__container}>
	
					<div >
					<Link to="" className={classes.language}>
						<img
							src="https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1715644800&semt=ais_user"
							alt=""
						/>
						<select name='' id="">
							<option value="">EN</option>
						</select>
						</Link>
					</div>
					{/* <Link to="/auth"> */}
					<Link to="/">
						<div>
							<p>Sign In</p>
							<span>Account & Lists</span>
						</div>
						</Link>
					{/* </Link> */}
					{/* <Link to="/orders"> */}
					<Link to="/Order">
						<p>returns</p>
						<span>& Orders</span>
						</Link>
						<Link to="/cart" className={classes.cart}>

<BsCart size={35} />
<span> {totalItems} </span>
</Link>
				</div>
</div>


	</section>
	{/* <LowerHeader />	 */}
    </section>
	
	</>

  );
};

export default Header


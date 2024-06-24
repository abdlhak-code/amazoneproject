import React, { useEffect, useState, useContext } from "react";
import classes from "./Order.module.css";

import Layout from "../../Components/Layout/Layout";
import { db } from "../../utility/firebase";
import { DataContext } from "../../Components/Dataprovider/DataProvider";
import  ProductCard from  "../../../src/Components/product/ProductCard"

function Order() {
	const [{ user }, dispatch] = useContext(DataContext);
	const [orders, setOrders] = useState([]);
	useEffect(() => {
		if (user) {
			db.collection("users")
				.doc(user.uid)
				.collection("orders")
				.orderBy("created", "desc")
				.onSnapshot((snapshot) => {
					console.log(snapshot);
					setOrders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					);
				});
		} else {
			setOrders([]);
		}
	}, []);
	return (
		<Layout>
			<section className={classes.container}>
				<div className={classes.orders__container}>
					<h2>Your Orders</h2>

					{orders?.length == 0 && <div style={{padding:"20px"}}>You don't have orders yet </div>}

					{/* ordered items */}
					<div>
						{orders?.map((eachOrder, i) => {
							return (
								<div key={i}>
									<hr />
									<p>Order ID: {eachOrder?.id}</p>

									{eachOrder?.data?.basket?.map((order) => {
										return (
											<ProductCard flex={true} product={order} key={order.id} />
										);
									})}
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Order;

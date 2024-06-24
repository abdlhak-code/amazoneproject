// import React from 'react'
import react, { useEffect, useContext } from "react";
import Routering from './Router.jsx'
import { DataContext } from "./Components/Dataprovider/DataProvider.jsx"
import { Type } from "./utility/actiontype.js";
import {auth } from "./utility/firebase.js"

function App() {

  const [user, dispatch] = useContext(DataContext);
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// console.log(authUser);
        dispatch({
          type:Type.SET_USER,
          user:authUser
        })
			}else{
        dispatch({
          type:Type.SET_USER,
          user:null
        })
      }
		});
	}, []);

  return <Routering />
    
}

export default App
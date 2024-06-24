// import React, {createContext, useReducer} from 'react';
// // import {useReducer} from 'react'

// export const DataContext=createContext();

// export const DataProvider=({children,reducer,initialstate})=>{
//     return {
//         <DataContext.Provider value={useReducer(reducer,initialstate)}>

//         {children}

//         </DataContext.Provider>
//     }
// }

import React, { createContext, useReducer } from 'react';

export const DataContext = createContext();

 export const DataProvider = ({ children, reducer, initialState }) => {
  // const [basket,setBasket] =useReducer([])
  
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};

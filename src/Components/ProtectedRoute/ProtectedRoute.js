
// import React,{useContext,useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';

// import { DataContext } from '../Dataprovider/DataProvider'

// const ProtectedRoute = ({children,img,redirect}) => {
//     const navigate=useNavigate()
// const [user,dispatch] =useContext(DataContext)
    
// useEffect(() => {
//     if (!user){
//         navigate("/path"),{state:{redirect}}
//     }
     
//     }, [user])
    
//   return (
//     <div>ProtectedRoute</div>
//   )
// }

// export default ProtectedRoute


import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../Dataprovider/DataProvider';

const ProtectedRoute = ({ children, img, redirect }) => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(DataContext);

  useEffect(() => {
    if (!user) {
      navigate('/path', { state: { redirect } });
    }
  }, [user, navigate, redirect]);

  return user ? children : null;
};

export default ProtectedRoute;
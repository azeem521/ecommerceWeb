

import React, {useState } from 'react';
import cartContext from './contextAPI';



const ContextProvider = (props) => {

    const [cartItems,setCartItems]=useState([])

    const initialToken=localStorage.getItem('token');
    const [token,setToken]=useState(initialToken);
    const initialEmail=localStorage.getItem('email');
    const [email1,setEmail]=useState(initialEmail);


  

    const addToCartHandler =(item)=>{
        const existingItem = cartItems.find((itm)=>itm.id===item.id);
        if(existingItem){
          existingItem.quantity++;
        }else{
          setCartItems([item,...cartItems])
          console.log(cartItems);
        }
    };

    const removeFromCartHandler=(id)=>{
        console.log(id);
       const deletedItem = cartItems.find((item)=>item.id===id);
      
       if(deletedItem.quantity>1){
        deletedItem.quantity--;
        alert('Quantity Reduced')
       }else{
        const updatedItem=cartItems.filter((item)=>item.id!==id);
        setCartItems(updatedItem)
       }
      
    }

    const Useremail=email1

    const emailCapture =(email)=>{
        
        localStorage.setItem('email',email);
        setEmail(email);
        console.log(Useremail);
    }

    const loginHandler =async (token)=>{
        setToken(token);
        localStorage.setItem('token',token);
        console.log(Useremail);
        
    };

    const logoutHandler =()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        setEmail(null)
        setToken(null);
        setCartItems([])
    };


    const userIsLoggedIn=!!token;

  

    const ContextValue={
        items:cartItems,
        addToCart:addToCartHandler,
        removeFromCart:removeFromCartHandler,
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
        userEmailTrack:emailCapture,
        emailOfUser:Useremail,
    }

  return (
    <cartContext.Provider value={ContextValue}>
        {props.children}
    </cartContext.Provider>
  )
}

export default ContextProvider;
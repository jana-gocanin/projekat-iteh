import React from "react";
import CartDog from "./cartDog";
import Navigate from 'react-router-dom';

const Cart = ({cartDogs, isAdmin}) => {
  if (isAdmin==1){
    return <Navigate to="/" />;
  }
    return (
   
        <div className="cart-container">
        <h1>Ovo je Vasa korpa</h1>
        <div className="psi-korpa">
          {cartDogs.map((dog) => (
            <CartDog key={dog.id} dog={dog} />
          ))}
        </div>
        </div>
    );
          
};

export default Cart;

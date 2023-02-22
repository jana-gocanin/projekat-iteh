import React from "react";
import CartDog from "./cartDog";

const Cart = ({ cartDogs }) => {
  
  return (
   
    <div className="cart-container">
       
        <h1>Ovo je Vasa korpa</h1>
        <div className="psi-korpa">
          {cartDogs?.filter((dog) => dog.iznos > 0).map((dog) => (
            <CartDog key={dog.id} dog={dog} />
          ))}
        </div>
        </div>
    );
          
};

export default Cart;

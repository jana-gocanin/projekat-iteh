import React from "react";
import CartDog from "./cartDog";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartDogs, isAdmin }) => {
  let navigate = useNavigate();
  console.log(isAdmin);
  if (isAdmin==1){
    navigate("/");
    return null;
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

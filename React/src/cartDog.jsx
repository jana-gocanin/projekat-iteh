import React from "react";

const CartDog = ({dog}) => {
    const design = { margin: 10, borderStyle: "dashed" };
    
  
  return (
    <div className="card-cart" style={design}>
      <img className="card-img-left" src={dog.img} alt="Neka slika" width="200px" height="200px"/>
      <div className="card-body">
        <h3 className="card-title">{dog.ime}</h3>
        <p className="card-text">
          {dog.godine}   
        </p>
              <h3>Iznos: {dog.amount }</h3>
      </div>
    </div>
  );

  
}

export default CartDog
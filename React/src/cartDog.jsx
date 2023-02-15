import React from "react";

const CartDog = ({dog}) => {
    const design = { margin: 10, borderStyle: "dashed" };
    
  
  return (
    <div className="card-cart" style={design}>
      <img className="card-img-left" src={dog.pic} alt="Neka slika" width="200px" height="200px"/>
      <div className="card-body">
        <h3 className="card-title">{dog.title}</h3>
        <p className="card-text">
          {dog.description}   
        </p>
              <h3>Iznos: {dog.amount }</h3>
      </div>
    </div>
  );

  
}

export default CartDog
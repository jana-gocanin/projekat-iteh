import React from 'react'
import { ImPlus, ImMinus } from "react-icons/im";

const OneDog = ({idKorisnika,  dog, onAdd, onRemove}) => {
    const design = { margin: 10, borderStyle: "double" };
    
  
  return (
    <div className="card" style={design}>
      <img className="card-img-top" src={dog.img} alt="Neka slika" width="200px" />
      <div className="card-body">
        <h3 className="card-title">{dog.ime}</h3>
        <p className="card-text">Godine: 
          {dog.godine}   
        </p>
        <p className="card-text">Iznos: 
          {dog.iznos || '/'}   
        </p>
        <h3 className="card-title">Klikom na dugme + doniraš 100 rsd za psa po imenu {dog.ime}!</h3>
        <div className='card-btn-wrapper'>
          <div className="btn" onClick={() => onAdd(idKorisnika, dog.id)}><ImPlus /></div>
          <div className="btn" onClick={() => onRemove(idKorisnika, dog.id)}><ImMinus /></div>
          </div>
      </div>
    </div>
  );

  
}

export default OneDog
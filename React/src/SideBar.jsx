import React from 'react'
import ModalPas from './ModalPas';
import ModalUdomitelj from './ModalUdomitelj';
import ModalUgovor from './ModalUgovor';
import { useState } from 'react';

function SideBar({ data, setData, showAddPas, showAddUdomitelj, showAddUgovor, setPas }) {
  
  
  
  function showUpdatePas(){
    if (
      document.getElementById("modalIzmenaPsa").style.display == "block"
        
    ) {
      document.getElementById(
        "modalIzmenaPsa"
      ).style.display = "none";
    } else {
      document.getElementById(
        "modalIzmenaPsa"
      ).style.display = "block";
    }
  }
  
  // function showAddUdomitelj(){
  //   if (
  //     document.getElementById("modalDodavanjeUdomitelja").style.display == "block"
        
  //   ) {
  //     document.getElementById(
  //       "modalDodavanjeUdomitelja"
  //     ).style.display = "none";
  //   } else {
  //     document.getElementById(
  //       "modalDodavanjeUdomitelja"
  //     ).style.display = "block";
  //   }
  // }
  
  // function showAddUgovor() {
  //   if (
  //     document.getElementById("modalDodavanjeUgovora").style.display == "block"
        
  //   ) {
  //     document.getElementById(
  //       "modalDodavanjeUgovora"
  //     ).style.display = "none";
  //   } else {
  //     document.getElementById(
  //       "modalDodavanjeUgovora"
  //     ).style.display = "block";
  //   }
  // }
  


  // function closeModalUgovor() {
  //   document.getElementById("modalDodavanjeUgovora").style.display = "none";
  // }
  
  //   function closeModal() {
  //       document.getElementById("modalDodavanjePsa").style.display = "none";
  //     }
  
  //     function closeModalUpdatePas() {
  //       document.getElementById("modalIzmenaPsa").style.display = "none";
  //     }
  //     function closeModalDodavanjeUdomitelja(){
  //         document.getElementById("modalDodavanjeUdomitelja").style.display = "none";
  //       }
  return (
<>
<header>
    {/* Sidebar */}
    <nav
      id="sidebarMenu"
      className="collapse d-lg-block sidebar collapse bg-white"
    >
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          {/* Collapse 1 */}
          <a
            className="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
            data-mdb-toggle="collapse"
            href="#collapseExample1"
            aria-expanded="true"
            aria-controls="collapseExample1"
          >
            <i className="fas fa-tachometer-alt fa-fw me-3" />
            <span>Psi</span>
          </a>
          {/* Collapsed content */}
          <ul
            id="collapseExample1"
            className="collapse show list-group list-group-flush"
          >
            <li className="list-group-item py-1">
              
              <button
                    id="btn-dodaj-psa"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#modalDodavanjePsa"
                    onClick={() => {
                      setPas(null);
                      showAddPas();
                    }}
>
  Dodaj psa
</button>


              
            </li>
            {/* <li className="list-group-item py-1">
            <button
  id="btn-izmeni-psa"
  className="btn"
  data-bs-toggle="modal"
  data-bs-target="#modalIzmenaPsa"
  onClick={showUpdatePas}

>
  Izmeni psa
</button>
            </li> */}
            {/* <li className="list-group-item py-1">
            <button
  id="btn-obrisi-psa"
  className="btn"

>
  Obrisi psa
</button>
            </li>
             */}
          </ul>
          {/* Collapse 1 */}
          {/* Collapse 2 */}
          <a
            className="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
            data-mdb-toggle="collapse"
            href="#collapseExample1"
            aria-expanded="true"
            aria-controls="collapseExample1"
          >
            <i className="fas fa-tachometer-alt fa-fw me-3" />
            <span>Udomitelji</span>
          </a>
          {/* Collapsed content */}
          <ul
            id="collapseExample2"
            className="collapse show list-group list-group-flush"
          >
            <li className="list-group-item py-1">
            <button
  id="btn-dodaj-udomitelja"
  className="btn"
  data-bs-toggle="modal"
  data-bs-target="#modalDodavanjeUdomitelja"
  onClick={showAddUdomitelj}
 
>
Dodaj udomitelja
</button>
            </li>
            {/* <li className="list-group-item py-1">
            <button
  id="btn-obrisi-udomitelja"
  className="btn"
>
  Obrisi udomitelja
</button>
            </li> */}
            
          </ul>
          {/* Collapse 2 */}
                          {/* Collapse 3 */}
          <a
            className="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
            data-mdb-toggle="collapse"
            href="#collapseExample1"
            aria-expanded="true"
            aria-controls="collapseExample1"
          >
            <i className="fas fa-tachometer-alt fa-fw me-3" />
            <span>Ugovori</span>
          </a>
          {/* Collapsed content */}
          <ul
            id="collapseExample3"
            className="collapse show list-group list-group-flush"
          >
            <li className="list-group-item py-1">
            <button
  id="btn-dodaj-ugovor"
  className="btn"
  data-bs-toggle="modal"
  data-bs-target="#modalDodavanjeUgovora"
  onClick={showAddUgovor}

>
  Dodaj ugovor
</button>
            </li>
            {/* <li className="list-group-item py-1">
            <button
  id="btn-obrisi-ugovor"
  className="btn"
  
  
>
  Obrisi ugovor
</button>
            </li> */}
          </ul>
          {/* Collapse 3 */}
        </div>
      </div>
    </nav>
    {/* Sidebar */}
    {/* Navbar */}
    
    {/* Navbar */}
  </header>
  {/*Main Navigation*/}
  {/*Main layout*/}
  <main style={{ marginTop: 58 }}>
    <div className="container pt-4" />
      </main>
      {/* {showModal &&
        <ModalPas closeModal={showAddPas} closeModalUpdatePas={showAddPas}
        
         setData={(a) => {
          debugger; setData(a)
        }
        } />
      }
  <ModalUdomitelj closeModalDodavanjeUdomitelja={closeModalDodavanjeUdomitelja} />
 <ModalUgovor closeModalUgovor={closeModalUgovor} /> */}
  
</>


  )
}

export default SideBar
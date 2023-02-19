import React from 'react'
import axios from 'axios'
import { useState } from 'react';

function ModalUdomitelj({closeModalDodavanjeUdomitelja}) {
  const [state, setState] = useState({
    id: '',
    ime: '',
    prezime: '',
    datum_rodjenja: '',
    email: ''
   
  });

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  function refresh() {
    var config = {
      method: "get",
      url: "udomitelj/getAll",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
    };
    axios(config).then((res) => {
      setState(res.data);
    });
  }

  const saveUdomitelj = async (e) => {
    e.preventDefault();
    // const res = await axios.post('pas/add', state);
    // console.log(res.data);
    // if (res.data.success===200) {
    //   console.log(res.data.message);
    //   setState({
    //     id: '',
    //     ime: '',
    //     godine: '',
    //     boja: '',
    //     tezina: '',
    //     vakcina_id: '',
    //   });
    // }
    var config = {
        method: "post",
        url: "udomitelj/add",
        headers: {
          Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
        },
        data: state,
      };
      axios(config)
      .then((res) => {
        console.log(res.data);
        refresh();
        if (res.data.success===200) {
           console.log(res.data.message);
           setState({
            id: '',
            ime: '',
            prezime: '',
            datum_rodjenja: '',
            email: ''
          });
        }
      })
    
  
 
  };
  return (
    <>
    <div className="modal" id="modalDodavanjeUdomitelja" role="dialog">
    <div className="modal-dialog">
      {/*Sadrzaj modala*/}
      <div className="modal-content" style={{ border: "4px solid green" }}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" onClick={closeModalDodavanjeUdomitelja}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="container tim-form">
            <form action="#" method="post" id="dodaj-form-udomitelj" onSubmit={saveUdomitelj}>
              <h3 id="naslov" style={{ color: "black" }} text-align="center">
                Dodavanje udomitelja
              </h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      style={{ border: "1px solid black" }}
                      name="ime"
                      className="form-control"
                      placeholder="Ime *"
                      onChange={handleInput}
                      value={state.ime}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      style={{ border: "1px solid black" }}
                      name="prezime"
                      className="form-control"
                      placeholder="Prezime  *"
                      onChange={handleInput}
                      value={state.prezime}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="date"
                      style={{ border: "1px solid black" }}
                      name="datum_rodjenja"
                      className="form-control"
                      placeholder="Datum rodjenja *"
                      onChange={handleInput}
                      value={state.datum_rodjenja}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      style={{ border: "1px solid black" }}
                      name="email"
                      className="form-control"
                      placeholder="Email *"
                      onChange={handleInput}
                      value={state.email}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      id="btnDodaj"
                      type="submit"
                      className="btn btn-success btn-block"
                      style={{
                        backgroundColor: "orange",
                        border: "1px solid black"
                      }}
                    >
                      <i className="glyphicon glyphicon-plus" /> Dodaj
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          {/* <button
            type="button"
            className="btn btn-default"
            style={{
              color: "white",
              backgroundColor: "orange",
              border: "1px solid white"
            }}
            data-dismiss="modal"
          >
            Zatvori
          </button> */}
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default ModalUdomitelj
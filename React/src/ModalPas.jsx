import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import $ from 'jquery'

function ModalPas({closeModal, closeModalUpdatePas, setData}) {

  
    const [state, setState] = useState({
        id: '',
        ime: '',
        godine: '',
        boja: '',
        tezina: '',
        vakcina_id: '',
      });
    
      const handleInput = (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        });
      };
    
      // function refresh() {
      //   var config = {
      //     method: "get",
      //     url: "pas/getAll",
      //     headers: {
      //       Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      //     },
      //   };
      //   axios(config).then((res) => {
      //     setState(res.data);
      //   });
      // }

      const savePas = async (e) => {
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
            url: "pas/add",
            headers: {
              Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
            },
            data: state,
          };
          axios(config)
          .then((res) => {
            console.log(res.data);
            
            if (res.data.success===200) {
               console.log(res.data.message);
               setState({
                id: '',
                ime: '',
                godine: '',
                 boja: '',
                 tezina: '',
                 vakcina_id: '',
               });
              setData(res.data.response.original);
              $('#table').DataTable().ajax.reload();
            }
          })
        
      
     
      };

  return (
    <>
    <div className="modal" id="modalDodavanjePsa" role="dialog" style={{display:'block'}}> 
    <div className="modal-dialog">
      {/*Sadrzaj modala*/}
      <div className="modal-content" style={{ border: "4px solid green" }}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal"  onClick={closeModal}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="container tim-form">
            <form method="post" id="dodaj-form-pas" onSubmit={savePas}>
              <h3 id="naslov" style={{ color: "black" }} text-align="center">
                Dodavanje psa
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
                      name="godine"
                      className="form-control"
                      placeholder="Godine  *"
                     
                      onChange={handleInput}
                      value={state.godine}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      style={{ border: "1px solid black" }}
                      name="boja"
                      className="form-control"
                      placeholder="Boja *"
                     
                      onChange={handleInput}
                      value={state.boja}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      style={{ border: "1px solid black" }}
                      name="tezina"
                      className="form-control"
                      placeholder="Tezina *"
                     
                      onChange={handleInput}
                      value={state.tezina}
                    />
                  </div>
                  <div className="form-group">
                    <label>Vakcina: </label>
                    <select
                    name="vakcina_id">
                      <option id="" value=""></option>
                    </select>
                  </div>
                  <div className="form-group">
                    <button
                      id="btn-dodaj-psa"
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
  <div className="modal" id="modalIzmenaPsa" role="dialog">
    <div className="modal-dialog">
      {/* Modal sadrzaj*/}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" onClick={closeModalUpdatePas}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="container tim-form">
            <form action="#" method="post" id="izmeni-form-ugovor">
              <h3 style={{ color: "black" }}>Izmena psa</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input 
                    id="ugovor-id" type="text"
                    style={{ border: "1px solid black" }}
                    name="id" className="form-control"
                    placeholder="Id psa*"
                    defaultValue="" readOnly="" />
                    </div>
                    <div className="form-group">
                    <input
                      type="text"
                      style={{ border: "1px solid black" }}
                      name="ime"
                      className="form-control"
                      placeholder="Ime *"
                      defaultValue=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      style={{ border: "1px solid black" }}
                      name="godine"
                      className="form-control"
                      placeholder="Godine  *"
                      defaultValue=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      style={{ border: "1px solid black" }}
                      name="boja"
                      className="form-control"
                      placeholder="Boja *"
                      defaultValue=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      style={{ border: "1px solid black" }}
                      name="tezina"
                      className="form-control"
                      placeholder="Tezina *"
                      defaultValue=""
                    />
                  </div>
                  <div className="form-group">
                    <label>Vakcina </label>
                    <select
                    name="vakcina_id">
                      <option id="" value=""></option>
                    </select>
                  </div>
                  <div className="form-group">
                    <button
                      id="btn-dodaj-psa"
                      type="submit"
                      className="btn btn-success btn-block"
                      style={{
                        backgroundColor: "orange",
                        border: "1px solid black"
                      }}
                    >
                      <i className="glyphicon glyphicon-plus" /> Izmeni
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

export default ModalPas
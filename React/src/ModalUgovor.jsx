import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

function ModalUgovor({ugovor, setUgovor, closeModalUgovor}) {

  const [state, setState] = useState({
   id: '',
   potpisano:'',
   datum_potpisa:'',
   udomitelj_id: '',
   pas_id: ''
   
  });

  const [udomitelj, setUdomitelj] = useState({
    id: '',
    potpisano:'',
    datum_potpisa:'',
    udomitelj_id: '',
    pas_id: '',
    udomitelji: [] 
  });
  const [pas, setPas] = useState({
    id: '',
        ime: '',
        godine: '',
        boja: '',
        tezina: '',
        vakcina_id: '',
        psi: [] 
  });

  useEffect(() => {
    const fetchPsi = async () => {
      const response = await axios.get('pas/getAllUnadopted');
      setPas(prevState => ({
        ...prevState,
        psi: response.data
      }));
    };
  
    fetchPsi();
  }, []);

  useEffect(() => {
    const fetchUdomitelji = async () => {
      const response = await axios.get('udomitelj/getAll');
      setUdomitelj(prevState => ({
        ...prevState,
        udomitelji: response.data
      }));
    };
  
    fetchUdomitelji();
  }, []);
  

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleCheck = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setState((prevState) => ({
      ...prevState,
      potpisano: newValue,
    }));
  };

  const handleUdomiteljChange = (event) => {
    const udomiteljId = event.target.value;
    setState((prevState) => ({
      ...prevState,
      udomitelj_id: udomiteljId,
    }));
  };

  const handlePasChange = (event) => {
    const pasId = event.target.value;
    setState((prevState) => ({
      ...prevState,
      pas_id: pasId,
    }));
  };

  // function refresh() {
  //   var config = {
  //     method: "get",
  //     url: "ugovor/getAll",
  //     headers: {
  //       Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
  //     },
  //   };
  //   axios(config).then((res) => {
  //     setState(res.data);
  //   });
  // }

  const saveUgovor = async (e) => {
    e.preventDefault();
    const data = {
      id: state.id,
      potpisano: state.potpisano ? 1 : 0,
      datum_potpisa: state.datum_potpisa,
      udomitelj_id: state.udomitelj_id,
      pas_id: state.pas_id,
    };
    var config = {
        method: "post",
        url: "ugovor/add",
        headers: {
          Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
        },
       // data: state,
       data:data
      };
      axios(config)
      .then((res) => {
        console.log(res.data);
        if (res.data.status===200) {
           console.log(res.data.message);
           setState({
            id: '',
            potpisano:'',
            datum_potpisa:'',
             udomitelj_id: '',
             pas_id: ''
           });
          setUgovor(res.data.response.original);
          closeModalUgovor();
        }
      })
    
  
 
  };
  return (
   <>
    <div className="modal" id="modalDodavanjeUgovora" role="dialog" style={{display:'block'}}>
    <div className="modal-dialog">
      {/*Sadrzaj modala*/}
      <div className="modal-content" style={{ border: "4px solid green" }}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" onClick={closeModalUgovor}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="container tim-form">
            <form action="#" method="post" id="dodaj-form-ugovor" onSubmit={saveUgovor}>
              <h3 id="naslov" style={{ color: "black" }} text-align="center">
                Dodavanje ugovora
              </h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="checkbox"
                      style={{ border: "1px solid black" }}
                      name="potpisano"
                      className="form-control"
                      placeholder="Potpisano *"
                    
                      defaultChecked={state.potpisano}
                      onChange={handleCheck}
                      //value={state.potpisano}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="date"
                      style={{ border: "1px solid black" }}
                      name="datum_potpisa"
                      className="form-control"
                      placeholder="Datum potpisa  *"
                      onChange={handleInput}
                      value={state.datum_potpisa}
                    />
                  </div>
                  <div className="form-group">
                    <select name="pas_id"  onChange={handlePasChange} value={state.pas_id || ''}>
                    <option value="">-- Select  pas --</option>
                    {pas.psi.map((pas) => (
    <option key={pas.id} value={pas.id}>
      {pas.ime} 
    </option>

  ))}
  
                     
                    
                      {/* <option value="null">Nema psa</option> */}
                    </select>
                  </div>
                  <div className="form-group">
                    <select name="udomitelj_id" onChange={handleUdomiteljChange} value={state.udomitelj_id || ''}>
                    <option value="">-- Select  udomitelj --</option>
                    {udomitelj.udomitelji.map((udomitelj) => (
    <option key={udomitelj.id} value={udomitelj.id}>
      {udomitelj.ime} {udomitelj.prezime}
    </option>
  ))}
                    
                 
                      {/* <option value="null">Nema udomitelja</option> */}
                    </select>
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

export default ModalUgovor
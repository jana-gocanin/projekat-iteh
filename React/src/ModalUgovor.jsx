import React from 'react'

function ModalUgovor({closeModalUgovor}) {

  const [state, setState] = useState({
   id: '',
   potpisano:'',
   datum_potpisa:'',
   udomitelj_id: '',
   pas_id: ''
   
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
      url: "ugovor/getAll",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
    };
    axios(config).then((res) => {
      setState(res.data);
    });
  }

  const saveUgovor = async (e) => {
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
        url: "ugovor/add",
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
            potpisano:'',
            datum_potpisa:'',
            udomitelj_id: '',
            pas_id: ''
          });
        }
      })
    
  
 
  };
  return (
   <>
    <div className="modal" id="modalDodavanjeUgovora" role="dialog">
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
                    
                      defaultChecked=""
                      onChange={handleInput}
                      value={state.potpisano}
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
                    <select name="pas_id">
                     
                    
                      <option value="null">Nema psa</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select name="udomitelj_id">
                     
                    
                      <option value="null">Nema udomitelja</option>
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
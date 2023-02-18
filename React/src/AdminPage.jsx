import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";

const style = {
  color: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#76c893",
  borderStyle: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: 10 + "px",
};
function AdminPage() {
  
    const [modalVisible, setModalVisible] = useState(false);
    const [PasList, setPasList] = useState();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [userData, setUserData] = useState({
      ime: "",
      godine: "",
      boja: "",
      tezina: "",
      vakcina_id: "",
    });
    function refreshPas() {
      var config = {
        method: "get",
        url: "pas/getAll", //iz laravela
        headers: {
          Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
        },
      };
      axios(config).then((res) => {
        setPasList(res.data);
      });
    }
    let navigate = useNavigate();
    function handleInput(e) {
      let newUserData = userData;
      newUserData[e.target.name] = e.target.value;
      setUserData(newUserData);
    }
    // function handlePasAdd(e) {
    //   e.preventDefault();
    //   var config = {
    //     method: "post",
    //     url: "pas/add", //iz laravela
    //     headers: {
    //       Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
    //     },
    //     data: userData,
    //   };
    //   axios(config)
    //     .then((res) => {
    //       refreshPas();
    //       document.getElementsByClassName("form-register")[0].reset();
    //       document.getElementsByClassName(
    //         "div-prof-add-homework"
    //       )[0].style.display = "none";
    //       document.getElementById("naziv_jezika").value = "";
    //       document.getElementById("nivo").value = "";
    //       handleOpen();
    //       setTimeout(function () {
    //         handleClose();
    //       }, 1000);
    //     })
    //     .catch(() => console.log(e));
    // }
    function showAddPas() {
      if (
        document.getElementById("modalDodavanjePsa").style.display == "block"
          
      ) {
        document.getElementById(
          "modalDodavanjePsa"
        ).style.display = "none";
      } else {
        document.getElementById(
          "modalDodavanjePsa"
        ).style.display = "block";
      }
    }

  return (
      <>
          <div className='container'>
  {/*Main Navigation*/}
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
  data-toggle="modal"
  data-target="#modalDodavanjePsa"
  onClick={showAddPas}
 // onClick={showAddPas}
>
  Dodaj psa
</button>


              
            </li>
            <li className="list-group-item py-1">
              <a href="" className="text-reset">
                Izmeni psa
              </a>
            </li>
            <li className="list-group-item py-1">
              <a href="" className="text-reset">
                Obrisi psa
              </a>
            </li>
            
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
              <a href="" className="text-reset">
                Dodaj udomitelja
              </a>
            </li>
            <li className="list-group-item py-1">
              <a href="" className="text-reset">
                Obrisi udomitelja
              </a>
            </li>
            
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
              <a href="" className="text-reset">
                Dodaj ugovor
              </a>
            </li>
            <li className="list-group-item py-1">
              <a href="" className="text-reset">
                Obrisi ugovor
              </a>
            </li>
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
          {/*Main layout*/}
          
              {/*tabela */}
              <h1>Psi</h1>
          <table className="table align-middle mb-0 bg-white">
  <thead className="bg-light">
    <tr>
      <th>Ime</th>
      <th>Godine</th>
      <th>Boja</th>
        <th>Tezina</th>
        <th>Vakcina</th>
      <th>Selektuj</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
            alt=""
            style={{ width: 45, height: 45 }}
            className="rounded-circle"
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">John Doe</p>
            <p className="text-muted mb-0">john.doe@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Software engineer</p>
        <p className="text-muted mb-0">IT department</p>
      </td>
      <td>
        <span className="badge badge-success rounded-pill d-inline">
          Active
        </span>
      </td>
                          <td>Senior</td>
                          <td>Junior</td>
      <td>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          Edit
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://mdbootstrap.com/img/new/avatars/6.jpg"
            className="rounded-circle"
            alt=""
            style={{ width: 45, height: 45 }}
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">Alex Ray</p>
            <p className="text-muted mb-0">alex.ray@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Consultant</p>
        <p className="text-muted mb-0">Finance</p>
      </td>
      <td>
        <span className="badge badge-primary rounded-pill d-inline">
          Onboarding
        </span>
      </td>
                          <td>Junior</td>
                          <td>Junior</td>
      <td>
        <button
          type="button"
          className="btn btn-link btn-rounded btn-sm fw-bold"
          data-mdb-ripple-color="dark"
        >
          Edit
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://mdbootstrap.com/img/new/avatars/7.jpg"
            className="rounded-circle"
            alt=""
            style={{ width: 45, height: 45 }}
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">Kate Hunington</p>
            <p className="text-muted mb-0">kate.hunington@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Designer</p>
        <p className="text-muted mb-0">UI/UX</p>
      </td>
      <td>
        <span className="badge badge-warning rounded-pill d-inline">
          Awaiting
        </span>
      </td>
                          <td>Senior</td>
                          <td>Junior</td>
      <td>
        <button
          type="button"
          className="btn btn-link btn-rounded btn-sm fw-bold"
          data-mdb-ripple-color="dark"
        >
          Edit
        </button>
      </td>
    </tr>
  </tbody>
              </table>
              {/*tabela */}
              <h1>Udomitelji</h1>
          <table className="table align-middle mb-0 bg-white">
  <thead className="bg-light">
    <tr>
      <th>Ime</th>
      <th>Godine</th>
      <th>Boja</th>
        <th>Tezina</th>
        <th>Vakcina</th>
      <th>Selektuj</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
            alt=""
            style={{ width: 45, height: 45 }}
            className="rounded-circle"
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">John Doe</p>
            <p className="text-muted mb-0">john.doe@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Software engineer</p>
        <p className="text-muted mb-0">IT department</p>
      </td>
      <td>
        <span className="badge badge-success rounded-pill d-inline">
          Active
        </span>
      </td>
                          <td>Senior</td>
                          <td>Junior</td>
      <td>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          Edit
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://mdbootstrap.com/img/new/avatars/6.jpg"
            className="rounded-circle"
            alt=""
            style={{ width: 45, height: 45 }}
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">Alex Ray</p>
            <p className="text-muted mb-0">alex.ray@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Consultant</p>
        <p className="text-muted mb-0">Finance</p>
      </td>
      <td>
        <span className="badge badge-primary rounded-pill d-inline">
          Onboarding
        </span>
      </td>
                          <td>Junior</td>
                          <td>Junior</td>
      <td>
        <button
          type="button"
          className="btn btn-link btn-rounded btn-sm fw-bold"
          data-mdb-ripple-color="dark"
        >
          Edit
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://mdbootstrap.com/img/new/avatars/7.jpg"
            className="rounded-circle"
            alt=""
            style={{ width: 45, height: 45 }}
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">Kate Hunington</p>
            <p className="text-muted mb-0">kate.hunington@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Designer</p>
        <p className="text-muted mb-0">UI/UX</p>
      </td>
      <td>
        <span className="badge badge-warning rounded-pill d-inline">
          Awaiting
        </span>
      </td>
                          <td>Senior</td>
                          <td>Junior</td>
      <td>
        <button
          type="button"
          className="btn btn-link btn-rounded btn-sm fw-bold"
          data-mdb-ripple-color="dark"
        >
          Edit
        </button>
      </td>
    </tr>
  </tbody>
              </table>
              {/*tabela */}
              <h1>Ugovori</h1>
          <table className="table align-middle mb-0 bg-white">
  <thead className="bg-light">
    <tr>
      <th>Ime</th>
      <th>Godine</th>
      <th>Boja</th>
        <th>Tezina</th>
        <th>Vakcina</th>
      <th>Selektuj</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
            alt=""
            style={{ width: 45, height: 45 }}
            className="rounded-circle"
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">John Doe</p>
            <p className="text-muted mb-0">john.doe@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Software engineer</p>
        <p className="text-muted mb-0">IT department</p>
      </td>
      <td>
        <span className="badge badge-success rounded-pill d-inline">
          Active
        </span>
      </td>
                          <td>Senior</td>
                          <td>Junior</td>
      <td>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          Edit
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://mdbootstrap.com/img/new/avatars/6.jpg"
            className="rounded-circle"
            alt=""
            style={{ width: 45, height: 45 }}
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">Alex Ray</p>
            <p className="text-muted mb-0">alex.ray@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Consultant</p>
        <p className="text-muted mb-0">Finance</p>
      </td>
      <td>
        <span className="badge badge-primary rounded-pill d-inline">
          Onboarding
        </span>
      </td>
                          <td>Junior</td>
                          <td>Junior</td>
      <td>
        <button
          type="button"
          className="btn btn-link btn-rounded btn-sm fw-bold"
          data-mdb-ripple-color="dark"
        >
          Edit
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://mdbootstrap.com/img/new/avatars/7.jpg"
            className="rounded-circle"
            alt=""
            style={{ width: 45, height: 45 }}
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">Kate Hunington</p>
            <p className="text-muted mb-0">kate.hunington@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Designer</p>
        <p className="text-muted mb-0">UI/UX</p>
      </td>
      <td>
        <span className="badge badge-warning rounded-pill d-inline">
          Awaiting
        </span>
      </td>
                          <td>Senior</td>
                          <td>Junior</td>
      <td>
        <button
          type="button"
          className="btn btn-link btn-rounded btn-sm fw-bold"
          data-mdb-ripple-color="dark"
        >
          Edit
        </button>
      </td>
    </tr>
  </tbody>
              </table>
              <>
                  {/* <div className="modal fade" id="modalDodavanjePsa" role="dialog"> */}
                  <div
  className={`modal fade${modalVisible ? " show" : ""}`}
  id="modalDodavanjePsa"
  role="dialog"
>
    <div className="modal-dialog">
      {/*Sadrzaj modala*/}
      <div className="modal-content" style={{ border: "4px solid green" }}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="container tim-form">
            <form method="post" id="dodaj-form-pas">
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
          <button
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
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="modalDodavanjeUdomitelja" role="dialog">
    <div className="modal-dialog">
      {/*Sadrzaj modala*/}
      <div className="modal-content" style={{ border: "4px solid green" }}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="container tim-form">
            <form action="#" method="post" id="dodaj-form-udomitelj">
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
                      defaultValue=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      style={{ border: "1px solid black" }}
                      name="prezime"
                      className="form-control"
                      placeholder="Prezime  *"
                      defaultValue=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="date"
                      style={{ border: "1px solid black" }}
                      name="datum_rodjenja"
                      className="form-control"
                      placeholder="Datum rodjenja *"
                      defaultValue=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      style={{ border: "1px solid black" }}
                      name="email"
                      className="form-control"
                      placeholder="Email *"
                      defaultValue=""
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
          <button
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
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="modalDodavanjeUgovora" role="dialog">
    <div className="modal-dialog">
      {/*Sadrzaj modala*/}
      <div className="modal-content" style={{ border: "4px solid green" }}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="container tim-form">
            <form action="#" method="post" id="dodaj-form-ugovor">
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
                      defaultValue={1}
                      defaultChecked=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="date"
                      style={{ border: "1px solid black" }}
                      name="datum_potpisa"
                      className="form-control"
                      placeholder="Datum potpisa  *"
                      defaultValue=""
                    />
                  </div>
                  <div className="form-group">
                    <select name="pas_id">
                      {/*?php if (!empty($psi)) {
                                      foreach ($neudomljeniPsiArray as $pas) {
                                              ?*/}
                      <option value="<?php echo $pas['id'] ?>">
                        {/*?php echo $pas['ime'] ?*/}[
                        {/*?php echo $pas['id'] ?*/}]
                      </option>
                      {/*?php
                                          }
                                      } else {
                                      ?*/}
                      <option value="null">Nema psa</option>
                      {/*?php
                                      }
                                      ?*/}
                    </select>
                  </div>
                  <div className="form-group">
                    <select name="udomitelj_id">
                      {/*?php if (!empty($udomitelji)) {
                                          foreach ($udomiteljiArray as $udomitelj) {
                                              ?*/}
                      <option value="<?php echo $udomitelj['id'] ?>">
                        {/*?php echo $udomitelj['ime'] ?*/}[
                        {/*?php echo $udomitelj['id'] ?*/}]
                      </option>
                      {/*?php
                                          }
                                      } else {
                                          ?*/}
                      <option value="null">Nema udomitelja</option>
                      {/*?php
                                      }
                                      ?*/}
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
          <button
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
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="modalIzmenaUgovora" role="dialog">
    <div className="modal-dialog">
      {/* Modal sadrzaj*/}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="container tim-form">
            <form action="#" method="post" id="izmeni-form-ugovor">
              <h3 style={{ color: "black" }}>Izmena ugovora</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      id="ugovor-id"
                      type="text"
                      name="id"
                      className="form-control"
                      placeholder="Id ugovora *"
                      defaultValue=""
                      readOnly=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="ugovor-potpisano"
                      type="checkbox"
                      name="potpisano"
                      className="form-control"
                      placeholder="Potpisano *"
                      defaultValue={1}
                      defaultChecked=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="ugovor-datum"
                      type="date"
                      name="datum_potpisa"
                      className="form-control"
                      placeholder="Datum potpisa *"
                      defaultValue=""
                    />
                  </div>
                  <div className="form-group">
                    <select name="pas_id">
                      {/*?php if (!empty($psi)) {
                                          foreach ($psiArray as $pas) {
                                              ?*/}
                      <option
                        id="ugovor-pas-id-<?php echo $pas['id'] ?>"
                        value="<?php echo $pas['id'] ?>"
                      >
                        {/*?php echo $pas['ime'] ?*/}[
                        {/*?php echo $pas['id'] ?*/}]
                      </option>
                      {/*?php
                                          }
                                      } else {
                                          ?*/}
                      <option value="null">Nema psa</option>
                      {/*?php
                                      }
                                      ?*/}
                    </select>
                  </div>
                  <div className="form-group">
                    <select name="udomitelj_id">
                      {/*?php if (!empty($udomitelji)) {
                                          foreach ($udomiteljiArray as $udomitelj) {
                                              ?*/}
                      <option
                        id="ugovor-udomitelj-id-<?php echo $udomitelj['id'] ?>"
                        value="<?php echo $udomitelj['id'] ?>"
                      >
                        {/*?php echo $udomitelj['ime'] ?*/}[
                        {/*?php echo $udomitelj['id'] ?*/}]
                      </option>
                      {/*?php
                                          }
                                      } else {
                                          ?*/}
                      <option value="null">Nema udomitelja</option>
                      {/*?php
                                      }
                                      ?*/}
                    </select>
                  </div>
                  <div className="form-group">
                    <button
                      id="btnIzmeni"
                      type="submit"
                      className="btn btn-success btn-block"
                      style={{
                        color: "white",
                        backgroundColor: "orange",
                        border: "1px solid white"
                      }}
                    >
                      <i className="glyphicon glyphicon-pencil" /> Izmeni
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-default"
            data-dismiss="modal"
          >
            Zatvori
          </button>
        </div>
      </div>
    </div>
  </div>
</>

</div>
</>

  )
}

export default AdminPage
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

// import Typography from "@mui/material/Typography";
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

function Register() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    
  });
  let navigate = useNavigate();
  function handleInput(e) {
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;
    setUserData(newUserData);
  }
  function handleRegister(e) {
    // var pw1=document.getElementById("input-password-register");
    // var pw2=document.getElementById("input-password-reenter");
    e.preventDefault();
    axios
      .post("register", userData)
      .then((res) => {
        console.log(res.data);
        // if(pw1!=pw2){
        //     alert("Password did not mach");
        // }
        if (
          res.data.email ==
          "The email has already been taken."
        ) {
          document.getElementById("input-korisnicko_ime").value =
            "Email zauzet!";
          document.getElementById("input-korisnicko_ime").style.color = "red";
          setTimeout(function () {
            document.getElementById("input-korisnicko_ime").value = "";
            document.getElementById("input-korisnicko_ime").style.color =
              "black";
          }, 2000);
        } else if (
          res.data.password == "The password must be at least 8 characters."
        ) {
          document.getElementById("input-password-register").style.color =
            "red";
          document.getElementById("input-password-register").type = "name";
          document.getElementById("input-password-register").value =
            "Najmanje 8 karaktera";
          setTimeout(function () {
            document.getElementById("input-password-register").type =
              "password";
            document.getElementById("input-password-register").value = "";
            document.getElementById("input-password-register").style.color =
              "black";
          }, 2000);
        } 
        
        else {
          handleOpen();
          setTimeout(function () {
            navigate("/login");
          }, 2500);
        }
      })
      .catch((e) => console.log(e));
  }
  return (
    <>
      <span className="circle-register-1"></span>
      <span className="circle-register-2"></span>
      <span className="circle-register-3"></span>
      <span className="circle-register-4"></span>
      {/* <p className="txt-logo-register">EQ</p> */}
      {/* <img src={logo} className="img-logo-orange" /> */}

      <div className="div-register" style={{ color: "#DC2F02" }}>
        <h3>Registracija</h3>
        <form className="form-register" onSubmit={handleRegister}>
          <input
            className="input-name-register"
            type="name"
            required
            name="name"
            onInput={handleInput}
          />
          <p className="txt-register">Ime</p>
          <input
            className="input-korisnicko-ime"
            type="email"
            required
            name="email"
            onInput={handleInput}
          />
          <p className="txt-register">Email</p>
          <div className="row">
            <div className="col-md-6">
             
            </div>
          </div>
          <input
            className="input-password-register"
            type="password"
            required
            onInput={handleInput}
            name="password"
            id="input-password-register"
          />
          <p className="txt-register">Lozinka</p>

          <button className="btn-register" type="submit">
            Registruj se
          </button>
        </form>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default Register;
import './App.css';
import NavBar from "./NavBar";
import React, {useState, useEffect} from "react";
import Cart from './cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from './contactForm';
import Home from './home';
import Login from './Login';
import Register from './Register';
import AdminPage from './AdminPage';
import DogBreedsCombo from './DogBreedsCombo';
import AdminNavBar from './AdminNavBar';
import Mapa from './mapa';
import axios from 'axios';


function App()  {
  const [cartDogs, setCartDogs] = useState([]);
  const [cartNum, setCartNum] = useState(0);
  const [isAdmin, setIsAdmin] = useState(window.sessionStorage.getItem('isAdmin'));
  const [idKorisnika, setIdKorisnika] = useState(window.sessionStorage.getItem('id'));
  const [isLoggedIn, setIsLoggedIn] = useState(window.sessionStorage.getItem('auth_token'));
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      axios.get('pas/getAll/'+idKorisnika)
        
      .then(response => {
        setData(response.data);
        let cartNumSum = 0;
        response.data.forEach(d => cartNumSum += +d.iznos);
        setCartNum(cartNumSum); debugger;
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
      setIsAdmin(window.sessionStorage.getItem('isAdmin'));
    }
  }, [isLoggedIn])

  
  function selektujAdmina(isAdmin) {
    setIsAdmin(isAdmin);
    
    console.log(isAdmin);
  }
  return (
    <BrowserRouter className="App">
      <Routes>
      <Route path="/login" element={<Login  selektujAdmina={selektujAdmina} />} />
      <Route path="/register" element={<Register />} />
      <Route
  path="/"
  element={+isAdmin ? (
    <>
      <AdminNavBar />
      <AdminPage data={data} setData={
        setData
      
      }/>
    </>
  ) : (
    <>
      <NavBar cartNum={cartNum} />
        <Home idKorisnika={idKorisnika} cartDogs={data} setCartDogs={setData} cartNum={cartNum} setCartNum={setCartNum} data={data} setData={setData}/>
    </>
  )}
/>



        <Route path="/cart" element={(isAdmin==1) ? (
    <>
      <AdminNavBar />
      <AdminPage data={data} setData={setData}/>
    </>
  ) : (
    <>
<NavBar cartNum={cartNum} /><Cart cartDogs={data} isAdmin={isAdmin} /><ContactForm /></> 
    
  )}
/> 



        <Route path="/contact" element={(isAdmin==1) ? (
    <>
      <AdminNavBar />
            <AdminPage data={data} setData={setData}/>
    </>
  ) : (
<><NavBar cartNum={cartNum} /> <div id="map-container" style={{display: 'flex', justifyContent: 'center'}}><Mapa /></div> <ContactForm /></>
    
  )}  />
        <Route path="/admin"  element={(isAdmin==1) ? (
    <>
      <AdminNavBar />
      <AdminPage data={data} setData={setData}/>
    </>
  ) : (
    <>
      <NavBar cartNum={cartNum} />
              <Home idKorisnika={idKorisnika}  cartDogs={data} setCartDogs={setData} cartNum={cartNum} setCartNum={setCartNum} data={data} setData={setData} />
    </> )} />
        <Route path="/breeds" element={(isAdmin==1) ? (
    <>
      <AdminNavBar />
      <AdminPage data={data} setData={setData}/>
    </>
  ) : (<><NavBar cartNum={cartNum} /><DogBreedsCombo/></>)} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;

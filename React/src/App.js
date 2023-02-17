import './App.css';
import NavBar from "./NavBar";
import React, {useState} from "react";
import Cart from './cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from './contactForm';
import Home from './home';
import Login from './Login';
import Register from './Register';
import AdminPage from './AdminPage';
import DogBreedsCombo from './DogBreedsCombo';
import AdminNavBar from './AdminNavBar';


function App()  {
  const [cartDogs, setCartDogs] = useState([]);
  const [cartNum, setCartNum] = useState(0);
  const [isAdmin, setIsAdmin] = useState(window.sessionStorage.getItem('isAdmin'));
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
  element={isAdmin ? (
    <>
      <AdminNavBar />
      <AdminPage />
    </>
  ) : (
    <>
      <NavBar cartNum={cartNum} />
      <Home cartDogs={cartDogs} setCartDogs={setCartDogs} cartNum={cartNum} setCartNum={setCartNum} />
    </>
  )}
/>



        <Route path="/cart" element={isAdmin ? (
    <>
      <AdminNavBar />
      <AdminPage />
    </>
  ) : (
    <>
<NavBar cartNum={cartNum} /><Cart cartDogs={cartDogs} isAdmin={isAdmin} /><ContactForm /></> 
    
  )}
/> 



        <Route path="/contact" element={isAdmin ? (
    <>
      <AdminNavBar />
      <AdminPage />
    </>
  ) : (
<><NavBar cartNum={cartNum} /><ContactForm /></>
    
  )}  />
        <Route path="/admin"  element={isAdmin ? (
    <>
      <AdminNavBar />
      <AdminPage />
    </>
  ) : (
    <>
      <NavBar cartNum={cartNum} />
      <Home cartDogs={cartDogs} setCartDogs={setCartDogs} cartNum={cartNum} setCartNum={setCartNum} />
    </> )} />
        <Route path="/breeds" element={<><NavBar cartNum={cartNum} /><DogBreedsCombo/></>} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;

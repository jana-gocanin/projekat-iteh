import './App.css';
import NavBar from "./NavBar";
import React, {useState} from "react";
import Cart from './cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from './contactForm';
import Home from './home';
import Login from './Login';
import Register from './Register';


function App()  {
  const [cartDogs, setCartDogs] = useState([]);
  const [cartNum, setCartNum] = useState(0);
  return (
    <BrowserRouter className="App">
      
     
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={<><NavBar cartNum={cartNum} />
           <Home cartDogs={cartDogs} setCartDogs={setCartDogs} cartNum={cartNum} setCartNum={setCartNum} />
          </>
          }
        />
        <Route path="/cart" element={<><Cart cartDogs={cartDogs} /><ContactForm /></>} />
        <Route path="/contact" element={<ContactForm/>} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;

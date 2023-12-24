import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Project/Projects";
import Contact from "./components/Contact/Contact";
import MainHeader from './mainheader/MainHeader';
import Login from "./auth/Login";
import Register from "./auth/Register";
import Admin from "./components/admin/Admin";

function App() {
  const [isLogged, setIsLogged] = useState(null);
//i'll implement later 
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={<MainHeader/>}
        >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin/>}/>
        </Route>
      </Routes>
     
    </BrowserRouter>
   
  );
    
}

export default App;

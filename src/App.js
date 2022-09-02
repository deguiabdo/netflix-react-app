import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SingIn from "./components/SingIn";
import SingUp from "./components/SingUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/SingIn' element={<SingIn />}></Route>
        <Route path='/SingUp' element={<SingUp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

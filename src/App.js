import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SingIn from "./components/SingIn";
import SingUp from "./components/SingUp";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <nav>
          <Navbar />
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />/
          <Route path='/SingIn' element={<SingIn />} />
          <Route path='/SingUp' element={<SingUp />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

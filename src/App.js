import React from "react";
import Converter from "./Converter"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import  Notes  from  "./components/Notes";
import  Navbar  from  "./components/Navbar";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Premium from "./components/Premium";
import ProtectedRoute from "./components/ProtectedRoute";

function App(props) {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Converter />}/>
      <Route path="/notes"  element={<Notes />}/>
      <Route path="/login"  element={<Login />}/>
      <Route path="/user/:userId"  element={<Profile />}/>
      <Route element={ <ProtectedRoute /> } >
        <Route path="/premium"   element={ <Premium />} />
      </Route>

    </Routes>
    </div>
    /*{<div>
        <Converter />
    </div>}*/
  )
}

export default App
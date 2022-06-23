import React from 'react';
import Login from "./Components/Login";
import Frm from "./Components/Form";
import "./App.css";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
  <>
  <Routes>
            <Route  path="/" element={<Login />} />
            <Route path="/form" element={<Frm />} />
  </Routes>
  </>
  );
}

export default App;


import './App.css';
import Home from './pages/front/Home';
import Articles from './pages/front/Articles'
import Login from './pages/front/ Login';

import React from "react";
import {

  Routes,
  Route,

} from "react-router-dom";
import Personal_Homepage from './pages/front/Personal_Homepage';

function App() {

  
  return (<Routes>
    <Route path ="/home" element={<Home />} />
    <Route path ="/articles" element={<Articles />} />
    <Route path ="/login" element={<Login />} />
    <Route path ="/homepage" element={<Personal_Homepage />} />
    
    </Routes>);
}

export default App;

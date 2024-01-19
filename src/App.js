
import './App.css';
import Home from './pages/front/Home';
import Articles from './pages/front/Articles'

import React from "react";
import {

  Routes,
  Route,

} from "react-router-dom";

function App() {

  
  return (<Routes>
    <Route path ="/home" element={<Home />} />
    <Route path ="/articles" element={<Articles />} />
    
    </Routes>);
}

export default App;

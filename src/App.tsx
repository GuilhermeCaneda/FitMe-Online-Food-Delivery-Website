import React from 'react';

import {Outlet} from "react-router-dom";
import Footer from './components/Footer/Footer';
import "./App.css";

function App() {
  
  return (
    <div>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;

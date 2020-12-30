import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Index from './Home/index1'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes'

function App() {
  return (
    <div className="all">
      <Routes/> 
    </div>
  );
}

export default App;
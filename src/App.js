
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Slide } from '@material-ui/core';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LandingPageHome from './Pages/LandingPage/LandingPage';
import ElectronicPage from './Pages/Electronics/Electronic';
import JeweleryPage from './Pages/Jewelery/Jewelery';
import MensPage from './Pages/Mens/Mens';
import WomensPage from './Pages/Womens/Womens';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div >

      <Router>
      <Navbar /> 
      <Switch>
          <Route exact path="/">
            <LandingPageHome /> 
          </Route>
          <Route path="/mens">
            <MensPage /> 
          </Route>
          <Route path="/womens">
            <WomensPage /> 
          </Route>
          <Route path="/jewelery">
            <JeweleryPage /> 
          </Route>
          <Route path="/electronics">
            <ElectronicPage />
          </Route>
        </Switch>
        <Footer />
        </Router>


       
     
       
       
      
      

    </div>
  );
}

export default App;

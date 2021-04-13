import React from "react";
import "./App.css";
import HouseData from "./components/HouseData/HouseData";
import Login from "./components/Login/Login";

import { Switch, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/housedata' render={()=><HouseData/>}/>
        <Route exact path='/' render={()=><Login />}/> 
      </Switch>
    </div>
  );
}

export default App;

import Navbar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import { Route, Switch, } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import About from "./components/about/About";
import Reset from "./components/reset/Reset";
import { useState } from "react";


function App() {
 
  return (
    
    <div className="App">
     
      <Switch>
        <Route exact path="/">  <Navbar /> <Body /></Route>
        <Route exact path="/signup"> <Navbar /> <Signup /></Route>
        <Route exact path="/login"> <Navbar /> <Login /></Route>
        <Route exact path="/about">
          <Logout/>
        <About/>
        
        
        </Route>
        <Route exact path="/reset"><Reset/></Route>
      </Switch>
    </div>
  );
}

export default App;

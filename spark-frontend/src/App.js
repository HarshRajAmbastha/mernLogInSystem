import Navbar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import { Route, Switch, } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import About from "./components/about/About";
import Reset from "./components/reset/Reset";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"><Body /></Route>
        <Route exact path="/signup"><Signup /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/about"><About />
        
        </Route>
        <Route exact path="/reset"><Reset/></Route>
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Lab from "./components/Lab";
import World from "./components/World";
import Box from "./components/Box";
import Contact from "./components/Contact";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Recipes" component={Recipes} />
        <Route path="/Lab" component={Lab} />
        <Route path="/World" component={World} />
        <Route path="/Box" component={Box} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;

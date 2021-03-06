import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Lab from "./components/Lab";
import World from "./components/World";
import Box from "./components/Box";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  const [blockAge, setBlockAge] = useState(localStorage.getItem("cockAcces"));
  const [accesDenied, setAccesDenied] = useState(false);
  useEffect(() => {
    if (blockAge !== "true") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    localStorage.setItem("cockAcces", blockAge);
  }, [blockAge]);
  const accesDeniedFunc = () => {
    setAccesDenied(true);
    setTimeout(() => {
      setAccesDenied(false);
    }, 10000);
  };

  return (
    <div className="App">
      {blockAge === "true" ? (
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Recipes" component={Recipes} />
            <Route path="/Lab" component={Lab} />
            <Route path="/World" component={World} />
            <Route path="/Box" component={Box} />
            <Route path="/Contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      ) : (
        <div>
          <NavBar short />
          <div className="margin" />
          <div className="bodyInt">
            <div className="wrapperInt">
              <h1>Welcome</h1>
              <h2>Are you of legal drinking age?</h2>
              <div className="buttonWrapper">
                <button onClick={() => setBlockAge("true")} type="button">
                  Yes
                </button>
                <button onClick={accesDeniedFunc} type="button">
                  No
                </button>
              </div>
              {accesDenied && (
                <div className="accesDenied">
                  <img
                    src="https://img.icons8.com/fluent/48/000000/cancel-2.png"
                    alt="denied"
                  />
                  ACCES DENIED FOR THIS WEB SITE
                  <img
                    src="https://img.icons8.com/fluent/48/000000/cancel-2.png"
                    alt="denied"
                  />
                </div>
              )}
              <img
                className="imgInt"
                src="https://i.ibb.co/zbPyQZW/logo-experimentalcocktail.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

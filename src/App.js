import React from 'react';
import {Switch, Route} from "react-router-dom"

import Navbar from "./components/navbar/Navbar"
import Home from "./components/screens/Home"
import Projects from "./components/screens/Projects"
import ContactMe from "./components/screens/ContactMe"

function App(props) {
  return (
    <div className="App blue-grey lighten-2">
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact_me">
            <ContactMe />
          </Route>
        </Switch>
      </div>
      </div>
  );
}

export default App;

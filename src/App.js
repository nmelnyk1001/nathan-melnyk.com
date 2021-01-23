import React from 'react';
import {Switch, Route} from "react-router-dom"

import Navbar from "./components/navbar/Navbar"
import Home from "./components/screens/Home"
import Projects from "./components/screens/Projects"
import ContactMe from "./components/screens/ContactMe"

function App(props) {
  return (
    <div className="App" style={{ background:"#E1CA96"}}>
      <div className="container" style={{width:"100%", maxWidth:"100%"}}>
        <Navbar style={{margin:0}}/>
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

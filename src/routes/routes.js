import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Kids from "../pages/kids";
import Help from "../pages/help";
import Campaigns from "../pages/campaigns";
import Gallery from "../pages/gallery";
import Contact from "../pages/contact"

import TopBar from "../components/topbar.jsx"

import "../App.css";


export default function App(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div>
          <TopBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/kids">
            <Kids />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/campaigns">
            <Campaigns />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

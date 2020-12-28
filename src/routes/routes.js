import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Kids from "../pages/kids";
import Help from "../pages/help";
import Campaigns from "../pages/campaigns";
import CampSchool from "../pages/campSchool";
import CampCovid from "../pages/campCovid";
import Gallery from "../pages/gallery";
import Contact from "../pages/contact";
import Donate from "../pages/donate";
import Documents from "../pages/documents";


import TopBar from "../components/topbar.jsx"

import "../App.css";


export default function App(props) {
  return (
    <Router>
      <div>
          <TopBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/SobreSonep">
            <About />
          </Route>
          <Route path="/LosNiños">
            <Kids />
          </Route>
          <Route path="/ComoAyudar">
            <Help />
          </Route>
          <Route path="/Campañas">
            <Campaigns />
          </Route>
          <Route path="/CampañaEscolar">
            <CampSchool />
          </Route>
          <Route path="/CampañaCovid">
            <CampCovid />
          </Route>
          <Route path="/Galeria">
            <Gallery />
          </Route>
          <Route path="/Contacto">
            <Contact />
          </Route>
          <Route path="/Documentos">
            <Documents />
          </Route>
          <Route path="/Donar">
            <Donate />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

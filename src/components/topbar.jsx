import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  ButtonToggle,
} from "reactstrap";

import "./stylesComponents.css";
import Instagram from "../assets/instagram_azul.png";
import Facebook from "../assets/facebook_azul.png";
import LogoAzul from "../assets/logo.png";

const TopBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light color="light" expand="md" className="nav-bg">
        <NavbarBrand href="/">
          <img className="logo-azul" src={LogoAzul} alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
                <NavLink href="/kids">Conoce a los Niños</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">¿Qué es Sonep?</NavLink>
              </NavItem>{" "}
              <NavItem>
                <NavLink href="/help">¿Cómo Ayudar?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/campaigns">Campañas</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/gallery">Galeria</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contacto</NavLink>
              </NavItem>
          </Nav>

          <NavbarText>
          <img href="" id="intagram" src={Instagram} alt="intagram" />
          <img href="" id="facebook" src={Facebook} alt="intagram" />
          <ButtonToggle size="lg"color="danger">Donar</ButtonToggle>{" "}
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopBar;

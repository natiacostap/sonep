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
import LogoAzul from "../assets/LOGO-SONEP.png";

const TopBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* <Navbar  expand="md" className="top-navbar">
        <div href="/"> 
        <NavbarBrand href="/">
          <img className="logo-azul" src={LogoAzul} alt="logo" />
        </NavbarBrand>
        <NavbarText className="brand-title">Sonrisas de Nepal</NavbarText>
        </div>
        <NavbarText>
          <img href="" id="intagram" src={Instagram} alt="intagram" />
          <img href="" id="facebook" src={Facebook} alt="intagram" />
          <ButtonToggle color="danger">Donar</ButtonToggle>{" "}
        </NavbarText>
        </Navbar>

        <Navbar className="bottom-navbar" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav  navbar>
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
                <NavLink href="/gallery">Galeria</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contacto</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar> */}

      <Navbar light expand="md" className="nav-bg">
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
                <NavLink href="/gallery">Galeria</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contacto</NavLink>
              </NavItem>
          </Nav>

          <NavbarText>
          <img href="" id="intagram" src={Instagram} alt="intagram" />
          <img href="" id="facebook" src={Facebook} alt="intagram" />
          <ButtonToggle color="danger">Donar</ButtonToggle>{" "}
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopBar;

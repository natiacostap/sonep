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
import Instagram from "../assets/icons/icon-instagram.png";
// import Facebook from "../assets/icons/icon-facebook.png";
import LogoAzul from "../assets/logo_azul.png";

const TopBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light color="light" expand="lg" className="nav-bg">
        <div className="align-right">
          <NavbarBrand href="/">
            <img className="logo-azul" src={LogoAzul} alt="logo" />
          </NavbarBrand>
          <NavbarToggler className="align-left" onClick={toggle} />
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/LosNiños">Conoce a los Niños</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/SobreSonep">¿Qué es Sonep?</NavLink>
            </NavItem>{" "}
            <NavItem>
              <NavLink href="/ComoAyudar">¿Cómo Ayudar?</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Campañas">Campañas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Galeria">Galeria</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contacto">Contacto</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <a href="https://www.instagram.com/sonrisas_de_nepal">
              <img id="intagram" src={Instagram} alt="intagram" />
            </a>
            {/* <a href="https://www.instagram.com/sonrisas_de_nepal">
              <img href="" id="facebook" src={Facebook} alt="facebook" />
            </a> */}
          </NavbarText>
        </Collapse>
        <ButtonToggle
          className="text-white"
          href="/Donar"
          size="lg"
          color="danger"
        >
          Donar
        </ButtonToggle>{" "}
      </Navbar>
    </div>
  );
};

export default TopBar;

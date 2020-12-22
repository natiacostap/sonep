import React from "react";
import BasicForm from "../components/form.jsx";
import { Container, Row, Col } from "reactstrap";
import hours from "../assets/24-hours-white.png";

function Contact() {
  return (
    <div className="center-container">
      <h2 class="titles-pages">¡Contáctanos!</h2>
        <BasicForm />
    </div>
  );
}

export default Contact;

import React from "react";
import { Container, Row, Col } from "reactstrap";
import Index from "../components/breadCrumbs";

function Documents() {
  return (
    <div className="container-pages">
      <Index
        name="Campañas"
        link="/Campañas"
        name2="Documentos"
        link2="/Documentos"
      />

      <Container></Container>
    </div>
  );
}

export default Documents;

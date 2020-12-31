import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./stylesPages.css";
import Index from "../components/breadCrumbs";
import Doc from "../assets/icons/icon-doc.png";

function Documents() {
  return (
    <div className="container-pages">
      <Index
        name="Campañas"
        link="/Campañas"
        name2="Documentos"
        link2="/Documentos"
      />

   <h2 className="titles-pages green-text margin-container">
          Documentos Campaña Ayuda Pandemia 2020
        </h2>
      <Container>
        <Row>
          <Col xs={"12"} md={{ size: "3" }}>
            <a href="https://drive.google.com/file/d/1nVqfqBUugWAQ4RPI9h7HkOuCvdbxwIti/view?usp=sharing">
              <div className="bg-green center-container border-radius margin-container">
                <img className="docs-icon" src={Doc} alt="icon_doc" />
                <p className="bold-text text-white">Comprobante Oct. 1</p>
              </div>
            </a>
          </Col>
          <Col xs={"12"} md={{ size: "3" }}>
            <a href="https://drive.google.com/file/d/1t74HnIhdDZapOEBad_sQDISiZf2FBtZ4/view?usp=sharing">
              <div className="bg-green center-container border-radius margin-container">
                <img className="docs-icon" src={Doc} alt="icon_doc" />
                <p className="bold-text text-white">Comprobante Oct. 2</p>
              </div>
            </a>
          </Col>
          <Col xs={"12"} md={{ size: "3" }}>
            <a href="https://drive.google.com/file/d/1IiP6tkWSmMIyfiHWudObaErrqE7-02Aw/view?usp=sharing">
              <div className="bg-green center-container border-radius margin-container">
                <img className="docs-icon" src={Doc} alt="icon_doc" />
                <p className="bold-text text-white">Comprobante Oct. 3</p>
              </div>
            </a>
          </Col>
          <Col xs={"12"} md={{ size: "3" }}>
            <a href="https://drive.google.com/file/d/1D-Enb1e4G1mt2asRhXIvLoH9gev_TzSs/view?usp=sharing">
              <div className="bg-green center-container border-radius margin-container">
                <img className="docs-icon" src={Doc} alt="icon_doc" />
                <p className="bold-text text-white">Comprobante Oct. 4</p>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Documents;

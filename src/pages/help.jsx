import React from "react";

import CardInfo from "../components/cardInfo";
import Index from "../components/breadCrumbs";
import { Container, Row, Col, Button } from "reactstrap";
import Sonep from "../assets/logo.png";
import Kids from "../assets/icon-kids.png";
import Goal from "../assets/icon-goal.png";
import Give from "../assets/icon-give.png";

function Help() {
  return (
    <div className="container-pages">
      <Index
        name="Como ayudar"
        link="/ComoAyudar"
        showIndexItem="show-item-index"
      />
      <Container>
        <Row>
          <Col xs={"12"} md={"3"}>
            <CardInfo
              color="primary"
              title="SONEP"
              photo={Sonep}
              btnColor=""
              text="Campañas de ayuda para niños de Nepal"
            />
          </Col>
          <Col xs={"12"} md={"3"}>
            <CardInfo
              color="success"
              title="VISION"
              photo={Kids}
              btnColor=""
              text="Apoyar a niños de escasos recursos de Nepal financiando su educación"
            />
          </Col>
          <Col xs={"12"} md={"3"}>
            <CardInfo
              color="warning"
              title="META"
              photo={Goal}
              btnColor=""
              text="Cubrir costos completos de educación, matrícula, colegiatura, uniformes, materiales y alimentación"
            />
          </Col>
          <Col xs={"12"} md={"3"}>
            <CardInfo
              color="danger"
              title="¿CÓMO?"
              photo={Give}
              btnColor=""
              text="A través de donaciones anuales y mensuales"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={"12"} md={{ size: 6, offset: 3 }}>
            <div className="center-container text-container">
              <Button href="/Donar" block size="lg" color="danger">
                {" "}
                Donar{" "}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Help;

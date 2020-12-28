import React from "react";
import CardInfo from "../components/cardInfo.jsx";
import { Container, Row, Col } from "reactstrap";
import Banner from "../components/jumbotron.jsx";
import Kids from "../assets/icon-kids.png";
import Camp from "../assets/icon-campaign.png";
import Donate from "../assets/icon-donate.png";
import Contact from "../pages/contact";

import "./stylesPages.css";

function Home() {
  return (
    <div>
      <Banner />
      <Container>
        <div className="card-margin"> 
        <Row>
          <Col xs={"12"} md={"4"}>
            <CardInfo
              color="info"
              title="CONOCE A LOS NIÑOS"
              photo={Kids}
              btnTitle="Conocer a los niños"
              btnColor="secondary"
              linkTo="/LosNiños"
            />
          </Col>
          <Col xs={"12"} md={"4"}>
            <CardInfo
              color="warning"
              title="SOBRE NOSOTROS SONEP"
              photo={Donate}
              btnTitle="Saber más"
              btnColor="secondary"
              linkTo="/SobreSonep"
            />
          </Col>
          <Col xs={"12"} md={"4"}>
            <CardInfo
              color="danger"
              title="NUESTRAS CAMPAÑAS"
              photo={Camp}
              btnTitle="Saber más"
              btnColor="secondary"
              linkTo="/Campañas"
            />
          </Col>
        </Row>
        </div>
      </Container>
      <Contact
      showIndex="hide-index" /> 
    </div>
  );
}

export default Home;

import React from "react";
import CardInfo from "../components/card.jsx";
import { Container, Row, Col } from "reactstrap";
import Banner from "../components/jumbotron.jsx";
import Kids from "../assets/kids.png";

function Home() {
  return (
    <div className="container-pages">
      <Container>
        <Row>
          <Banner />
        </Row>
        <Row className="cards-row">
          <CardInfo />
          <CardInfo />
          <CardInfo />
        </Row>
      </Container>
    </div>
  );
}

export default Home;

import React from "react";
import Index from "../components/breadCrumbs";
import "./stylesPages.css";
import StackGrid from "react-stack-grid";
import { Container } from "reactstrap";
import Images from "../utils/images";

function Gallery() {

  return (
    <div className="container-pages">
      <Index name="Galería" link="/Galeria" showIndexItem="show-item-index" />
      <Container>
        <StackGrid columnWidth={250} monitorImagesLoaded={true}>
          {Images.map(el => (
            <img
              key={el.id}
              src={el.link}
              style={{ width: "100%", display: "block" }}
              alt=""
            />
          ))}
        </StackGrid>
      </Container>
    </div>
  );
}

export default Gallery;

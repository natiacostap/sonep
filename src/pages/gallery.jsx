import React from "react";
import Index from "../components/breadCrumbs";
import "./stylesPages.css";

function Gallery() {
  return (
    <div className="container-pages">
      <Index name="Galería" link="/Galeria" showIndexItem="show-item-index" />
      {/* <h2 className="titles-pages">Galeria</h2> */}
    </div>
  );
}

export default Gallery;

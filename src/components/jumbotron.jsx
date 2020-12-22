import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Children from "../assets/children.png"

const Banner = (props) => {
  return (
    <div >
      <Jumbotron className="jumbotron-bg">
        <h1 className="display-3">Regala Sonrisas</h1>
        <p className="lead">Te invitamos a unirte a esta noble campaña que busca apoyar a 7 niños vulnerables y de escasos recursos de Nepal para que logren completar su educación.</p>
        {/* <hr className="my-2" /> */}
        {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
        {/* <img className="img-kids" src={Children} slt="niños"/> */}
        <p className="lead">
          <Button size="lg" color="danger">¿Cómo Ayudar?</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Banner;
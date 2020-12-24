import React from 'react';
import { Media } from 'reactstrap';
import "./stylesComponents.css";

const CardKids = (props) => {
  return (
    <Media className="card-kids bg-red border-radius">
      <Media left href="#">
        <Media  object data-src={props.photo} alt="photo" />
      </Media>
      <Media body>
        <Media heading>
          {props.title}
        </Media>
        {props.content}
      </Media>
    </Media>
  );
};

export default CardKids;


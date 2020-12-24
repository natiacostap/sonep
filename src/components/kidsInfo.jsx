import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle } from 'reactstrap';
import "./stylesComponents.css";

const KidsInfo = (props) => {
  return (
      <Card className={props.className}>
        <CardImg className="kids-img" top width="100%" src={props.photo} alt="Card image cap" />
        <CardBody>
          <CardTitle className="text-white bold-text" tag="h3">{props.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-white bold-text text-center">{props.subtitle}</CardSubtitle>
          <CardText className="text-white">{props.text}</CardText>
        </CardBody>
      </Card>
  );
};

export default KidsInfo;
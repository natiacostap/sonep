import React from 'react';
import "./stylesComponents.css";
import { Card, CardTitle, CardText } from 'reactstrap';

const SmallCard = (props) => {
  return (
    <div>
      <Card body outline color="success" className="text-center blue-text" >
        <CardTitle tag="h6">{props.title}</CardTitle>
        <CardText tag="h4" className="text-bold">{props.subtitle}</CardText>
      </Card>
  
    </div>
  );
};

export default SmallCard;
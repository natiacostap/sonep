import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./stylesComponents.css";

const BasicForm = () => {
  return (
    <Form className="basicForm">
      <FormGroup>
      <FormGroup>
        <Label for="examplePassword">Nombre</Label>
        <Input  type="text" name="name" id="exampleName" placeholder="Ej: María Navarro" />
      </FormGroup>
        <Label for="exampleEmail">Correo electrónico</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Ej: marianavarro@gmail.com" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Asunto</Label>
        <Input type="text" name="subject" id="exampleSubject" placeholder="Ej: Mi asunto" />
      </FormGroup>

      <FormGroup>
        <Label className="label-forms" for="exampleText">Mensaje</Label>
        <Input type="textarea" name="text" id="exampleText" placeholder="Escribe tu mensaje" />
      </FormGroup>
      
      <Button size="lg"  block color="info" >Enviar</Button>
    </Form>
  );
}

export default BasicForm;

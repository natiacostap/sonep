import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const BasicForm = (props) => {
  return (
    <Form className="basicForm">
      <FormGroup>
      <FormGroup>
        <Label for="examplePassword">Nombre</Label>
        <Input type="text" name="name" id="exampleName" placeholder="Tu nombre" />
      </FormGroup>
        <Label for="exampleEmail">Correo electrónico</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Correo electrónico" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Asunto</Label>
        <Input type="text" name="subject" id="exampleSubject" placeholder="Asunto" />
      </FormGroup>

      <FormGroup>
        <Label className="label-forms" for="exampleText">Mensaje</Label>
        <Input type="textarea" name="text" id="exampleText" placeholder="Escribe tu mensaje" />
      </FormGroup>
      
      <Button >Enviar</Button>
    </Form>
  );
}

export default BasicForm;

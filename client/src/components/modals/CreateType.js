import React from "react";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";

const CreateType = ({show, onHide}) => {

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Добавить Тип</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Control placeholder={"Введите название типа..."} />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success">Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;

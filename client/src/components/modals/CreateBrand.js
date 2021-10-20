import React from "react";
import { Modal, Button, Form } from "react-bootstrap";


const CreateBrand = ({show, onHide}) => {
  
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Добавить Бренд</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Control placeholder={"Введите название бренда..."} />
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success">Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;

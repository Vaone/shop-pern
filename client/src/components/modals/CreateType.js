import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { createType } from "../../http/deviceAPI";

const CreateType = ({ show, onHide }) => {
  const [typeName, setTypeName] = useState('');

  function onHideClick() {
    onHide();
    setTypeName("");
  }

  const addType = () => {
    createType({ name: typeName }).then(() => {
      setTypeName("");
      onHide();
    });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Добавить Тип</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Control
          placeholder={"Введите название типа..."}
          value={typeName}
          onChange={(e) => setTypeName(e.target.value)}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHideClick}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addType}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;

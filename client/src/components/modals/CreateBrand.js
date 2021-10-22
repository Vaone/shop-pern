import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { createBrand } from "../../http/deviceAPI";


const CreateBrand = ({show, onHide}) => {

  const [brandName, setBrandName] = useState('');

  function onHideClick() {
    onHide();
    setBrandName("");
  }

  function addBrand() {
    createBrand({name: brandName}).then(() => {
      setBrandName("");
      onHide();
    })
  }
  
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
          <Form.Control 
            placeholder={"Введите название бренда..."} 
            value={brandName} 
            onChange={(e)=>setBrandName(e.target.value)}
          />
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHideClick}>Закрыть</Button>
        <Button variant="outline-success" onClick={addBrand}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;

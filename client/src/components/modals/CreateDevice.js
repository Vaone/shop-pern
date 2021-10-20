import React, {useState} from "react";
import { Modal, Button, Form, Dropdown, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const CreateDevice = ({ show, onHide }) => {
  const types = useSelector((state) => state.device.types);
  const brands = useSelector((state) => state.device.brands);

  const [info, setInfo] = useState([]);
  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter(i=>i.number !== number))
  }

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Добавить Товар</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Выберите тип
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Выберите бренд
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            placeholder="Введите название товара"
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите стоимость товара"
            type="number"
          />
          <Form.Control className="mt-3" type="file" />
          <hr />
          <Button variant={"outline-dark"} onClick={addInfo}>
            Добавить новое свойство
          </Button>
          {info.map((i) => (
            <Row key={i.number} className="mt-3">
              <Col md={4}>
                <Form.Control placeholder="Введите название свойства" />
              </Col>
              <Col md={4}>
               <Form.Control placeholder="Введите описание свойства" />
              </Col>
              <Col md={4}>
                <Button variant={"outline-danger"} onClick={()=>removeInfo(i.number)}>Удалить</Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success">Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;

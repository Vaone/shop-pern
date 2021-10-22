import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Dropdown, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands, fetchTypes } from "../../http/deviceAPI";

const CreateDevice = ({ show, onHide }) => {
  const types = useSelector((state) => state.type.types);
  const brands = useSelector((state) => state.brand.brands);
  const [info, setInfo] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBrands(dispatch);
    fetchTypes(dispatch);
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const selectFile = e => {
    setFile(e.target.file[0])
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
              {type.name || "Выберите тип"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {types.map((type) => (
                <Dropdown.Item 
                  key={type.id}
                  onClick={()=>setType((type))}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {brand.name || 'Выберите бренд'} 
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {brands.map((brand) => (
                <Dropdown.Item 
                  key={brand.id}
                  onClick={()=>setBrand((brand))}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            placeholder="Введите название товара"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите стоимость товара"
            type="number"
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
          />
          <Form.Control className="mt-3" type="file" 
            onChange={(e)=> selectFile(e)}
          />
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
                <Button
                  variant={"outline-danger"}
                  onClick={() => removeInfo(i.number)}
                >
                  Удалить
                </Button>
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

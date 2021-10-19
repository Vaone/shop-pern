import React from "react";
import { Card, Col, Container, Image, Row, Button } from "react-bootstrap";
import star from "../assets/images/star.svg";

const DevicePage = () => {
  const device = {
    id: 1,
    name: "Xiaomi Mi Mix 4",
    price: 30000,
    rating: 5,
    img: `www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`,
  };

  const description = [
    {id:1, title: 'Оперативная память', description: '5 гб'},
    {id:2, title: 'Камера', description: '12 мп'},
    {id:3, title: 'Процессор', description: 'Пентиум 3'},
    {id:4, title: 'Кол-во ядер', description: '2'},
    {id:5, title: 'Аккумулятор', description: '4000'}
  ];

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4} className="d-flex justify-content-center">
          <Image width={300} height={300} src={"http://" + device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 style={{ textAlign: "center" }}>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${star}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
              }}
            >
              <h4 style={{ transform: "translateX(-5px)" }}>{device.rating}</h4>
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card 
            className="d-flex flex-column align-items-center justify-content-center"
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
          >
            <h3>{device.price} $</h3>
            <Button variant={"outline-dark"}> Добавить в корзину </Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {description.map((info, index) => 
          <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
            {info.title}: {info.description}
          </Row>  
        )}
      </Row>
    </Container>
  );
};

export default DevicePage;

import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row, Button } from "react-bootstrap";
import star from "../assets/images/star.svg";
import {useParams} from 'react-router-dom';
import { fetchOneDevice } from "../http/deviceAPI";

const DevicePage = () => {
  const [device, setDevice] = useState({info: []});
  const {id} = useParams();

  useEffect(()=>{
    fetchOneDevice(id).then(data=> setDevice(data));
  },[])

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4} className="d-flex justify-content-center">
          <Image width={200} height={400} src={process.env.REACT_APP_API_URL + device.img} />
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
        {device.info.map((infoItem, index) => 
          <Row key={infoItem.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
            {infoItem.title} : {infoItem.description}
          </Row>  
        )}
      </Row>
    </Container>
  );
};

export default DevicePage;

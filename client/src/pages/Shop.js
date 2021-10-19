import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar/TypeBar";
import BrandBar from "../components/BrandBar/BrandBar";
import DeviceList from "../components/DeviceList/DeviceList";

const Shop = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;

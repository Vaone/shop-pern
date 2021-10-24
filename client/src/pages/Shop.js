import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar/TypeBar";
import BrandBar from "../components/BrandBar/BrandBar";
import DeviceList from "../components/DeviceList/DeviceList";
import { fetchBrands } from "../http/deviceAPI";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBrands(dispatch)
  }, []);

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

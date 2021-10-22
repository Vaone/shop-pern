import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedBrand } from "../../reducers/brandReducer";
import "./brandBar.css";

const BrandBar = () => {
  const brands = useSelector((state) => state.brand.brands);
  const selectedBrandId = useSelector((state) => state.brand.selectedBrand.id);
  const dispatch = useDispatch();

  return (
    <Row className="d-flex align-items-start">
      <Col className="d-flex">
        {brands.map((brand) => (
          <Card
            style={{ cursor: "pointer", width: "auto" }}
            className="ms-2 p-2"
            key={brand.id}
            onClick={() => {
              dispatch(setSelectedBrand(brand));
            }}
            border={brand.id === selectedBrandId ? "danger" : "grey"}
          >
            {brand.name}
          </Card>
        ))}
      </Col>
    </Row>
  );
};

export default BrandBar;

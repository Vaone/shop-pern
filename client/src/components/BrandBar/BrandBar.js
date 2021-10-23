import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedBrand } from "../../reducers/brandReducer";
import { setCurrentPage } from "../../reducers/deviceReducer";
import "./brandBar.css";

const BrandBar = () => {
  const brands = useSelector((state) => state.brand.brands);
  const selectedBrandId = useSelector((state) => state.brand.selectedBrand.id);
  const dispatch = useDispatch();

  const brandHandler = (brand) => {
    dispatch(setSelectedBrand(brand));
    dispatch(setCurrentPage(1));
  };

  function clearBrand() {
    dispatch(setSelectedBrand({}));
  }

  return (
    <Row className="d-flex align-items-start">
      <Col className="d-flex">
        {brands.map((brand) => (
          <Card
            style={{ cursor: "pointer", width: "auto" }}
            className="ms-2 p-2"
            key={brand.id}
            onClick={() => {
              brandHandler(brand);
            }}
            border={brand.id === selectedBrandId ? "danger" : "grey"}
          >
            {brand.name}
          </Card>
        ))}
      </Col>
      <Button
        onClick={() => clearBrand()}
        variant="outline-info"
        className="mt-3 d-flex justify-self-start"
        style={{ width: "auto" }}
        border={"grey"}
      >
        Сбросить фильтр брендов
      </Button>
    </Row>
  );
};

export default BrandBar;

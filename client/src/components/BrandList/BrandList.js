import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteBrand } from "../../http/deviceAPI";

const BrandList = () => {

  const brands = useSelector(state => state.brand.brands);
  const dispatch = useDispatch();

  function deleteHandler(id) {
    dispatch(deleteBrand(id))
  }

  return (
    <ListGroup className="d-flex mt-3">
      Список Брендов:
      {brands.map(brand => (
        <ListGroup.Item
          key={brand.id}
        >
          {brand.name}
          <div className="d-flex justify-content-end">
           <Button className='p-2' variant={"outline-danger"} onClick={()=>deleteHandler(brand.id)}>Удалить</Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default BrandList;

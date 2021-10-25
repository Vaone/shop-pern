import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteType } from "../../http/deviceAPI";

const TypeList = () => {
  
  const types = useSelector(state => state.type.types);
  const dispatch = useDispatch();

  function deleteHandler(id) {
    dispatch(deleteType(id))
  }

  return (
    <ListGroup className="d-flex mt-3">
      Список Типов:
      {types.map(type => (
        <ListGroup.Item
          key={type.id}
        >
          {type.name}
          <div className="d-flex justify-content-end">
           <Button className='p-2' variant={"outline-danger"} onClick={()=>deleteHandler(type.id)}>Удалить</Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TypeList;

import React from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedType } from "../../reducers/deviceReducer";
import './typeBar.css';

const TypeBar = () => {
  const types = useSelector((state) => state.device.types);
  const selectedTypeId = useSelector((state) => state.device.selectedType.id);
  const dispatch = useDispatch();

  return (
    <ListGroup>
      {types.map((type) => (
        <ListGroup.Item
          key={type.id}
          onClick={()=>{dispatch(setSelectedType(type))}}
          active={type.id === selectedTypeId}
        >
          {type.name}
          </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TypeBar;

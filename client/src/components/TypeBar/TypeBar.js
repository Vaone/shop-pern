import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchTypes } from "../../http/deviceAPI";
import { setSelectedType } from "../../reducers/typeReducer";
import './typeBar.css';

const TypeBar = () => {
  const types = useSelector((state) => state.type.types);
  const selectedTypeId = useSelector((state) => state.type.selectedType.id);
  const dispatch = useDispatch();

  useEffect(()=>{
    fetchTypes(dispatch);
  }, [])

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

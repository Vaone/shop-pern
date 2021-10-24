import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchTypes } from "../../http/deviceAPI";
import { setCurrentPage } from "../../reducers/deviceReducer";
import { setSelectedType } from "../../reducers/typeReducer";
import "./typeBar.css";

const TypeBar = () => {
  const types = useSelector((state) => state.type.types);
  const selectedTypeId = useSelector((state) => state.type.selectedType.id);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTypes(dispatch);
  }, []);

  const typeHandler = (type) => {
    dispatch(setSelectedType(type));
    dispatch(setCurrentPage(1));
  };

  function clearTypes() {
    dispatch(setSelectedType({}));
  }

  return (
    <ListGroup>
      {types.map((type) => (
        <ListGroup.Item
          key={type.id}
          onClick={() => {
            typeHandler(type);
          }}
          active={type.id === selectedTypeId}
        >
          {type.name}
        </ListGroup.Item>
      ))}

      <ListGroup.Item onClick={clearTypes} style={{cursor: 'pointer'}}>Сбросить все</ListGroup.Item>
    </ListGroup>
  );
};

export default TypeBar;

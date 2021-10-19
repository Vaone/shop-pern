import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { useSelector } from "react-redux";
import {logout, setUser} from '../reducers/userReducer';
import { useDispatch } from "react-redux";

const NavBar = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  return (
    <Navbar bg="danger" variant="dark">
      <Container>
        <NavLink to={SHOP_ROUTE} style={{ color: "white" }}>
          МагазIn
        </NavLink>
        {isAuth ? (
          <Nav className="ms-auto">
            <Button className="" variant={"outline-light"}>
              Админ панель
            </Button>
            <Button className="ms-2" variant={"outline-light"} onClick={()=>{dispatch(logout())}}>
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ms-auto">
            <Button  variant={"outline-light"} onClick={()=>{dispatch(setUser({}))}}>
              Войти
            </Button>
            <Button className="ms-2" variant={"outline-light"}>
              Регистрация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
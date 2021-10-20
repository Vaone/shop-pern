import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../../utils/consts";
import { useSelector } from "react-redux";
import { logout } from "../../reducers/userReducer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const NavBar = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const history = useHistory();

  function logoutClick() {
    dispatch(logout());
    localStorage.removeItem('token')
  }

  return (
    <Navbar bg="danger" variant="dark">
      <Container>
        <NavLink to={SHOP_ROUTE} style={{ color: "white" }}>
          МагазIN
        </NavLink>
        {isAuth ? (
          <Nav className="ms-auto">
            <Button
              className=""
              variant={"outline-light"}
              onClick={() => {
                history.push(ADMIN_ROUTE);
              }}
            >
              Админ панель
            </Button>
            <Button
              className="ms-2"
              variant={"outline-light"}
              onClick={logoutClick}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ms-auto">
            <Button
              variant={"outline-light"}
              onClick={() => {
                history.push(LOGIN_ROUTE);
              }}
            >
              Войти
            </Button>
            <Button
              className="ms-2"
              variant={"outline-light"}
              onClick={() => {
                history.push(REGISTRATION_ROUTE);
              }}
            >
              Регистрация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;

import React from "react";
import { Card, Container, Form, Button, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center mt-2"
      style={{ height: "calc(100vh - 54px)" }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto"> {isLogin ? "Авторизация" : "Регистрация"} </h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Введите ваш email..." />
          <Form.Control className="mt-3" placeholder="Введите пароль..." />
          <Row className="d-flex justify-content-between mt-3 ps-2 pe-2">
            {isLogin ? (
              <div style={{ width: "auto" }} className="ps-0 pe-0">
                Нет аккаунта?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
              </div>
            ) : (
              <div style={{ width: "auto" }} className="ps-0 pe-0">
                Есть аккаунт?{" "}
                <NavLink to={LOGIN_ROUTE}>Войти в аккаунт</NavLink>
              </div>
            )}
            {isLogin ? (
              <Button style={{ width: "auto" }} variant={"outline-success"}>
                Войти
              </Button>
            ) : (
              <Button style={{ width: "auto" }} variant={"outline-success"}>
                Зарегистрироваться
              </Button>
            )}
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;

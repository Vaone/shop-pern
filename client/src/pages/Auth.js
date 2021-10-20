import React, { useEffect, useState } from "react";
import { Card, Container, Form, Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { login, resgistration } from "../http/userAPI";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { setUser } from "../reducers/userReducer";

const Auth = () => {
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();


  const clickedAuthForm = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await resgistration(email, password);
        alert('Пользователь зарегистрирован')
      }
      dispatch(setUser(data));
      data && history.push(SHOP_ROUTE);

    } catch(e) {
      alert(e.response.data.message)
    }
  };

  useEffect(() => {
    // localStorage.removeItem('token')
    // enterkey on keyboard
    const onKeypress = (e) => {
      if (e.key === "Enter") {
        document.querySelector("#enterBtn").click();
      }
    };
    document.addEventListener("keypress", onKeypress);
    return () => {
      document.removeEventListener("keypress", onKeypress);
    };
  }, []);

  return (
    <Container
      className="d-flex justify-content-center align-items-center mt-2"
      style={{ height: "calc(100vh - 54px)" }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto"> {isLogin ? "Авторизация" : "Регистрация"} </h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
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
              <Button
                style={{ width: "auto" }}
                variant={"outline-success"}
                onClick={clickedAuthForm}
                id="enterBtn"
              >
                Войти
              </Button>
            ) : (
              <Button
                style={{ width: "auto" }}
                variant={"outline-success"}
                onClick={clickedAuthForm}
                id="enterBtn"
              >
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

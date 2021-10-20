import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AppRouter from "./AppRouter";
import NavBar from "./NavBar/NavBar";
import { check } from "../http/userAPI";
import { setUser } from "../reducers/userReducer";
import { Container, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    check()
      .then((data) => {
        dispatch(setUser(data));
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation={"grow"} />
      </Container>
    );
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

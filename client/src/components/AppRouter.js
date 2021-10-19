import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {authRoutes, publicRoutes} from '../utils/routes';
import Error from '../pages/Error';
import { useSelector } from "react-redux";

const AppRouter = () => {
  const isAuth = useSelector((state) => state.user.isAuth);

  return (
    <Switch>
      {!isAuth && publicRoutes.map(({path, component}) => <Route key={path} path={path} component={component} exact/>)}
      {isAuth && authRoutes.map(({path, component}) => <Route key={path} path={path} component={component} exact/>)}
      <Redirect to='/error' component={Error} exact/>
    </Switch>
  );
};

export default AppRouter;

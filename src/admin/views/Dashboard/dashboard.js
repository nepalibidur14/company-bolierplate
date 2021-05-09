import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { Card } from "reactstrap";
import metaRoutes from "../../metaRoutes";
import routes from "../../routes";
import Product from "../Product/Product";

const Dashboard = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          path={route.path}
          exact={route.exact}
          name={route.name}
          component={route.component}
        />
      ))}
      <Redirect from="/admin" to="/admin/login" />
    </Switch>
  );
};

export default Dashboard;

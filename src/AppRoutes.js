import metaMETA from "./admin/metaRoutes";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminLogin from "../src/admin/pages/login";
import Layout from "../src/views/Layout/Layout/layout";
import Dashboard from "./admin/views/Dashboard/dashboard";

import React from "react";

const AppRoutes = () => {
  return (
    <Switch>
      <Route
        path="/public"
        name="Public"
        render={(props) => <Layout {...props} />}
      />
      <Route
        path={metaMETA.adminLogin}
        render={(props) => <AdminLogin {...props} />}
      />
      <Route
        path="/admin"
        name="Admin"
        render={(props) => <Dashboard {...props} />}
      />
      <Redirect from="/" to="/public" />
      <Redirect from="*/*" to="/" />
    </Switch>
  );
};

export default AppRoutes;

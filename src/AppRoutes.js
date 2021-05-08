import metaMETA from "./admin/metaRoutes";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminLogin from "../src/admin/pages/login";

import React from "react";

const AppRoutes = () => {
  return (
    <Switch>
      <Route
        path={metaMETA.adminLogin}
        render={(props) => <AdminLogin {...props} />}
      />
    </Switch>
  );
};

export default AppRoutes;

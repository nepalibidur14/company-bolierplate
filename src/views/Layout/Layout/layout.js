import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Navbar/navbar";
import Footer from "../Footer/footer";

import routes from "../../../routes";

const loading = () => {
  return <div>loading...</div>;
};

const Layout = (props) => {
  return (
    <>
      <Header />
      <div id="main">
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route) => (
              <Route
                path={route.path}
                exact={route.exact}
                render={() => <route.component {...props} />}
              />
            ))}
          </Switch>
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

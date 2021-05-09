import React from "react";

const MainPage = React.lazy(() => import("./views/Home/home"));

const routes = [{ path: "/", name: "Main Page", component: MainPage }];

export default routes;

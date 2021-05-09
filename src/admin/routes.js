import React from "react";
import metaRoutes from "./metaRoutes";

const Dashboard = React.lazy(() => import("./views/Dashboard/dashboard"));

const Products = React.lazy(() => import("./views/Product/Product"));
const AddProduct = React.lazy(() => import("./views/Product/AddProduct"));

const routes = [
  {
    path: [metaRoutes.dashboard],
    exact: true,
    name: "Dashboard",
    component: Dashboard,
  },
  //Products
  {
    path: [metaRoutes.product],
    exact: true,
    name: "Products",
    component: Products,
  },
  {
    path: "/admin/products/add",
    exact: true,
    name: "Add Products",
    component: AddProduct,
  },
];

export default routes;

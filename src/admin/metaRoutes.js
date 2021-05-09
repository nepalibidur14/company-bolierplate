import product from "./views/Product/routes";

const adminMETA = {
  adminLogin: "/admin/login",
  // dashboard: "/admin/",
  ...product,
};
export default adminMETA;

import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./AppRoutes";
import Layout from "./views/Layout/Layout/layout";

function App() {
  return (
    <HashRouter>
      <React.Suspense>
        <AppRoutes />
      </React.Suspense>
    </HashRouter>
  );
}

export default App;

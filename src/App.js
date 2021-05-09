import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./AppRoutes";
import Layout from "./views/Layout/Layout/layout";

function App() {
  const loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <AppRoutes />
      </React.Suspense>
    </HashRouter>
  );
}

export default App;

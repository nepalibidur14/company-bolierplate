import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [respo, setResponse] = useState([]);

  useEffect(() => {
    axios.get("/api/v1/connect-server").then((res) => {
      console.log(res);
      const response = res.data;
      setResponse(response.body);
    });
  }, []);
  return <div className="App">sdd{respo}</div>;
}

export default App;

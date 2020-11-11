import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [message, setMessage] = useState("Initial value");

  useEffect(() => {
    axios.get("http://localhost:8081/hello").then((res) => {
      setMessage(res.data)
    });
  }, []);

  return <div className="App">{message}</div>;
};

export default App;

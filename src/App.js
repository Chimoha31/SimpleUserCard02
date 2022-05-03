import "./App.css";
import CompoA from "./CompoA";
import React, { useContext, useState } from "react";
import { userCount } from "./Context";

function App() {
  const [count, setCount] = useState(50);
  const value = {
    count,
    setCount
  }

  return (
    <userCount.Provider value={value}>
      <CompoA />
    </userCount.Provider>
  );
}

export default App;

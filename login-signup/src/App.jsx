import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Routers } from "./Components/Routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routers />
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import ReactBody from "./components/ReactBody";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  let [input, setInput] = useState("");
  const getSearchInput = function (ip) {
    input = ip;
    setInput(ip);
  };

  return (
    <div className="App">
      <Navbar getSearchInput={getSearchInput} />
      <br />
      <ReactBody input={input} />
      <br />
      <Footer />
    </div>
  );
}

export default App;

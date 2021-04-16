import "./App.css";
import Navbar from "./components/Navbar";
import ReactBody from "./components/ReactBody";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  let [input, setInput] = useState("");
  let [selectType, setSelectType] = useState("redux");
  const getSearchInput = function (ip) {
    input = ip;
    setInput(ip);
  };

  const selectQuesType = function (type) {
    setSelectType(type);
  };

  return (
    <div className="App">
      <Navbar getSearchInput={getSearchInput} selectQuesType={selectQuesType} />
      <br />
      <ReactBody input={input} selectQuesType={selectType} />

      {/* <Footer /> */}
    </div>
  );
}

export default App;

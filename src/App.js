// import logo from "./logo.svg";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light"); // wheather dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      // document.body.style.color = "white"; // My code working
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.body.style.color = "black";  // My code working
    }
  };

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text for analyze below" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;

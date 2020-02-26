import React from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";

import Header from "./components/Header/Header.jsx"
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
    </div>
  );
}

export default App;

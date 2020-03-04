import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Team from "./components/Team/Team";

import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work/Work";
import Any from "./components/Work/any"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <Work />
      <Any />
      <Team />
      <ContactForm />
      <Footer />      
    </div>
  );
}

export default App;

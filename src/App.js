import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Team from "./components/Team/Team";

import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <Team />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

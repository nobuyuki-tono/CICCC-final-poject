import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer"

import "./App.css";
import AboutUs from "./components/AboutUs";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <AboutUs />
      <Team />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

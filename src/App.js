import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer"

import "./App.css";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

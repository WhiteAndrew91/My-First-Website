import React from "react";
import Header from "./Main Page/Header";
import About from "./Main Page/About";
import Projects from "./Main Page/Projects";
import Footer from "./Main Page/Footer";
import Loader from "./Main Page/Loader";


import "./Scss/main.scss";

function App() {
  return (
    <>
      <Loader />
      <Header />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import Nav from "./components/Nav"
import Header from "./components/Header";
import Main from "./components/Main";
import imageMockups from "./images/image-mockups.png"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-fluid px-0">
      <Nav />
      <div className="header-container pb-5">
        <img className="header-phones" src={imageMockups} />
        <Header />
        <Main />
        <Footer /> 
      </div>
      
    </div>
  )
}

export default App;

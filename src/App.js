import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home.js";
import LiveData from "./liveData.js";
import Navbar from "./navbar.js";
import Services from "./services.js";
import Contact from "./contactUs.js";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liveData" element={<LiveData />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactUs" element={<Contact />} />
      </Routes>
    </>
  );
};
export default App;

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Addcofee = () => {
  return (
    <div>
      <Header></Header>
      <h2>add cofee</h2>
      <Footer></Footer>
    </div>
  );
};

export default Addcofee;

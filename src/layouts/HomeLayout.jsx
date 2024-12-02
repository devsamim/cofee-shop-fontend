import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <Header></Header>

      <Banner></Banner>

      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;

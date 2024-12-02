import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { BsFillCupFill } from "react-icons/bs";
import { Outlet, useLoaderData } from "react-router-dom";
import CoffeeCard from "../pages/CoffeeCard";

const HomeLayout = () => {
  const coffeeData = useLoaderData();
  return (
    <div>
      <Header></Header>

      <Banner></Banner>
      <div className="w-11/12 mx-auto mb-4">
        <p className="mt-5 text-center">--- Sip & Savor ---</p>
        <h2 className="text-2xl font-semibold text-center mb-10 mt-8">
          Our Popular Products
        </h2>
        <div className="flex justify-center">
          <button className="btn  rounded-none bg-[#E3B577] p-2 m-2 mb-10 text-[#FFFFFF]">
            Add Coffee <BsFillCupFill className="text-black" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-4 ">
          {coffeeData.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
          ))}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;

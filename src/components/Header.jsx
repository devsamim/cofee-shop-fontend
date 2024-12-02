import React from "react";
import logo from "../assets/icons/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center items-center gap-x-4 p-2 bg-[#372727]">
      <Link to="/">
        <img className="h-20 w-20 text-base-200" src={logo} alt="" />
      </Link>
      <h1 className="text-2xl font-bold text-white">Espresso Emporium</h1>
      <Link to="/addCofee">
        <button className="btn bg-yellow-100">Add Cofee</button>
      </Link>
      <Link>
        <button className="btn bg-yellow-100">Login</button>
      </Link>
    </div>
  );
};

export default Header;

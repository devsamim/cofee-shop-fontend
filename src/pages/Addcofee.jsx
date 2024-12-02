import React from "react";

import Header from "../components/Header";
import { IoIosArrowRoundBack } from "react-icons/io";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Addcofee = () => {
  const handleCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = { name, chef, supplier, taste, category, details, photo };
  };
  return (
    <div>
      <Header></Header>
      <div className="w-11/12 mx-auto flex items-center gap-x-2 mt-4">
        <h2>
          <Link to="/">
            {" "}
            <IoIosArrowRoundBack />
          </Link>
        </h2>
        <h2>Back to home</h2>
      </div>
      <div className="w-9/12 mx-auto bg-[#F4F3F0] mt-5 p-8 mb-20">
        <h1 className="text-center text-2xl font-semibold mb-4">
          Add New Coffee
        </h1>
        <p className="text-center mb-2 mt-4 text-[#1B1A1AB3] w-9/12 mx-auto">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at <br /> its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using Content here.
        </p>
        <div className="10/12 mx-auto mt-5">
          <form onSubmit={handleCoffee}>
            <div className="grid grid-cols-2 gap-x-4">
              <div>
                <label className="font-semibold">Name</label>
                <input
                  className="w-full p-2 outline-none rounded-md mt-2 mb-2"
                  type="text"
                  name="name"
                  placeholder="enter coffee name"
                />
              </div>
              <div>
                <label className="font-semibold">Chef</label>
                <input
                  className="w-full p-2 outline-none rounded-md mt-2 mb-2"
                  type="text"
                  name="chef"
                  placeholder="enter chep"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="">
                {" "}
                <label className="font-semibold">Supplier</label>
                <input
                  className="w-full p-2 outline-none rounded-md mt-2 mb-2"
                  type="text"
                  name="supplier"
                  placeholder="enter coffee supplier"
                />
              </div>
              <div className="">
                <label className="font-semibold">Taste</label>
                <input
                  className="w-full p-2 outline-none rounded-md mt-2 mb-2"
                  type="text"
                  name="taste"
                  placeholder="enter taste"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="rid grid-cols-2 gap-x-4">
                {" "}
                <label className="font-semibold">Category</label>
                <input
                  className="w-full p-2 outline-none rounded-md mt-2 mb-2"
                  type="text"
                  name="category"
                  placeholder="enter category"
                />
              </div>
              <div>
                <label className="font-semibold">Details</label>
                <input
                  className="w-full p-2 outline-none rounded-md mt-2 mb-2"
                  type="text"
                  name="details"
                  placeholder="enter coffee details"
                />
              </div>
            </div>
            <div className="w-full p-2 mb-2">
              {" "}
              <label className="font-semibold">Photo</label>
              <input
                className="w-full p-2 mt-2"
                type="text"
                name="photo"
                placeholder="enter photo url"
              />
            </div>
            <div className="mb-5">
              <button className="btn w-full bg-[#D2B48C] mt-3">
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Addcofee;

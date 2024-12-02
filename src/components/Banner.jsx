import React from "react";
import banner from "../assets/more/3.png";
import bnLogo1 from "../assets/icons/1.png";
import bnLogo2 from "../assets/icons/2.png";
import bnLogo3 from "../assets/icons/3.png";
import bnLogo4 from "../assets/icons/4.png";

const Banner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "content",
          height: "600px",
          width: "100%",
        }}
      >
        <div className=" flex justify-between text-white">
          <div></div>
          <div className="w-2/4 mt-56 p-4 mr-10">
            <h1 className="text-3xl font-semibold mb-4">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="text-gray-400 mb-4 text-sm">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of <br /> every moment!!! Enjoy
              the beautiful moments and make them memorable.
            </p>
            <button className="bg-[#E3B577] text-black p-2">Learn More</button>
          </div>
        </div>
      </div>
      <div className="bg-[#ECEAE3] h-[180px] flex p-4 gap-x-8 justify-between">
        <div className="ml-10">
          <img src={bnLogo1} alt="" />
          <h3>Awesome Aroma</h3>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src={bnLogo2} alt="" />
          <h3>Awesome Aroma</h3>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src={bnLogo3} alt="" />
          <h3>Awesome Aroma</h3>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src={bnLogo4} alt="" />
          <h3>Awesome Aroma</h3>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;

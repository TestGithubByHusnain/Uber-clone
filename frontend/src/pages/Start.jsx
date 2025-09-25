import React from "react";
import { Link } from "react-router-dom";
import Nextridelogo from "../assets/Nextridelogo.png";

const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]
      h-screen pt-8 flex justify-between flex-col w-full bg-red-400">
        {/* Logo */}
        <img className="w-24 ml-8" src={Nextridelogo} alt="NexRide logo" />
        <div className="bg-white pb-7 py-5 px-5">
          <h2 className="text-3xl font-bold">Get Started with NexRide</h2>
          <Link to='/login' className=" flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;

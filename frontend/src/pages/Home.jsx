import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]
      h-screen pt-8 flex justify-between flex-col w-full bg-red-400">
        <img
          className="w-24 ml-8"
          src="https://sdmntprwestus3.oaiusercontent.com/files/00000000-78b8-61fd-88ec-c5d4b7fd4da9/raw?se=2025-09-24T21%3A07%3A21Z&sp=r&sv=2024-08-04&sr=b&scid=45253590-eac7-570c-acb7-52d68124bc86&skoid=5939c452-ea83-4420-b5b4-21182254a5d3&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-24T17%3A19%3A33Z&ske=2025-09-25T17%3A19%3A33Z&sks=b&skv=2024-08-04&sig=nC1D3OASRQJQi6pLuBQdX9V4SGm3MDP2lZ5lCXINSnw%3D"
        />
        <div className="bg-white pb-7 py-5 px-5">
          <h2 className="text-3xl font-bold">Get Started with NexRide</h2>
          <Link to='/login' className=" flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

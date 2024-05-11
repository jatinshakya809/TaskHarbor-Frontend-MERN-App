import React from "react";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=" md:h-[100vh] h-[80vh] flex py-24 px-8 md:px-24">
      <div className="">
        <h1 className="md:text-7xl text-5xl tracking-tighter font-light py-2">
          Organize your <br /> work and life, finally.
        </h1>
        <p className="md:text-3xl text-lg text-gray-400">
          Become focus, organized, and calm with{" "}
          <br className="hidden md:block" />
          todo app. The World's #1 task manager app for free.
        </p>
        <button
          onClick={() => {
            navigate("/todo");
          }}
          className="bg-[#E30022] px-4 py-2 my-3  text-white rounded-sm font-bold cursor-pointer hover:bg-[#ff0026] rounded-tr-xl rounded-bl-xl  duration-500"
        >
          Make Todo List
        </button>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import "./Signup.css";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../BaseUrl";

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/api/v1/user/register`, data);
      toast.success(res.data.message);
      setData({ email: "", username: "", password: "" });
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } catch (error) {
      setData({ email: "", username: "", password: "" });
      console.log("Error in signup", error);
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };
  return (
    <div className="md:h-[80vh] h-[80vh]  md:p-10 p-3">
      <ToastContainer />
      <div className="md:flex md:justify-center md:items-center md:space-x-16">
        <div className="md:w-[50%] text-center md:text-left ">
          <h1 className="md:text-8xl text-4xl tracking-tighter font-light my-5 md:my-0">
            Welcome to, <br className="hidden md:block" />
            TaskHarbor
          </h1>
          <p className="md:w-[80%] md:text-xl md:px-5 md:py-2 text-gray-500">
            Ready to supercharge your productivity? Sign up now to start
            managing your tasks effortlessly.
          </p>
        </div>
        <div className="md:flex md:flex-col">
          <h1 className="text-3xl my-4">Create Your Account</h1>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="p-2 my-3 outline-none border border-black rounded-lg w-[100%] "
            onChange={handleChange}
            value={data.email}
          />
          <input
            type="username"
            placeholder="Usernma"
            name="username"
            className="p-2 my-3 outline-none border border-black rounded-lg w-[100%] "
            onChange={handleChange}
            value={data.username}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="p-2 my-3 outline-none border border-black rounded-lg w-[100%] "
            onChange={handleChange}
            value={data.password}
          />
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-[#e30022] px-5 py-2 text-white font-bold border-none rounded-bl-xl rounded-tr-xl hover:bg-[#ff0026] mt-2"
            >
              SignUp
            </button>
          </div>
          <div className="text-center my-2">
            <p className="text-lg">
              Already have an account?{" "}
              <Link
                className="text-blue-500 font-semibold underline hover:text-black"
                to="/signin"
              >
                SignIn
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useState } from "react";
import "./Signup.css";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../../Store";
import { baseUrl } from "../../BaseUrl";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOnClick = async (e) => {
    e.preventDefault;
    try {
      const res = await axios.post(`${baseUrl}/api/v1/user/signin`, data);
      sessionStorage.setItem("id", res.data.user._id);
      dispatch(authAction.login());
      toast.success(res.data?.message);
      setData({ email: "", password: "" });
      setTimeout(() => {
        navigate("/todo");
      }, 2000);
    } catch (error) {
      console.log("Error in signIn", error);
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
      setData({ email: "", password: "" });
    }
  };
  return (
    <>
      <div className="md:h-[80vh] h-[80vh]  md:p-10 md:pt-16 p-3">
        <ToastContainer />
        <div className="md:flex md:justify-center md:items-center md:space-x-16">
          <div className="md:w-[55%] text-center md:text-left ">
            <h1 className="md:text-8xl text-4xl tracking-tighter font-light my-5 md:my-0">
              Welcome back to <br className="hidden md:block" />
              TaskHarbor!
            </h1>
            <p className="md:w-[80%] md:text-xl md:px-5 md:py-2 text-gray-500">
              Sign in to access your tasks and stay organized.
            </p>
          </div>
          <div className="md:flex md:flex-col">
            <div className="flex flex-col">
              <h1 className="text-3xl my-4">Sign In to Your Account</h1>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="p-2 my-3 outline-none border border-black rounded-lg w-[100%]"
                value={data?.email}
                onChange={handleOnChange}
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                className="p-2 my-3 outline-none border border-black rounded-lg w-[100%]"
                value={data?.password}
                onChange={handleOnChange}
              />
              <div className="text-center">
                <button
                  onClick={handleOnClick}
                  className="bg-[#00c676] px-5 py-2 text-white font-bold border-none rounded-bl-xl rounded-tr-xl hover:bg-[#00ea8c] mt-2"
                >
                  SignIn
                </button>
              </div>
              <div className="text-center my-2">
                <p className="text-lg">
                  Already have an account?{" "}
                  <Link
                    className="text-blue-500 font-semibold underline hover:text-black"
                    to="/signup"
                  >
                    SignUp
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

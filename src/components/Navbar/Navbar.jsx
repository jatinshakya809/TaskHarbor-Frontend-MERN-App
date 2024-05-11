import React from "react";

import { GiWhiteBook } from "react-icons/gi";
import { PiAddressBookFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../../Store";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClick = () => {
    dispatch(authAction.logout());
    sessionStorage.removeItem("id");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <>
      <div className="navbar md:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>

              <li>
                <Link to="/todo">Todo</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-xl font-semibold">
            TaskHarbor
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/todo">Todo</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          {!isLoggedIn && (
            <>
              <Link
                className="bg-[#e30022] text-white rounded-sm font-bold px-3 py-2 cursor-pointer hover:bg-[#ff0026] hover:rounded-tr-xl hover:rounded-bl-xl  duration-500"
                to="/signup"
              >
                SignUp
              </Link>
              <Link
                className="bg-[#00a676] text-white rounded-sm font-bold px-3 py-2 cursor-pointer hover:bg-[#00d599] hover:rounded-tr-xl hover:rounded-bl-xl duration-500"
                to="/signin"
              >
                SignIn
              </Link>
            </>
          )}
          {isLoggedIn && (
            <Link
              className="bg-[#00a676] text-white rounded-sm font-bold px-3 py-2 cursor-pointer hover:bg-[#00d599] hover:rounded-tr-xl hover:rounded-bl-xl duration-500"
              onClick={handleOnClick}
            >
              Logout
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

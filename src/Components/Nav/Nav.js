import React from "react";
import './Nav.css'
const Nav = () => {
  return (
    <div className="navbar bg-base-100 mx-auto w-full max-w-6xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Doctors</a>
            </li>
            <li>
              <a>Board</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Syldon Hospital</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 font-regular">
        <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Doctors</a>
            </li>
            <li>
              <a>Board</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <a className="btn bg-blue-600 hover:bg-blue-700 text-white hover:bg-blue-700ß">Call - 01946348006</a>
      </div>
    </div>
  );
};

export default Nav;

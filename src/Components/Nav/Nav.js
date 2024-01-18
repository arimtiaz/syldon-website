import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import logo from '../../images/Syldon_Logo.png'
const Nav = () => {
  return (
    <div className="navbar bg-blue-800 md:bg-base-100 mx-auto w-full max-w-6xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-cyan-800  text-white"
          >
            <Link to='/home'>
            <li>
              <a>Home</a>
            </li>
            </Link>
            <Link to='/aboutus'>
            <li>
              <a>About Us</a>
            </li>
            </Link>
            <Link to='/doctors'>
            <li>
              <a>Doctors</a>
            </li>
            </Link>
            <Link to="/board">
            <li>
              <a>Board</a>
            </li>
            </Link>
            <Link to="/board">
            <li>
              <a>contactus</a>
            </li>
            </Link>

          </ul>
        </div>
        <Link to='/home'><a className="btn btn-ghost normal-case text-xl md:text-black text-white">Syldon Hospital</a></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 font-regular">
          <Link to='/home'>
            <li>
              <a>Home</a>
            </li>
          </Link>
          <Link to='/aboutus'>
          </Link>
          <Link to='/doctors'>
          <li>
            <a>Doctors</a>
          </li>
          </Link>
          <Link to='/investors'>
          <li>
            <a>Investors & Shareholder</a>
          </li>
          </Link>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <a className="btn bg-blue-600 hover:bg-blue-700 text-white hover:bg-blue-700ß">
          Call - 01946348006
        </a>
      </div>
    </div>
  );
};

export default Nav;

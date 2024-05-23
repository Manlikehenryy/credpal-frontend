import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="font-poppins menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Business</a>
            </li>
            <li>
              <a>What We Do</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src="/credpal-logo.png" alt="" />
        </a>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li>
              <a className="font-poppins">Products</a>
            </li>
            <li>
              <a className="font-poppins">Business</a>
            </li>
            <li>
              <a className="font-dm-sans">What We Do</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end font-poppins">
        <ul className="menu menu-horizontal px-1 navbar-center hidden lg:flex text-white">
          <li className="pt-2">
            <a>FAQ</a>
          </li>
          <li>
            <details>
              <summary>
                <img src="/NG.png" alt="" />
              </summary>
              <ul className="p-2 z-10">
                <li>
                  <a>Submenu 1</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
        <div className="hidden md:block">
          <a className="btn font-semibold rounded-full ">
            Download the Credpal app
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

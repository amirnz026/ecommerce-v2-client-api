import React from "react";
import logoIcon from "../images/logo-assets/logo.png";
import searchIcon from "../images/search.png";
import cartIcon from "../images/cart.png";
import loginIcon from "../images/login.png";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="m-5">
        <ul className="flex gap-5 items-center justify-evenly list-none p-0 m-0 ms-1 ">
          {/* Logo */}
          <li className="flex-[1] ">
            <a className="cursor-pointer">
              <img src={logoIcon} alt="shoply-logo" />
            </a>
          </li>

          {/* Search Bar */}
          <div className="flex flex-[4]">
            <button className="ps-4  text-sm text-gray-900 bg-gray-200 rounded-s-lg border-gray-300 outline-0">
              <img src={searchIcon} alt="Search" className="w-7" />
            </button>
            <input
              type="search"
              id="default-search"
              className=" p-4  w-full text-sm text-gray-900 bg-gray-200 rounded-e-lg  border-gray-300 outline-0"
              placeholder="جستجو"
              required
            />
          </div>
          {/* Login Register Cart */}
          <div className="md:flex-[5]"></div>
          <ul className="flex justify-end items-center gap-5 list-none p-0 m-0 flex-[2] me-3">
            <li className="flex">
              <div className="flex p-3 border w-full text-sm rounded-2xl font-semibold text-gray-700 border-gray-300">
                <img
                  src={loginIcon}
                  alt="Login-Register"
                  className="w-6 me-2"
                />
                ورود | ثبت‌نام
              </div>
            </li>
            <li>
              <img src={cartIcon} alt="Cart" className="w-7 cursor-pointer" />
            </li>
          </ul>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

// bg-[#1da1f2] change color like this

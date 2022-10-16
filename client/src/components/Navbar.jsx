import React from "react";

import searchIcon from "../images/search.png";
import cartIcon from "../images/cart.png";
import loginIcon from "../images/login.png";
import { BiLogIn } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import "../index.css";

const logoIcon = "https://i.postimg.cc/g0n5zwvL/logo.png";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="pt-2 mb-1 shadow-md">
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
              <BsSearch className="text-gray-600" />
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
            {/* Login Button */}
            <li className="flex">
              <a
                href="#_"
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold  transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#6200EE] group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <BiLogIn className="text-[#03DAC5] mt-1" size={25} />
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-[#03DAC5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out text-sm xl:text-base group-hover:text-white">
                  <div className="block xl:hidden">ورود</div>
                  <div className="hidden xl:block">ورود | ثبت نام</div>
                </span>
              </a>
            </li>
            <li>
              <FiShoppingCart
                size={25}
                className="text-gray-600 cursor-pointer"
              />
            </li>
          </ul>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

// bg-[#1da1f2] change color like this

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  AiOutlineMobile,
  AiFillCaretDown,
  AiOutlineLaptop,
  AiOutlineTablet,
  AiOutlineCamera,
  AiOutlineCaretLeft,
  AiOutlineFire,
  AiOutlineQuestionCircle,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import { RiGamepadLine } from "react-icons/ri";
import { RiHeadphoneLine } from "react-icons/ri";
import { TbMinusVertical } from "react-icons/tb";

import {
  mobileBrands,
  laptopBrands,
  tabletBrands,
  consoleBrands,
  headsetBrands,
  cameraBrands,
} from "../dataV2";

import { FiMapPin } from "react-icons/fi";

// lightPrimaryColor = "#6200EE";
// primaryColor = "#3700B3";
// secondaryColor = "#03DAC5";

const Dropdown = () => {
  const [isMobileHover, setIsMobileHover] = useState(true);
  const [isLaptopHover, setIsLaptopHover] = useState(false);
  const [isTabletHover, setIsTableHover] = useState(false);
  const [isConsoleHover, setIsConsoleHover] = useState(false);
  const [isHeadsetHover, setIsHeadsetHover] = useState(false);
  const [isCameraHover, setIsCameraHover] = useState(false);
  const [brands, setBrands] = useState(mobileBrands);
  const [isCatBtnHover, setIsCatBtnHover] = useState(false);

  function handleHover(catName) {
    switch (catName) {
      case "mobile":
        setIsMobileHover(true);
        setIsLaptopHover(false);
        setIsTableHover(false);
        setIsConsoleHover(false);
        setIsHeadsetHover(false);
        setIsCameraHover(false);
        setBrands(mobileBrands);
        break;
      case "laptop":
        setIsMobileHover(false);
        setIsLaptopHover(true);
        setIsTableHover(false);
        setIsConsoleHover(false);
        setIsHeadsetHover(false);
        setIsCameraHover(false);
        setBrands(laptopBrands);
        break;
      case "tablet":
        setIsMobileHover(false);
        setIsLaptopHover(false);
        setIsTableHover(true);
        setIsConsoleHover(false);
        setIsHeadsetHover(false);
        setIsCameraHover(false);
        setBrands(tabletBrands);

        break;
      case "console":
        setIsMobileHover(false);
        setIsLaptopHover(false);
        setIsTableHover(false);
        setIsConsoleHover(true);
        setIsHeadsetHover(false);
        setIsCameraHover(false);
        setBrands(consoleBrands);

        break;
      case "headset":
        setIsMobileHover(false);
        setIsLaptopHover(false);
        setIsTableHover(false);
        setIsConsoleHover(false);
        setIsHeadsetHover(true);
        setIsCameraHover(false);
        setBrands(headsetBrands);

        break;
      case "camera":
        setIsMobileHover(false);
        setIsLaptopHover(false);
        setIsTableHover(false);
        setIsConsoleHover(false);
        setIsHeadsetHover(false);
        setIsCameraHover(true);
        setBrands(cameraBrands);

        break;
      default:
        setIsMobileHover(false);
        setIsLaptopHover(false);
        setIsTableHover(false);
        setIsConsoleHover(false);
        setIsHeadsetHover(false);
        setIsCameraHover(false);
        setBrands(mobileBrands);
    }
  }

  const CategoryTitle = (props) => {
    return (
      <li
        className="flex items-center gap-2 mb-3 p-1 cursor-pointer hover:bg-[#6200EE]/[.1]  rounded-lg"
        onMouseEnter={() => handleHover(props.catName)}
      >
        {props.icon}
        <p>{props.title}</p>
      </li>
    );
  };

  return (
    <div className="relative ms-2 ">
      {/* Categories Button */}
      <a
        href="#_"
        className="relative inline-flex items-center justify-center p-3 overflow-hidden font-medium text-[#6200EE] transition duration-300 ease-out rounded-t-2xl  group"
        onMouseEnter={() => setIsCatBtnHover(true)}
        onMouseLeave={() => setIsCatBtnHover(false)}
      >
        <span
          className={`absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-full bg-[#6200EE] group-hover:translate-y-0 ${
            isCatBtnHover ? "translate-y-0" : ""
          } ease`}
        >
          <AiFillCaretDown />
        </span>

        <span className="absolute flex items-center justify-center w-full h-full text-[#6200EE] transition-all duration-300 transform group-hover:translate-y-full ease ">
          <AiFillCaretDown className="text-[#6200EE]" />
          دسته‌بندی محصولات
        </span>
        <span className="relative invisible">دسته‌بندی محصولات</span>
      </a>

      {/* Categories Dropdown */}
      <div
        className={`flex pt-2 rounded-md h-[20rem] w-[28rem] absolute start-0  shadow-lg shadow-gray-300 z-10 bg-white ${
          isCatBtnHover
            ? "opacity-1 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } transition-all`}
        onMouseEnter={() => setIsCatBtnHover(true)}
        onMouseLeave={() => setIsCatBtnHover(false)}
      >
        {/* Right side */}
        <ul className="font-semibold text-gray-900 bg-gray-100 z-10 ">
          <CategoryTitle
            icon={<AiOutlineMobile />}
            title="موبایل"
            catName="mobile"
          />
          <CategoryTitle
            icon={<AiOutlineLaptop />}
            title="لپتاپ"
            catName="laptop"
          />
          <CategoryTitle
            icon={<AiOutlineTablet />}
            title="تبلت"
            catName="tablet"
          />
          <CategoryTitle
            icon={<RiGamepadLine />}
            title="کنسول بازی"
            catName="console"
          />
          <CategoryTitle
            icon={<RiHeadphoneLine />}
            title="هدفون و هندزفری"
            catName="headset"
          />
          <CategoryTitle
            icon={<AiOutlineCamera />}
            title="دوربین"
            catName="camera"
          />
        </ul>

        {/* Left side */}
        <ul className="ms-6 ">
          <li className="font-regular text-gray-600 mb-4 cursor-pointer">
            {isMobileHover && (
              <div className="flex items-center">
                <p>همه محصولات گوشی موبایل</p>
                <AiOutlineCaretLeft className="text-[#6200EE]" />
              </div>
            )}

            {isLaptopHover && <p>همه محصولات لپتاپ</p>}
            {isTabletHover && <p>همه محصولات تبلت</p>}
            {isConsoleHover && <p>همه محصولات کنسول بازی</p>}
            {isHeadsetHover && <p>همه محصولات هدفون و هندزفری</p>}
            {isCameraHover && <p>همه محصولات دوربین</p>}
          </li>
          <li className="font-regular text-gray-700 flex flex-row-reverse items-center mb-3 cursor-pointer">
            {isMobileHover && <p>برندهای مختلف گوشی موبایل</p>}
            {isLaptopHover && <p>برندهای مختلف لپتاپ</p>}
            {isTabletHover && <p>برندهای مختلف تبلت</p>}
            {isConsoleHover && <p>برندهای مختلف کنسول بازی</p>}
            {isHeadsetHover && <p>برندهای مختلف هدفون و هندزفری</p>}
            {isCameraHover && <p>برندهای مختلف دوربین</p>}
            <TbMinusVertical className="mt-1 text-[#6200EE]" />
          </li>

          {/* Mobile brands */}
          <div>
            {brands.map((brand) => {
              return (
                <li className="mb-2 text-gray-500 cursor-pointer">{brand}</li>
              );
            })}
          </div>
        </ul>
      </div>
      {/* Q&A */}
    </div>
  );
};

const NavItems = () => {
  return (
    <ul className={`ms-3 flex items-center gap-5 text-gray-500`}>
      <span>|</span>
      <li className="flex items-center gap-2 ">
        <AiOutlineExclamationCircle className="text-gray-500 cursor-pointer" />
        <p className="cursor-pointer">تازه‌ها</p>
      </li>
      <li className="flex items-center gap-2 ">
        <AiOutlineFire className="text-gray-500 cursor-pointer" />

        <p className="cursor-pointer">پرفروشترین‌ها</p>
      </li>
      <li className="flex items-center gap-2 ">
        <AiOutlineQuestionCircle className="text-gray-500 cursor-pointer" />

        <p className="cursor-pointer">سوالی دارید؟</p>
      </li>
    </ul>
  );
};

const ChooseCity = () => {
  return (
    <div className="flex items-center gap-2">
      <FiMapPin className="text-gray-500" />
      <p className="me-3">لطفا شهر خود را انتخاب کنید </p>
    </div>
  );
};

const SecondNavbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex">
        <Dropdown />
        <NavItems />
      </div>
      <ChooseCity />
    </div>
  );
};

export default SecondNavbar;

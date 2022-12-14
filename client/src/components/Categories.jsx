import React from "react";
import computerAccess from "../images/category-icons/computer-access.svg";
import headset from "../images/category-icons/laptop.svg";
import laptop from "../images/category-icons/laptop.svg";
import mobile from "../images/category-icons/mobile.svg";
import mobileAccess from "../images/category-icons/mobile-access.svg";
import powerBank from "../images/category-icons/powerbank.svg";
import smartWatch from "../images/category-icons/smartwatch.svg";
import tablet from "../images/category-icons/tablet.svg";

const headerCategories = [
  "گوشی موبایل",
  "جانبی موبایل",
  "قطعات کامپیوتر",
  "لپتاپ",
  "تبلت",
  "پاوربانک",
  "هندزفری",
  "ساعت هوشمند",
];

const imgClass =
  "bg-gray-100 rounded-xl w-10 scale-[2] mb-7 mt-5 cursor-pointer ";
const listClass =
  "flex flex-col items-center font-semibold text-gray-600 cursor-pointer";

const Categories = () => {
  return (
    // justify center => between
    <ul className="overflow-auto w-80 mx-auto pb-5 sm:mx-0 sm:w-full xl:justify-center xl:gap-[120px] sm:pb-0 gap-14 flex justify-between mt-3">
      <li className={listClass}>
        <img src={mobile} alt="mobile" className={imgClass} />
        <p className="text-sm">گوشی موبایل</p>
      </li>

      <li className={listClass}>
        <img src={mobileAccess} alt="mobile accessories" className={imgClass} />
        <p className="text-sm">جانبی موبایل</p>
      </li>

      <li className={listClass}>
        <img
          src={computerAccess}
          alt="computer accessories"
          className={imgClass}
        />
        <p className="text-sm">جانبی کامپیوتر</p>
      </li>
      <li className={listClass}>
        <img src={tablet} alt="tablet" className={imgClass} />
        <p className="text-sm">تبلت هوشمند</p>
      </li>

      <li className={listClass}>
        <img src={powerBank} alt="powerbank" className={imgClass} />
        <p className="text-sm">پاوربانک</p>
      </li>
      <li className={listClass}>
        <img src={headset} alt="headset" className={imgClass} />
        <p className="text-sm">هندزفری</p>
      </li>
      <li className={listClass}>
        <img src={smartWatch} alt="smartwatch" className={imgClass} />
        <p className="text-sm">ساعت هوشمند</p>
      </li>
    </ul>
  );
};

export default Categories;

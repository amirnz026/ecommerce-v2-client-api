import React from "react";
import { BiChevronLeft } from "react-icons/bi";
const Divider = (props) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 rounded-xl px-5 py-3 font-semibold text-lg mb-5">
      <p>{props.title}</p>
      <div className="flex items-center cursor-pointer">
        <p>مشاهده همه</p>
        <BiChevronLeft />
      </div>
    </div>
  );
};

export default Divider;

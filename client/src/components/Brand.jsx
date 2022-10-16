import React from "react";

const Brand = (props) => {
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer">
      <img
        src={props.imgUrl}
        alt={props.brand}
        className=" transition-all duration-300 transform hover:scale-[1.08] ease"
      />
      <p className="text-xs font-semibold w-24 sm:w-full text-center ">
        {props.brand}
      </p>
    </div>
  );
};

export default Brand;

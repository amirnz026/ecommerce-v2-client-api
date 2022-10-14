import React from "react";

const Brand = (props) => {
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer ">
      <img
        src={props.imgUrl}
        alt={props.brand}
        className=" transition-all duration-300 transform hover:scale-[1.08] ease"
      />
      <p className="text-xs font-semibold">{props.brand}</p>
    </div>
  );
};

export default Brand;

import React from "react";
import "../index.css";

const Product = (props) => {
  return (
    <div className="flex flex-col justify-center cursor-pointer ">
      <img
        src={props.productIconUrl}
        alt={props.englishTitle}
        className="bg-gray-100 rounded-2xl "
      />
      <p className="twoLinesText text-3xl mt-2 leading-5">
        {props.productName}
      </p>
    </div>
  );
};

export default Product;

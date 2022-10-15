import React from "react";
import "../index.css";
import { AiFillStar } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";

const Product = (props) => {
  return (
    <div className="flex flex-col  justify-center cursor-pointer relative">
      <div className="bg-gray-100 rounded-xl flex justify-center">
        <img
          src={props.productIconUrl}
          alt={props.englishTitle}
          className="rounded-2xl px-[75px] py-[20px] transition-all duration-300 transform hover:scale-[1.08] ease "
        />
      </div>

      <p className="twoLinesText text-sm my-2 leading-7">{props.productName}</p>
      {props.off && (
        <div>
          <p className="mb-2 flex">
            {props.offPrice} تومان
            <span className="line-through ms-2">{props.price}</span>
          </p>
        </div>
      )}
      {!props.off && (
        <p className="mb-2">
          {props.price} <span>تومان</span>
        </p>
      )}

      <div className="flex gap-1">
        <AiFillStar className="text-[#ffb800] mt-1" />
        <span className="font-semibold">{props.score}</span>
        <span className="text-gray-400">({props.comments} نظر)</span>
      </div>
      {props.off && (
        <div className="absolute top-2 right-2 bg-[#6200EE] text-white text-xs px-2 py-1 rounded-lg">
          <span>{props.offPercent} %</span>
          <div></div>
        </div>
      )}
      {props.fastDeliver && (
        <div className="absolute top-2 left-2 bg-[#03DAC5] text-white text-xs px-2 py-1 rounded-lg flex items-center">
          <TbTruckDelivery />
          <span className="ms-2 align-super">سریع</span>
        </div>
      )}
      <div className="flex absolute right-3">
        {props.colors &&
          props.colors.map((color) => (
            <div
              class={`rounded-full flex p-1 relative`}
              style={{ backgroundColor: color }}
            />
          ))}
      </div>
    </div>
  );
};

export default Product;

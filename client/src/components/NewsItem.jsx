import React from "react";
import "../index.css";

const NewsItem = (props) => {
  return (
    <div className="relative cursor-pointer">
      <p className="absolute bottom-0 text-white font-semibold bg-gradient-to-t from-black bg-hero-pattern pt-10 pb-7 px-5 w-[100%] ">
        {props.title}
      </p>
      <div>
        <img src={props.imgUrl} alt={props.title} className="rounded-2xl" />
      </div>
    </div>
  );
};

export default NewsItem;

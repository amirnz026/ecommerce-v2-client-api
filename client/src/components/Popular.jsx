import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import Product from "./Product";
import { products, brands, news } from "../dataV2";
import Brand from "./Brand";
import NewsItem from "./NewsItem";
import ProductsRow from "./ProductsRow";
import Divider from "./Divider";

const Popular = () => {
  return (
    <div>
      <Divider title="پربازدیدترین ها" />
      <ProductsRow data={products} />
      <div className="flex gap-9 ">
        {brands.map((brand) => (
          <Brand imgUrl={brand.imgUrl} brand={brand.brand} />
        ))}
      </div>
      <div className="mt-10">
        <Divider title="پرفروشترین ها" />
      </div>

      <ProductsRow data={products} />

      <div className="flex justify-center items-center cursor-pointer">
        <img
          src="https://i.postimg.cc/q7MMT0DN/image-10.jpg"
          alt="gamers"
          className="mt-10 rounded-2xl w-full"
        />
      </div>
      <div className="mt-5">
        <Divider title="لوازم جانبی موبایل" />
      </div>

      <ProductsRow data={products} />

      <Divider title="گوشی موبایل" />

      <ProductsRow data={products} />

      <div className="grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-4 mt-10 justify-between">
        <img
          src="https://i.postimg.cc/bwfhz8rz/image-11.jpg"
          alt="headset"
          className="rounded-3xl cursor-pointer"
        />
        <img
          src="https://i.postimg.cc/YSpBW3QZ/image-12.jpg"
          alt="smartwatch"
          className="rounded-3xl cursor-pointer"
        />
        <img
          src="https://i.postimg.cc/Pq2szw4x/image-13.jpg"
          alt="speaker"
          className="rounded-3xl cursor-pointer"
        />
        <img
          src="https://i.postimg.cc/XYK0qhB9/image-14.jpg"
          alt="memory"
          className="rounded-3xl cursor-pointer"
        />
      </div>
      <div className="mt-5">
        <p className="font-bold mb-7">اخبار پربازدید تکنولوژی</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
        {news.map((newsItem) => (
          <NewsItem imgUrl={newsItem.imgUrl} title={newsItem.title} />
        ))}
      </div>
      <div className="mt-5">
        <Divider title="جدیدترین گوشی ها" />
      </div>

      <ProductsRow data={products} />

      <Divider title="محصولات جدید" />

      <ProductsRow data={products} />
    </div>
  );
};

export default Popular;

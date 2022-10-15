import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import Product from "./Product";
import { products, brands, news } from "../dataV2";
import Brand from "./Brand";
import NewsItem from "./NewsItem";

const Popular = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-gray-100 rounded-xl px-5 py-3 font-semibold text-lg mb-5">
        <p>پربازدیدترین ها</p>
        <div className="flex items-center">
          <p>مشاهده همه</p>
          <BiChevronLeft />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 mb-12">
        {products.map((product) => (
          <Product
            productIconUrl={product.productIconUrl}
            englishTitle={product.englishTitle}
            productName={product.productName}
            price={product.price}
            score={product.score}
            comments={product.comments}
            off={product.off}
            fastDeliver={product.fastDeliver}
            offPercent={product.offPercent}
            colors={product.colors}
            offPrice={product.offPrice}
          />
        ))}
      </div>
      <div className="flex gap-9 ">
        {brands.map((brand) => (
          <Brand imgUrl={brand.imgUrl} brand={brand.brand} />
        ))}
      </div>
      <div className="flex justify-between items-center bg-gray-100 rounded-xl px-5 py-3 font-semibold text-lg mt-12 mb-6">
        <p>پرفروشترین ها</p>
        <div className="flex items-center">
          <p>مشاهده همه</p>
          <BiChevronLeft />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 ">
        {products.map((product) => (
          <Product
            productIconUrl={product.productIconUrl}
            englishTitle={product.englishTitle}
            productName={product.productName}
            price={product.price}
            score={product.score}
            comments={product.comments}
            off={product.off}
            fastDeliver={product.fastDeliver}
            offPercent={product.offPercent}
            colors={product.colors}
            offPrice={product.offPrice}
          />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <img
          src="https://i.postimg.cc/q7MMT0DN/image-10.jpg"
          alt="gamers"
          className="mt-10 rounded-2xl"
        />
      </div>
      <div className="flex justify-between items-center bg-gray-100 rounded-xl px-5 py-3 font-semibold text-lg mt-12 mb-5">
        <p>لوازم جانبی موبایل</p>
        <div className="flex items-center">
          <p>مشاهده همه</p>
          <BiChevronLeft />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 ">
        {products.map((product) => (
          <Product
            productIconUrl={product.productIconUrl}
            englishTitle={product.englishTitle}
            productName={product.productName}
            price={product.price}
            score={product.score}
            comments={product.comments}
            off={product.off}
            fastDeliver={product.fastDeliver}
            offPercent={product.offPercent}
            colors={product.colors}
            offPrice={product.offPrice}
          />
        ))}
      </div>
      <div className="flex justify-between items-center bg-gray-100 rounded-xl px-5 py-3 font-semibold text-lg mt-12 mb-5">
        <p>گوشی موبایل</p>
        <div className="flex items-center">
          <p>مشاهده همه</p>
          <BiChevronLeft />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 ">
        {products.map((product) => (
          <Product
            productIconUrl={product.productIconUrl}
            englishTitle={product.englishTitle}
            productName={product.productName}
            price={product.price}
            score={product.score}
            comments={product.comments}
            off={product.off}
            fastDeliver={product.fastDeliver}
            offPercent={product.offPercent}
            colors={product.colors}
            offPrice={product.offPrice}
          />
        ))}
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-4 mt-10">
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
      <div className="flex gap-5 ">
        {news.map((newsItem) => (
          <NewsItem imgUrl={newsItem.imgUrl} title={newsItem.title} />
        ))}
      </div>
      <div className="flex justify-between items-center bg-gray-100 rounded-xl px-5 py-3 font-semibold text-lg mt-12 mb-5">
        <p>جدیدترین گوشی ها</p>
        <div className="flex items-center">
          <p>مشاهده همه</p>
          <BiChevronLeft />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 ">
        {products.map((product) => (
          <Product
            productIconUrl={product.productIconUrl}
            englishTitle={product.englishTitle}
            productName={product.productName}
            price={product.price}
            score={product.score}
            comments={product.comments}
            off={product.off}
            fastDeliver={product.fastDeliver}
            offPercent={product.offPercent}
            colors={product.colors}
            offPrice={product.offPrice}
          />
        ))}
      </div>
      <div className="flex justify-between items-center bg-gray-100 rounded-xl px-5 py-3 font-semibold text-lg mt-12 mb-5">
        <p>محصولات جدید</p>
        <div className="flex items-center">
          <p>مشاهده همه</p>
          <BiChevronLeft />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 ">
        {products.map((product) => (
          <Product
            productIconUrl={product.productIconUrl}
            englishTitle={product.englishTitle}
            productName={product.productName}
            price={product.price}
            score={product.score}
            comments={product.comments}
            off={product.off}
            fastDeliver={product.fastDeliver}
            offPercent={product.offPercent}
            colors={product.colors}
            offPrice={product.offPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;

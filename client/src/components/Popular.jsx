import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import Product from "./Product";
import { products, brands } from "../dataV2";
import Brand from "./Brand";

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
      <div className="flex gap-9 ">
        {brands.map((brand) => (
          <Brand imgUrl={brand.imgUrl} brand={brand.brand} />
        ))}
      </div>
      <div className="flex justify-between items-center bg-gray-100 rounded-xl px-5 py-3 font-semibold text-lg mt-12 mb-5">
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
          src="https://kryptic.ir/assets/images/ecommerce/banners/image-10.jpg"
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
          src="https://kryptic.ir/assets/images/ecommerce/banners/image-11.jpg"
          alt="headset"
          className="rounded-3xl cursor-pointer"
        />
        <img
          src="https://kryptic.ir/assets/images/ecommerce/banners/image-12.jpg"
          alt="smartwatch"
          className="rounded-3xl cursor-pointer"
        />
        <img
          src="https://kryptic.ir/assets/images/ecommerce/banners/image-13.jpg"
          alt="speaker"
          className="rounded-3xl cursor-pointer"
        />
        <img
          src="https://kryptic.ir/assets/images/ecommerce/banners/image-14.jpg"
          alt="memory"
          className="rounded-3xl cursor-pointer"
        />
      </div>
      <div className="mt-5">
        <p className="font-bold">اخبار پربازدید تکنولوژی</p>
      </div>
    </div>
  );
};

export default Popular;

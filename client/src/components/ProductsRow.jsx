import React from "react";
import Product from "./Product";
import { products } from "../dataV2";
import "../index.css";

const ProductsRow = (props) => {
  return (
    <div
      className={`gap-14 sm:gap-5 md:gap-10 mb-12 justify-between overflow-auto  w-full mx-auto pb-5 sm:mx-0  sm:pb-0  flex  mt-3`}
    >
      {props.data.map((product) => (
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
  );
};

export default ProductsRow;

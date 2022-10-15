import React from "react";
import Product from "./Product";
import { products } from "../dataV2";
import "../index.css";

const ProductsRow = (props) => {
  return (
    <div
      className={`grid grid-cols-3 md:grid-cols-5 gap-5 md:gap-10 mb-12 justify-center`}
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

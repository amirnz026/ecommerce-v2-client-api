import React from "react";
import { useTimer } from "react-timer-hook";
import { FaPercentage } from "react-icons/fa";
import Product from "./Product";
import { products } from "../dataV2";
import SecondNavbar from "./SecondNavbar";
import ProductsRow from "./ProductsRow";

// lightPrimaryColor = "#6200EE";
// primaryColor = "#3700B3";
// secondaryColor = "#03DAC5";

const SpecialOffer = () => {
  return (
    <div>
      <div className="flex items-center gap-3 justify-between bg-[#03DAC5] rounded-xl text-gray-50 mb-6">
        <div className="flex items-center gap-2 ms-8">
          <FaPercentage className="mt-2" />
          <p>پیشنهاد ویژه شاپلی</p>
        </div>
        <div className="me-6">
          <Timer />
        </div>
      </div>
      <ProductsRow data={products} />
      <div className="flex flex-col sm:flex-row justify-around">
        <img
          src="https://i.postimg.cc/Fz5HwQvJ/image-8.jpg"
          alt="samsung watch"
          className="hidden sm:block rounded-2xl cursor-pointer w-full sm:w-[45%]"
        />
        <img
          src="https://i.postimg.cc/XYH7453W/image-9.jpg"
          alt="huawei accessories"
          className="rounded-2xl cursor-pointer w-full sm:w-[45%]"
        />
      </div>
    </div>
  );
};

const counterStyle =
  "bg-gray-200 py-1 px-2 mx-2 rounded-lg font-semibold text-black";

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }} className="mt-6">
      <div style={{ fontSize: "16px" }}>
        <span className={counterStyle}>{hours}</span>:
        <span className={counterStyle}>{minutes}</span>:
        <span className={counterStyle}>{seconds}</span>
      </div>
      <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 12000);
          restart(time);
        }}
      ></button>
    </div>
  );
}

function Timer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 12000); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

export default SpecialOffer;

import React from "react";
import { useTimer } from "react-timer-hook";
import { FaPercentage } from "react-icons/fa";

// lightPrimaryColor = "#6200EE";
// primaryColor = "#3700B3";
// secondaryColor = "#03DAC5";

const SpecialOffer = () => {
  return (
    <div className="flex items-center gap-3 justify-between bg-[#03DAC5] rounded-xl text-gray-50">
      <div className="flex items-center gap-2">
        <FaPercentage className="mt-2" />
        <p>پیشنهاد ویژه شاپلی</p>
      </div>
      <Timer />
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

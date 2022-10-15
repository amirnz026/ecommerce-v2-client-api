import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import SecondNavbar from "../components/SecondNavbar";
import HeaderSlider from "../components/HeaderSlider";
import SpecialOffer from "../components/SpecialOffer";
import Product from "../components/Product";
import Popular from "../components/Popular";
import Header from "../components/Header";
import "../index.css";

const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains("scroll-down")
  ) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

const Home = () => {
  return (
    <div className="center-all">
      <div>
        <div className="sticky top-0 z-50 bg-white shadow-lg pb-1">
          <Navbar />
        </div>
        <header className="mt-[78px] z-10 shadow-md">
          <SecondNavbar />
        </header>
        <div className="mt-36 cursor-pointer">
          <Header />
        </div>
        <div className="my-12">
          <Categories />
        </div>
        <div className="mb-6"></div>
        <SpecialOffer />
        <div className="mb-6"></div>
        <Popular />
        <div className="mb-12"></div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

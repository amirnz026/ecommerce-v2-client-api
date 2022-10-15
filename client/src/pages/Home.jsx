import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import SecondNavbar from "../components/SecondNavbar";
import HeaderSlider from "../components/HeaderSlider";
import ReactSlider from "../components/ReactSlider";
import SpecialOffer from "../components/SpecialOffer";
import Product from "../components/Product";
import Popular from "../components/Popular";
const Home = () => {
  return (
    <div className="mx-24">
      <Navbar />
      <SecondNavbar />
      <div className="mb-5"></div>
      <ReactSlider />
      <div className="mb-12"></div>
      <Categories />
      <div className="mb-6"></div>
      <SpecialOffer />
      <div className="mb-6"></div>
      <Popular />
      <div className="mb-12"></div>
      <Footer />
    </div>
  );
};

export default Home;

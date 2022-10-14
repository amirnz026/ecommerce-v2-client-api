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
const Home = () => {
  return (
    <div>
      {/* <Announcement /> */}
      <Navbar />
      <SecondNavbar />
      {/* <HeaderSlider /> */}
      {/* <Slider /> */}
      <div className="mt-5">
        <ReactSlider />
      </div>
      {/* <Categories />
      <Products />
      <Newsletter />
      <Footer /> */}
    </div>
  );
};

export default Home;

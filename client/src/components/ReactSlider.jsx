import SimpleImageSlider from "react-simple-image-slider";
import imageLeft from "../images/image-6.jpg";
import imageRight from "../images/image-7.jpg";

const images = [
  { url: "https://i.postimg.cc/dVwPDF26/image-1.jpg" },
  { url: "https://i.postimg.cc/QxZvnDyD/image-2.jpg" },
  { url: "https://i.postimg.cc/sXtbzCfp/image-3.jpg" },
  { url: "https://i.postimg.cc/zf29dR92/image-4.jpg" },
  { url: "https://i.postimg.cc/CLCX323q/image-5.jpg" },
];

const ReactSlider = () => {
  return (
    <div className="flex justify-center items-center rounded-3xl gap-5">
      {/* Right */}
      <div className="rounded-s-3xl overflow-hidden cursor-pointer">
        <img
          src={imageLeft}
          className="rounded-s-3xl transition-all duration-300 transform hover:scale-105 ease "
          alt="smart watch"
        />
      </div>

      <div dir="ltr" className="cursor-pointer">
        <SimpleImageSlider
          width={1000}
          height={420}
          images={images}
          showBullets={true}
          showNavs={true}
          slideDuration={0.5}
          navStyle={2}
          autoPlay={true}
          autoPlayDelay={4}
        />
      </div>
      {/* Left */}
      <div className="rounded-e-3xl overflow-hidden cursor-pointer">
        <img
          src={imageRight}
          className="rounded-e-3xl transition-all duration-300 transform hover:scale-105 ease"
          alt="smart watch"
        />
      </div>
    </div>
  );
};

export default ReactSlider;

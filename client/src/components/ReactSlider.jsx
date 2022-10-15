import SimpleImageSlider from "react-simple-image-slider";

const imageLeft = "https://i.postimg.cc/mkqQYK72/image-6.jpg";
const imageRight = "https://i.postimg.cc/DfYd34Rk/image-7.jpg";

const images = [
  { url: "https://i.postimg.cc/zBZ6jPS7/image-1.jpg" },
  { url: "https://i.postimg.cc/BbJyWLz1/image-2.jpg" },
  { url: "https://i.postimg.cc/2yTtCjp9/image-3.jpg" },
  { url: "https://i.postimg.cc/mDYq6Nms/image-4.jpg" },
  { url: "https://i.postimg.cc/CM4XG7ZC/image-5.jpg" },
];

const ReactSlider = () => {
  return (
    <div className="flex justify-center items-center rounded-3xl gap-5 ">
      {/* Right */}
      <div className="rounded-s-3xl overflow-visible cursor-pointer">
        <img
          src={imageLeft}
          className="rounded-s-3xl transition-all duration-300 transform hover:scale-105 ease"
          alt="smart watch"
        />
      </div>

      <div dir="ltr" className="cursor-pointer">
        <SimpleImageSlider
          width={800}
          height={400}
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

import "../index.css";
import Slider from "./Slider/Slider";

const imageLeft = "https://i.postimg.cc/mkqQYK72/image-6.jpg";
const imageRight = "https://i.postimg.cc/DfYd34Rk/image-7.jpg";

const images = [
  { url: "https://i.postimg.cc/zBZ6jPS7/image-1.jpg" },
  { url: "https://i.postimg.cc/BbJyWLz1/image-2.jpg" },
  { url: "https://i.postimg.cc/2yTtCjp9/image-3.jpg" },
  { url: "https://i.postimg.cc/mDYq6Nms/image-4.jpg" },
  { url: "https://i.postimg.cc/CM4XG7ZC/image-5.jpg" },
];

const Header = () => {
  return <Slider />;
};

export default Header;

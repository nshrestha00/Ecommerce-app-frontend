import { assets } from "../assets/assets";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Hero = () => {
  const slides = [
    <div key="1" className="item">
      <img className="max-w-full h-[400px] object-cover object-center rounded-lg" src={assets.slide_one} alt="" />
    </div>,
    <div key="2" className="item">
      <img className="max-w-full h-[400px] object-cover object-center rounded-lg" src={assets.slide_two} alt="" />
    </div>,
    <div key="3" className="item">
      <img className="max-w-full h-[400px] object-cover object-center rounded-lg" src={assets.slide_three} alt="" />
    </div>,
     <div key="4" className="item">
     <img className="max-w-full h-[400px] object-cover object-center rounded-lg" src={assets.slide_four} alt="" />
   </div>
  ];

  return (
    <div className="relative w-full h-[400px]">
      <AliceCarousel
        autoPlay
        autoPlayInterval={1000}
        infinite
        disableButtonsControls
        items={slides}
        responsive={{
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
        }}
      />
    </div>
  );
};

export default Hero;

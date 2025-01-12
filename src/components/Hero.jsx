import { assets } from "../assets/assets";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Hero = () => {
  const slides = [
    <div key="1" className="flex justify-center items-center h-[400px]">
      <img 
        className="w-[80%] h-[400px] object-cover object-center rounded-lg" 
        src={assets.slide_one} 
        alt="" 
      />
    </div>,
    <div key="2" className="flex justify-center items-center h-[400px]">
      <img 
        className="w-[80%] h-[400px] object-cover object-center rounded-lg" 
        src={assets.slide_two} 
        alt="" 
      />
    </div>,
    <div key="4" className="flex justify-center items-center h-[400px]">
      <img 
        className="w-[80%] h-[400px] object-cover object-center rounded-lg" 
        src={assets.slide_four} 
        alt="" 
      />
    </div>
  ];

  return (
    <div className="w-full h-[400px] flex items-center justify-center mt-4">
      <div className="w-full max-w-6xl px-4">
        <AliceCarousel
          autoPlay
          autoPlayInterval={1000}
          infinite
          disableButtonsControls
          items={slides}
          responsive={{
            0: { items: 1 },
            768: { items: 1 },
          }}
        />
      </div>
    </div>
  );
};

export default Hero;

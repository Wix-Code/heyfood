import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { useFetchRestaurants } from "../utils/tanksQuerry";

const FreeDrinks = () => {
  const sliderRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { data : restaurants } = useFetchRestaurants()

  const filteredProducts = restaurants?.filter((product) => product.discount !== null);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
    afterChange: (index: number) => setCurrentSlide(index),
  };

  const handleNext = () => sliderRef.current.slickNext();
  const handlePrev = () => sliderRef.current.slickPrev();

  return (
    <div className="max-sm:mx-5 max-lg:mr-5 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-[28px] max-sm:text-[20px] tracking-[1px] font-[800]">
          Offer of the Day! 🤩
        </h1>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className="p-2 w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-gray-200 disabled:opacity-50"
          >
            <WestIcon fontSize="small" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-gray-200 disabled:opacity-50"
          >
            <EastIcon fontSize="small" />
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <Slider ref={sliderRef} {...settings}>
          {filteredProducts?.map((product) => (
            <div key={product.id} className="px-2">
              <div className="flex cursor-pointer flex-col gap-[2px]">
                <img
                  className="h-[110px] rounded-[4px] w-full object-cover"
                  src={product.img}
                  alt=""
                />
                <p className="font-[600] text-[17px]">{product.shop}</p>
                <p className="text-[#757575] text-[14px]">{product.name}</p>
                <p className="text-[15px]">4.2 • 6607+ Ratings</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FreeDrinks;
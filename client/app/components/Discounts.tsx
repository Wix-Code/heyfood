import React, { useRef, useState, useEffect } from 'react';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { data } from '../dummyData';
// Adjust path as needed

const Discounts = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(3)

  // Responsive items per slide
  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth
      if (width < 640) setItemsPerSlide(1) // mobile
      else if (width < 1024) setItemsPerSlide(2) // tablet
      else setItemsPerSlide(3) // desktop
    }
    updateItems()
    window.addEventListener('resize', updateItems)
    return () => window.removeEventListener('resize', updateItems)
  }, [])

  const maxSlide = Math.ceil(data.length / itemsPerSlide) - 1

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide))
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }

  const getSlideItems = () => {
    const start = currentSlide * itemsPerSlide
    return data.slice(start, start + itemsPerSlide)
  }

  return (
    <div className='max-sm:mx-5 max-lg:mr-5'>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-[28px] max-sm:text-[20px] tracking-[1px] font-[800]">Offer of the Day! 🤩</h1>
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
            disabled={currentSlide === maxSlide}
            className="p-2 w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-gray-200 disabled:opacity-50"
          >
            <EastIcon fontSize="small" />
          </button>
        </div>
      </div>

      <div className="flex justify-between max-lg:w-full gap-5 transition-all duration-300">
        {getSlideItems().map((product) => (
          <div key={product.id} className="flex w-full cursor-pointer flex-col gap-[2px]">
            <img
              className="h-[110px] rounded-[4px] w-full object-cover"
              src={product.img}
              alt=""
            />
            <p className="font-[600] text-[17px]">{product.title}</p>
            <p className="text-[#757575] text-[14px]">{product.foods}</p>
            <p className="text-[15px]">4.2 • 6607+ Ratings</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Discounts

/*const ITEMS_PER_SLIDE = 3

const Discounts = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const maxSlide = Math.ceil(data.length / ITEMS_PER_SLIDE) - 1

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide))
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-[28px] tracking-[1px] font-[800]">Offer of the Day! 🤩</h1>
        <div className="flex gap-3">
          <button onClick={handlePrev} className="p-2 rounded bg-gray-100 hover:bg-gray-200">
            <ArrowBackIosOutlinedIcon />
          </button>
          <button onClick={handleNext} className="p-2 rounded bg-gray-100 hover:bg-gray-200">
            <ArrowForwardIosOutlinedIcon />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${Math.ceil(data.length / ITEMS_PER_SLIDE) * 100}%`,
          }}
        >
          {data.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 p-2"
            >
              <div className="flex cursor-pointer flex-col gap-[2px]">
                <img className="h-[110px] rounded-[4px] w-full object-cover" src={product.img} alt="" />
                <p className="font-[600] text-[17px]">{product.title}</p>
                <p className="text-[#757575] text-[14px]">{product.foods}</p>
                <p className="text-[15px]">4.2 • 6607+ Ratings</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Discounts */

/*const Discounts = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-[28px] tracking-[1px] font-[800]">Offer of the Day! 🤩</h1>
        <p className="cursor-pointer text-sm font-semibold text-blue-500">See all</p>
      </div>

      <div className="flex justify-end gap-3 mb-2">
        <button
          className="p-2 rounded bg-gray-200 hover:bg-gray-300"
          onClick={() => scroll('left')}
        >
          <ArrowBackIosOutlinedIcon />
        </button>
        <button
          className="p-2 rounded bg-gray-200 hover:bg-gray-300"
          onClick={() => scroll('right')}
        >
          <ArrowForwardIosOutlinedIcon />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-hidden gap-5 scrollbar-hide scroll-smooth"
      >
        {data.map((product) => (
          <div
            key={product.id}
            className="min-w-[250px] max-w-[250px] flex-shrink-0 cursor-pointer flex-col gap-[2px]"
          >
            <img
              className="h-[110px] rounded-[4px] w-full object-cover"
              src={product.img}
              alt=""
            />
            <p className="font-[600] text-[17px]">{product.title}</p>
            <p className="text-[#757575] text-[14px]">{product.foods}</p>
            <p className="text-[15px]">4.2 • 6607+ Ratings</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discounts; */
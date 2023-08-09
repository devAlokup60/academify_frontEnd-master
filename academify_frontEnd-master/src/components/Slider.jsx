import Card from "./Card";
import "./Slider.css";

import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Slider = ({ sliderData }) => {
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(sliderData.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= sliderData.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  useEffect(() => {
    const autoCarousel = setInterval(rightShiftHandler, 3000);

    return () => {
      clearInterval(autoCarousel);
    };
  }, [index]);

  return (
    <div className="w-13/8 max-w-[95%] lg:flex-row justify-between items-center mx-auto mt-4 p-10 mb-10 transition-all duration-700 rounded-md relative slide-shadow flex">
      <Card sliderData={sliderData[index]} />

      <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold flex-col absolute z-[10] mx-auto group">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer group-hover:text-violet-500 group-hover:rounded-full group-hover:bg-gray-200 relative group-hover:items-center"
        >
          <FiChevronLeft />
        </button>
      </div>
      <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold flex-col right-[1rem] absolute z-[10] mx-auto group">
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer group-hover:text-violet-500 relative group-hover:rounded-full group-hover:bg-gray-200 group-hover:items-center"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
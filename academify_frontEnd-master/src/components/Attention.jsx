import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Attention.css";
import logo from "../components/images/logo.svg";

const Attention = () => {
  return (
    <div className="w-full max-w-[95%] flex flex-col sm:flex-col lg:flex-col justify-between items-center mx-auto att-head">

      <div className="text-center text-lg md:text-xl lg:text-2xl tracking-tight text-textGray opacity-70 font-medium mt-[50px]">
        <p>
          Unlock the full potential of your educational institute with our
          cutting-edge SaaS solutions. Experience increased efficiency, improved
          collaboration, and enhanced academic outcomes across all branches.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-6 sm:mb-[10px] mt-[30px] sm:mt-[50px] att-Btn">
        <a href="#sales_form">
          <button
            className="py-3 px-[120px] md:px-[140px] font-poppins bg-btnBlue text-white btn-shadow border-lightBlue border
              rounded-3xl text-sm md:text-md hover:bg-blue-800 font-bold"
          >
            Pre-Register
          </button>
        </a>
      </div>

    </div>
  );
};

export default Attention;

